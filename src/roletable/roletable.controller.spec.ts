import { Test, TestingModule } from '@nestjs/testing';
import { RoletableController } from './roletable.controller';
import { RoletableService } from './roletable.service';

describe('RoletableController', () => {
  let controller: RoletableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoletableController],
      providers: [RoletableService],
    }).compile();

    controller = module.get<RoletableController>(RoletableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
