import { IsBoolean, IsInt } from 'class-validator';

export class CreateGroupDto {
  @IsInt()
  groupId: number;

  @IsInt()
  userId: number;

  @IsBoolean()
  isAdmin: boolean;
}
