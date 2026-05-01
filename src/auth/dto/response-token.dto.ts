import { ApiProperty } from '@nestjs/swagger';

export class ResponseTokenDto {
  @ApiProperty()
  token: string;
}