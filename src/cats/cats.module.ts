// cat.module.ts
import { Global, Module } from '@nestjs/common';
import { CatController } from './cats.controller';
import { AppService } from '../app.service';
import { CatsService } from './cats.service';


@Global()
@Module({
  controllers: [CatController],
  providers: [CatsService],
  exports : [CatsService]
})
export class CatModule {}
