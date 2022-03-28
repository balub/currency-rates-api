import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICurrency } from './currency.interface';
import { createCurrency } from './dto/createCurrency.dto';
import { returnCurrency } from './dto/returnCurrency.dto';
import { updateRate } from './dto/updateRate.dto';

@Injectable()
export class CurrencyService {
  constructor(private prismaService: PrismaService) {}

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

  updateCurrency(id: number, updateRate: updateRate): returnCurrency {
    const index = this.currencies.findIndex((item) => item.id == id);
    this.currencies[index].rate = updateRate.rate;
    return this.currencies[index];
  }

  deleteCurrency(id: number): string {
    if (!id) return 'Please Enter Valid ID';
    this.currencies.splice(id - 1, 1);
    return 'Item Removed Successfully!!';
  }
}
