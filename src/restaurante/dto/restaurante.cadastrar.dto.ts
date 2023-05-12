import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class RestauranteCadastrarDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;
}