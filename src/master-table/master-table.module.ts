import { Module } from '@nestjs/common';
import { MasterTableService } from './master-table.service';
import { MasterTableController } from './master-table.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterTable } from './entities/master-table.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterTable])],
  controllers: [MasterTableController],
  providers: [MasterTableService],
})
export class MasterTableModule {}
