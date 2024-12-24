import { Injectable } from '@nestjs/common';
import { AddUserDTO, ProductsDTO } from './admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity, UsersEntity } from './admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(@InjectRepository(UsersEntity) private usersRepo: Repository<UsersEntity>, @InjectRepository(ProductsEntity)private productsrepo: Repository<ProductsEntity>, ){}

  addUsers(addUsers: AddUserDTO): Promise<AddUserDTO> {
    return this.usersRepo.save(addUsers);
  }

  async viewUsers(): Promise<UsersEntity[]>{
    return this.usersRepo.find();
  }

  async updateUser(id: number, updateUser: AddUserDTO) {
    return await this.usersRepo.update(id, updateUser)
  }

  addProducts(addProducts: ProductsDTO): Promise<ProductsDTO> {
    return this.productsrepo.save(addProducts);
  }

  async viewProducts(): Promise<ProductsEntity[]>{
    return this.productsrepo.find();
  }

  async updateProduct(id: number, updateProduct: ProductsDTO) {
    return await this.productsrepo.update(id, updateProduct);
  }

  searchCategory(productCategory: string): Promise<ProductsEntity[]>{
    return this.productsrepo.find({where: {productCategory}});
  }
} 
