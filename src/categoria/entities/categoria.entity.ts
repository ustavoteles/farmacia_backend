import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 50, nullable: false })
  nomeCategoria: string;

  @Column({ length: 255, nullable: true })
  descricao: string;

  // @OneToMany(() => Produto, (produto) => produto.categoria)
  // produto: Produto[];
}
