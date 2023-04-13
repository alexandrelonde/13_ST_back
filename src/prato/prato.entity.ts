import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Prato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 200 })
  descricao: string;

  @Column()
  preco: number;
}