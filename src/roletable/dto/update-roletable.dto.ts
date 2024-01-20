import { PartialType } from '@nestjs/mapped-types';
import { CreateRoletableDto } from './create-roletable.dto';

export class UpdateRoletableDto extends PartialType(CreateRoletableDto) {}
