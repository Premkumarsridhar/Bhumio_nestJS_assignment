import { Module } from '@nestjs/common';
import { RoletableService } from './roletable.service';
import { RoletableController } from './roletable.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roletable } from './entities/roletable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roletable])],
  controllers: [RoletableController],
  providers: [RoletableService],
})
export class RoletableModule {}
