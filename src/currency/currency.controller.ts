import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { createCurrency } from './dto/createCurrency.dto';
import { returnCurrency } from './dto/returnCurrency.dto';
import { updateRate } from './dto/updateRate.dto';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('/:currency_id')
  getCurrency(@Param('currency_id') id: number): returnCurrency {
    return this.currencyService.getCurrency(id);
  }

  @Get()
  getAllCurrency(): returnCurrency[] {
    return this.currencyService.getAllCurrency();
  }

  @Post()
  createCurrency(@Body() createCurrency: createCurrency) {
    return this.currencyService.createCurrency(createCurrency);
  }

  @Patch('/:currency_id')
  updateCurrency(
    @Param('currency_id') id: number,
    @Body() updateRate: updateRate,
  ): returnCurrency {
    return this.currencyService.updateCurrency(id, updateRate);
  }

  @Delete('/:currency_id')
  deleteCurrency(@Param('currency_id') id: number): string {
    return this.currencyService.deleteCurrency(id);
  }
}
