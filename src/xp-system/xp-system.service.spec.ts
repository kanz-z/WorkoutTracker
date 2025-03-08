import { Test, TestingModule } from '@nestjs/testing';
import { XpSystemService } from './xp-system.service';

describe('XpSystemService', () => {
  let service: XpSystemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [XpSystemService],
    }).compile();

    service = module.get<XpSystemService>(XpSystemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
