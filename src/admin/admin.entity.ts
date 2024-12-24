import { IsEmail, IsInt, IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class UsersEntity{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsNotEmpty()
  firstName: string;

  @Column()
  @IsNotEmpty()
  lastName: string;

  @Column({ unique: true })
  @IsNotEmpty()
  username: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;
}

@Entity("products")
export class ProductsEntity{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @IsNotEmpty()
  productName: string;

  @Column()
  @IsNotEmpty()
  productCategory: string;

  @Column()
  @IsNotEmpty()
  @IsInt()
  productPrice: number;

  @Column()
  @IsNotEmpty()
  productDetails: string;

}