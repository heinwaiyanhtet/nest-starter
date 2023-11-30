// cat.module.ts
import { Module } from '@nestjs/common';
import { CatController } from './cats.controller';
import { AppService } from './app.service';

@Module({
  controllers: [CatController],
  providers: [AppService],
})
export class CatModule {}
