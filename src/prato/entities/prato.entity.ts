import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Restaurante } from 'src/restaurante/entities/restaurante.entity';

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

    // Relacionamento com a tabela restaurante
    @ManyToOne(() => Restaurante, (restaurante) => restaurante.pratos)
    restaurante: Restaurante;

}