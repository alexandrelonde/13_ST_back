import { IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

export class SearchDto {
  @IsString()
  term: string;
}