import { IsInt, isNotEmpty, IsNotEmpty, IsNumber, MinLength } from "class-validator";

export class AddUserDTO{
  @IsNotEmpty()
  firstName: string;
  
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export class ProductsDTO {
  @IsNotEmpty()
  productName: string;

  @IsNotEmpty()
  productCategory: string;
  
  @IsNotEmpty()
  @IsInt()
  productPrice: number;
  
  @IsNotEmpty()
  productDetails: string;
}