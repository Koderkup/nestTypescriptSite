import { IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(6, { message: 'Pssword`s length must be six symbols' })
  password: string;

  name: string;
}
