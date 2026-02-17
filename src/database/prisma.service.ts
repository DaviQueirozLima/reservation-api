import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const url = process.env.DATABASE_URL;

    console.log('DATABASE_URL runtime =>', url);
    console.log('TYPE =>', typeof url);

    const adapter = new PrismaPg({
      connectionString: url,
    });

    super({ adapter });
  }
}
