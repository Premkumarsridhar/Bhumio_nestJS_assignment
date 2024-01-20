import { Test, TestingModule } from '@nestjs/testing';
import { MasterTableService } from './master-table.service';

describe('MasterTableService', () => {
  let service: MasterTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterTableService],
    }).compile();

    service = module.get<MasterTableService>(MasterTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
