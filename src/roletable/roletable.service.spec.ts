import { Test, TestingModule } from '@nestjs/testing';
import { RoletableService } from './roletable.service';

describe('RoletableService', () => {
  let service: RoletableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoletableService],
    }).compile();

    service = module.get<RoletableService>(RoletableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
