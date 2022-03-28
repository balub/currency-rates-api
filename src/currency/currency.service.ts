import { Injectable } from '@nestjs/common';
import { Currency } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

import { ICurrency } from './currency.interface';
import { createCurrency } from './dto/createCurrency.dto';
import { returnCurrency } from './dto/returnCurrency.dto';
import { updateRate } from './dto/updateRate.dto';

@Injectable()
export class CurrencyService {
  constructor(private prisma: PrismaService) {}

  async getCurrency(id: number): Promise<Currency> {
    return this.prisma.currency.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getAllCurrency(): Promise<Currency[]> {
    return this.prisma.currency.findMany();
  }

  async createCurrency(data: createCurrency): Promise<Currency> {
    return this.prisma.currency.create({
      data,
    });
  }

  async updateCurrency(id: number, rate: number): Promise<Currency> {
    return this.prisma.currency.update({
      where: {
        id: id,
      },
      data: {
        rate: rate,
      },
    });
  }

  async deleteCurrency(id: number): Promise<string> {
    const deleteUser = await this.prisma.currency.delete({
      where: {
        id: id,
      },
    });
    return 'Item Removed Successfully!!';
  }
}
