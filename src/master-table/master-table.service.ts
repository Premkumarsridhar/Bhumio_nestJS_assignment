import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMasterTableDto } from './dto/create-master-table.dto';
import { UpdateMasterTableDto } from './dto/update-master-table.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MasterTable } from './entities/master-table.entity';
import { FindOneOptions, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MasterTableService {

  constructor(
    @InjectRepository(MasterTable)
    private readonly masterRepository: Repository<MasterTable>,
  ) {}

  async findByEmail(email: string): Promise<MasterTable> {
    const user = await this.masterRepository.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }

    return user;
  }

  // async storeResetToken(id: number, resetToken: string): Promise<void> {
  //   const user = await this.masterRepository.findOne(id);

  //   if (!user) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }

  //   user.resetToken = resetToken;
  //   await this.masterRepository.save(user);
  // }

  async validatePassword(user: MasterTable, password: string): Promise<boolean> {
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      throw new NotFoundException('Invalid credentials');
    }
    return true;
  }

  async create(createMasterTableDto: CreateMasterTableDto): Promise<MasterTable> {
    const newMaster = this.masterRepository.create(createMasterTableDto);
    return this.masterRepository.save(newMaster);
  }

  async findAll(): Promise<MasterTable[]> {
    return this.masterRepository.find();
  }

  async findOne(id: number): Promise<MasterTable> {
    try {
      const masterTable = await this.masterRepository.findOneOrFail({
        where: { id },
      } as FindOneOptions<MasterTable>);
      return masterTable;
    } catch (error) {
      throw new NotFoundException(`MasterTable with ID #${id} not found`);
    }
  }
  

  update(id: number, updateMasterTableDto: UpdateMasterTableDto) {
    return `This action updates a #${id} masterTable`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterTable`;
  }
}
