import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['telefone']) // Tornar o telefone único na hora do cadastro de restaurante
export class Restaurante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 15 })
  telefone: string;

  @Column()
  endereco: string;
}