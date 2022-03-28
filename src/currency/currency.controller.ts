import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('currency')
export class CurrencyController {
  @Get('/:currency_id')
  getCurrency() {
    return 'One currency';
  }

  @Get()
  getAllCurrency() {
    return 'All currencies';
  }

  @Post()
  createCurrency() {
    return 'Created currency';
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
