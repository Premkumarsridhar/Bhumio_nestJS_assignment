import { Module } from '@nestjs/common';
import { PowerUserService } from './power-user.service';
import { PowerUserController } from './power-user.controller';

@Module({
  controllers: [PowerUserController],
  providers: [PowerUserService],
})
export class PowerUserModule {}
