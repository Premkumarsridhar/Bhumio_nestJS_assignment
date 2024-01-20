import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoletableService } from './roletable.service';
import { CreateRoletableDto } from './dto/create-roletable.dto';
import { UpdateRoletableDto } from './dto/update-roletable.dto';

@Controller('roletable')
export class RoletableController {
  constructor(private readonly roletableService: RoletableService) {}

  @Post()
  create(@Body() createRoletableDto: CreateRoletableDto) {
    return this.roletableService.create(createRoletableDto);
  }

  @Get()
  findAll() {
    return this.roletableService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roletableService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoletableDto: UpdateRoletableDto) {
    return this.roletableService.update(+id, updateRoletableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roletableService.remove(+id);
  }
}
