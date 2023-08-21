/* eslint-disable prettier/prettier */
import { BadRequestException } from '@nestjs/common';
import { TransactionService } from './../transaction/transaction.service';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CanActivate, ExecutionContext } from '@nestjs/common';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { Transaction } from 'src/transaction/entities/transaction.entity';

@Injectable()
export class AuthorGuard implements CanActivate {
  constructor(
    private readonly transactionsService: TransactionService,
    private readonly categoryService: CategoryService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { id, type } = request.params;

    let entity: Transaction | Category;

    switch (type) {
      case 'transaction':
        entity = await this.transactionsService.findOne(id);
        break;
      case 'category':
        entity = await this.categoryService.findOne(id);
        break;

      default:
        throw new NotFoundException('Something went wrong...');
    }

    const user = request.user;

    if (entity && user && user.id === entity.user.id) {
      return true;
    }
    throw new BadRequestException('Something went wrong...');
  }
}
