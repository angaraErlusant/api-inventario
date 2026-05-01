import { ApiProperty } from '@nestjs/swagger';

export class ResponseInventarioDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombreProducto: string;

  @ApiProperty()
  stock: number;

  @ApiProperty({ required: false })
  descripcionOpcional: string;
}