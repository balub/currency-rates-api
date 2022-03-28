import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyService } from './currency/currency.service';
import { CurrencyModule } from './currency/currency.module';
import { PrismaServiceService } from './prisma-service/prisma-service.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [CurrencyModule],
  controllers: [AppController],
  providers: [AppService, CurrencyService, PrismaServiceService, PrismaService],
})
export class AppModule {}
