import { Module } from '@nestjs/common';
import { RabbitMQClient } from './rabbit-mq.client';
import { RabbitMQServer } from './rabbit-mq.server';

@Module({
  providers: [RabbitMQClient, RabbitMQServer],
  exports: [RabbitMQClient],
})
export class RabbitMQModule {}
