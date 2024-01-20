import { Module } from '@nestjs/common';
import { LocalService } from './local/local.service';
import { JwtService } from './jwt/jwt.service';

@Module({
  providers: [LocalService, JwtService]
})
export class AuthModule {}
