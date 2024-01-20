import { Injectable } from '@nestjs/common';
import { CreatePowerUserDto } from './dto/create-power-user.dto';
import { UpdatePowerUserDto } from './dto/update-power-user.dto';

@Injectable()
export class PowerUserService {
  create(createPowerUserDto: CreatePowerUserDto) {
    return 'This action adds a new powerUser';
  }

  findAll() {
    return `This action returns all powerUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} powerUser`;
  }

  update(id: number, updatePowerUserDto: UpdatePowerUserDto) {
    return `This action updates a #${id} powerUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} powerUser`;
  }
}
