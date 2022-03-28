import { Module } from '@nestjs/common';
import { CurrencyController } from './currency.controller';

@Module({
  controllers: [CurrencyController],
})
export class CurrencyModule {}
