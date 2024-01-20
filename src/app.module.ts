import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PowerUserModule } from './power-user/power-user.module';
import { AdminModule } from './admin/admin.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { SupportDeskModule } from './support-desk/support-desk.module';
import { MasterTableModule } from './master-table/master-table.module';
import { AuthModule } from './auth/auth.module';
import { MasterTable } from './master-table/entities/master-table.entity';
import { RoletableModule } from './roletable/roletable.module';
import { Roletable } from './roletable/entities/roletable.entity';
import { GroupModule } from './group/group.module';
import { GroupEntity } from './group/entities/group.entity';
import { MailModule } from './mail/mail.module';
import { TransactionsModule } from './transactions/transactions.module';
import { Transaction } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MasterTable,
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'prem',
      username: 'postgres',
      entities: [
        MasterTable,
        Roletable,
        GroupEntity,
        Transaction, 
      ],
      database: 'nest_assign',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    PowerUserModule,
    AdminModule,
    SuperAdminModule,
    SupportDeskModule,
    MasterTableModule,
    AuthModule,
    RoletableModule,
    GroupModule,
    MailModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}