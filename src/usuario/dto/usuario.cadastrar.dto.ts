import { IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class UsuarioCadastrarDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}