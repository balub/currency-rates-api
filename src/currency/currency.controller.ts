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

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get('/:currency_id')
  getCurrency(@Param('currency_id') id): returnCurrency {
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

  @Patch()
  updateCurrency() {
    return 'Updated currency';
  }

  @Delete()
  deleteCurrency() {
    return 'Deleted Currency';
  }
}
