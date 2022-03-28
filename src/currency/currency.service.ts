import { Injectable } from '@nestjs/common';
import { ICurrency } from './currency.interface';
import { createCurrency } from './dto/createCurrency.dto';
import { returnCurrency } from './dto/returnCurrency.dto';

@Injectable()
export class CurrencyService {
  currencies: ICurrency[] = [
    { id: 1, currency: 'INR', rate: 76.1 },
    { id: 2, currency: 'EUR', rate: 0.91 },
    { id: 3, currency: 'JPY', rate: 123.61 },
  ];

  getCurrency(id: number): returnCurrency {
    return this.currencies.find((item) => item.id == id);
  }

  getAllCurrency(): returnCurrency[] {
    return this.currencies;
  }

  createCurrency(data: createCurrency): returnCurrency[] {
    const res = this.currencies.push({
      id: this.currencies.length + 1,
      currency: data.currency,
      rate: data.rate,
    });
    return this.currencies;
  }

  updateCurrency() {
    return 'Updated currency';
  }

  deleteCurrency() {
    return 'Deleted Currency';
  }
}
