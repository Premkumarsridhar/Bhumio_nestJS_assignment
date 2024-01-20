import { Test, TestingModule } from '@nestjs/testing';
import { MasterTableController } from './master-table.controller';
import { MasterTableService } from './master-table.service';

describe('MasterTableController', () => {
  let controller: MasterTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterTableController],
      providers: [MasterTableService],
    }).compile();

    controller = module.get<MasterTableController>(MasterTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
