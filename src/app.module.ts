import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrencyService } from './currency/currency.service';
import { CurrencyModule } from './currency/currency.module';

@Module({
  imports: [CurrencyModule],
  controllers: [AppController],
  providers: [AppService, CurrencyService],
})
export class AppModule {}
