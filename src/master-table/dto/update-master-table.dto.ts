import { PartialType } from '@nestjs/mapped-types';
import { CreateMasterTableDto } from './create-master-table.dto';

export class UpdateMasterTableDto extends PartialType(CreateMasterTableDto) {}
