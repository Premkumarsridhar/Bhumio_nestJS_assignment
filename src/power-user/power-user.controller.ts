import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PowerUserService } from './power-user.service';
import { CreatePowerUserDto } from './dto/create-power-user.dto';
import { UpdatePowerUserDto } from './dto/update-power-user.dto';

@Controller('power-user')
export class PowerUserController {
  constructor(private readonly powerUserService: PowerUserService) {}

  @Post()
  create(@Body() createPowerUserDto: CreatePowerUserDto) {
    return this.powerUserService.create(createPowerUserDto);
  }

  @Get()
  findAll() {
    return this.powerUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.powerUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePowerUserDto: UpdatePowerUserDto) {
    return this.powerUserService.update(+id, updatePowerUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.powerUserService.remove(+id);
  }
}
