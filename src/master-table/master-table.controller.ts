import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MasterTableService } from './master-table.service';
import { CreateMasterTableDto } from './dto/create-master-table.dto';
import { UpdateMasterTableDto } from './dto/update-master-table.dto';

@Controller('master-table')
export class MasterTableController {
  constructor(private readonly masterTableService: MasterTableService) {}

  @Post()
  create(@Body() createMasterTableDto: CreateMasterTableDto) {
    return this.masterTableService.create(createMasterTableDto);
  }

  @Get()
  findAll() {
    return this.masterTableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.masterTableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMasterTableDto: UpdateMasterTableDto) {
    return this.masterTableService.update(+id, updateMasterTableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.masterTableService.remove(+id);
  }
}
