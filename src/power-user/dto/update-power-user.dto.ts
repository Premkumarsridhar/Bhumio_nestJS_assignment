import { PartialType } from '@nestjs/mapped-types';
import { CreatePowerUserDto } from './create-power-user.dto';

export class UpdatePowerUserDto extends PartialType(CreatePowerUserDto) {}
