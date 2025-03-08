import { Module } from '@nestjs/common';
import { XpSystemController } from './xp-system.controller';
import { XpSystemService } from './xp-system.service';

@Module({
  controllers: [XpSystemController],
  providers: [XpSystemService]
})
export class XpSystemModule {}
