import { Controller, Get, Head, Header, HttpCode, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class CatController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create() : string{
    return "This action adds a new cat";    
  }

  @Get()
  FindCats(@Req() request : Request ): string {
    return "This is all cats";
  }

  @Get('ab*cd')
  findAll(){
    return 'This route uses a wildcard';
  }

  @Post()
  @HttpCode(204)
  createWithStatusCode(){
    return 'This action adds a new cat';
  }


  @Post()
  @Header('Cache-Control','none')
  createWtihHeader(){
    return 'This action adds a new cat'
  }


  
}
