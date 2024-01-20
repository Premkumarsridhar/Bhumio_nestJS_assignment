// create-transaction.dto.ts

import { IsInt, IsNotEmpty, IsDefined } from 'class-validator';

export class CreateTransactionDto {
  @IsDefined()
  @IsNotEmpty()
  pdf_data: Buffer;

  @IsInt()
  @IsNotEmpty()
  userid: number;
}
