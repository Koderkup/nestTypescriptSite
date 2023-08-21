import { CategoryService } from './../category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { Transaction } from './entities/transaction.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Category])],
  controllers: [TransactionController],
  providers: [TransactionService, CategoryService],
})
export class TransactionModule {}
