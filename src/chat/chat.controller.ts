import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
  Ctx,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class ChatController {
  @MessagePattern('message')
  async consumeMessage(@Payload() message: string, @Ctx() context: RmqContext) {
    console.log(`ssss message: ${message}`);
    // Handle the message here
  }
}
