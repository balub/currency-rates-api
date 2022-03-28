import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';

@Module({
  imports: [PrismaService],
  controllers: [CurrencyController],
  providers: [CurrencyService],
})
export class CurrencyModule {}
