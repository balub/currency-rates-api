import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseFloatPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Currency } from '@prisma/client';

import { CurrencyService } from './currency.service';
import { createCurrency } from './dto/createCurrency.dto';
import { returnCurrency } from './dto/returnCurrency.dto';
import { updateRate } from './dto/updateRate.dto';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('/:currency_id')
  async getCurrency(
    @Param('currency_id', ParseIntPipe) id: number,
  ): Promise<Currency> {
    return this.currencyService.getCurrency(id);
  }

  @Get()
  async getAllCurrency(): Promise<Currency[]> {
    return this.currencyService.getAllCurrency();
  }

  @Post()
  async createCurrency(
    @Body() createCurrency: createCurrency,
  ): Promise<Currency> {
    return this.currencyService.createCurrency(createCurrency);
  }

  @Patch('/:currency_id')
  async updateCurrency(
    @Param('currency_id', ParseIntPipe) id: number,
    @Body('rate', ParseFloatPipe) rate: number,
  ): Promise<Currency> {
    return this.currencyService.updateCurrency(id, rate);
  }

  @Delete('/:currency_id')
  async deleteCurrency(
    @Param('currency_id', ParseIntPipe) id: number,
  ): Promise<string> {
    return this.currencyService.deleteCurrency(id);
  }
}
