import { Prato } from 'src/prato/prato.entity';
import { Entity, Column, PrimaryGeneratedColumn, Unique, OneToMany } from 'typeorm';

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

  // Relacionamento com a tabela pratos
  @OneToMany(() => Prato, (prato) => prato.restaurante)
  pratos: Prato[];
}