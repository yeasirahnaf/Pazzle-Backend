import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity, UsersEntity } from './admin.entity';
import { AdminController } from './admin.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity,ProductsEntity]),],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
