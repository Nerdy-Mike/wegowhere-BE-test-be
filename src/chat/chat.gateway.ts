import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { RabbitMQClient } from '../rabbit-mq/rabbit-mq.client';

@WebSocketGateway(8001, {
  cors: true,
})
export class ChatGateway {
  constructor(private readonly rabbitMQClient: RabbitMQClient) {}

  @WebSocketServer()
  server;

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() message: string): Promise<void> {
    const response = await this.rabbitMQClient.sendMessage(
      'rpc_queue',
      message,
    );
    if (response) {
      this.server.emit('message', response);
    }
  }
}
