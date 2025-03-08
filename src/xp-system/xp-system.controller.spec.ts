import { Test, TestingModule } from '@nestjs/testing';
import { XpSystemController } from './xp-system.controller';

describe('XpSystemController', () => {
  let controller: XpSystemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [XpSystemController],
    }).compile();

    controller = module.get<XpSystemController>(XpSystemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
