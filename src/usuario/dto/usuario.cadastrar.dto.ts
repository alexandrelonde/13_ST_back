import{IsString} from 'class-validator';
export class UsuarioCadastrarDto {
  @IsString()
  nome: string;
  
  @IsString()
  email: string;

  @IsString()
  password: string;
}