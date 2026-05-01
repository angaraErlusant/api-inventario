import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('inventario')
export class Inventario {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  nombreProducto: string;

  @ApiProperty()
  @Column('int')
  stock: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  descripcionOpcional: string;
}