import { Injectable } from '@nestjs/common';
import { CreateRoletableDto } from './dto/create-roletable.dto';
import { UpdateRoletableDto } from './dto/update-roletable.dto';
import { Roletable } from './entities/roletable.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoletableService {

  constructor(
    @InjectRepository(Roletable)
    private readonly roletableRepository: Repository<Roletable>,
  ) {}

  async create(createRoleTableDto: CreateRoletableDto): Promise<Roletable> {
    const newRole = this.roletableRepository.create(createRoleTableDto);
    return this.roletableRepository.save(newRole);
  }

  findAll() {
    return `This action returns all roletable`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roletable`;
  }

  update(id: number, updateRoletableDto: UpdateRoletableDto) {
    return `This action updates a #${id} roletable`;
  }

  remove(id: number) {
    return `This action removes a #${id} roletable`;
  }
}
