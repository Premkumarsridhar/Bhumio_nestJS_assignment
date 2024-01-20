import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsBoolean } from 'class-validator';

export class GroupEntity {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  @IsInt()
  groupId: number;

  @ApiProperty()
  @IsInt()
  userId: number;

  @ApiProperty()
  @IsBoolean()
  isAdmin: boolean;

  constructor(id: number, groupId: number, userId: number, isAdmin: boolean) {
    this.id = id;
    this.groupId = groupId;
    this.userId = userId;
    this.isAdmin = isAdmin;
  }
}
