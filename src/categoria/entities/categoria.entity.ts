import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produto } from '../../produto/entities/produto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 50, nullable: false })
  nomeCategoria: string;

  @Column({ length: 255, nullable: true })
  @ApiProperty()
  descricao: string;

  @ApiProperty()
  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto: Produto[];
}
