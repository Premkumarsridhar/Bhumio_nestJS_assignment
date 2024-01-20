import { Test, TestingModule } from '@nestjs/testing';
import { PowerUserController } from './power-user.controller';
import { PowerUserService } from './power-user.service';

describe('PowerUserController', () => {
  let controller: PowerUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PowerUserController],
      providers: [PowerUserService],
    }).compile();

    controller = module.get<PowerUserController>(PowerUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
