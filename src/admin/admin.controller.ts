import { Body, Controller, Get, NotFoundException, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AddUserDTO, ProductsDTO } from './admin.dto';
import { ProductsEntity, UsersEntity } from './admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('adduser')
  @UsePipes(ValidationPipe)
  addUsers(@Body() addUserDto: AddUserDTO):
  Promise<AddUserDTO>{
    return this.adminService.addUsers(addUserDto);
  }

  @Get('viewusers')
  async viewUsers(): Promise<UsersEntity[]>{
    return this.adminService.viewUsers();
  }

  @Patch('update/:id')
  @UsePipes(ValidationPipe)
  updateUser(@Param('id') id: number, @Body() updateUser: AddUserDTO){
    return this.adminService.updateUser(id,updateUser)
  }

  @Post('addproduct')
  @UsePipes(ValidationPipe)
  addProducts(@Body() addProducts: ProductsDTO):
  Promise<ProductsDTO>{
    return this.adminService.addProducts(addProducts);
  }

  @Get('viewproducts')
  async viewProducts(): Promise<ProductsEntity[]>{
    return this.adminService.viewProducts();
  }

  @Patch('updateproduct/:id')
  @UsePipes(ValidationPipe)
  updateProduct(@Param('id') id: number, @Body() updateProduct: ProductsDTO){
    return this.adminService.updateProduct(id,updateProduct)
  }

  @Get('viewProducts/:productcategory')
  async searchCategory(@Param('productCategory') productCategory: string): Promise<ProductsEntity[]> {
    const products = await this.adminService.searchCategory(productCategory);
    if (!this.viewProducts || products.length === 0) {
      throw new NotFoundException(`No products found for this category: ${productCategory}`)
    }
    return products;
  }
}
