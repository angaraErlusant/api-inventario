import { IsString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateInventarioDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nombreProducto: string;

  @ApiProperty()
  @IsInt()
  stock: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  descripcionOpcional?: string;
}