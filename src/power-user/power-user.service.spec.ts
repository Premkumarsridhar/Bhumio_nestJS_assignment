import { Test, TestingModule } from '@nestjs/testing';
import { PowerUserService } from './power-user.service';

describe('PowerUserService', () => {
  let service: PowerUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PowerUserService],
    }).compile();

    service = module.get<PowerUserService>(PowerUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
