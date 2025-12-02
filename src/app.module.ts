import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Donor } from './donor/entities/donor.entity';
import { Donation } from './donation/entities/donation.entity';
import { DonationsModule } from './donation/donation.module';
import { DonorModule } from './donor/donor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // ✅ Railway Postgres
      entities: [Donor, Donation],
      synchronize: true,
      logging: false,
      ssl: process.env.DATABASE_URL
        ? { rejectUnauthorized: false }
        : false,
    }),
    DonationsModule,
    DonorModule,
  ],
})
export class AppModule {}
