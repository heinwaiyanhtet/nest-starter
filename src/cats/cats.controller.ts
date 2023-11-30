import { Controller, Get, Head, Header, HttpCode, Post, Query, Redirect, Req } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('cats')
export class CatController {
  constructor(private readonly appService: AppService) {}

  // @Post()
  // create() : string{
  //   return "This action adds a new cat";    
  // }

  // @Get()
  // FindCats(@Req() request : Request ): string {
  //   return "This is all cats";
  // }

  @Get()
  findAll() : string{
    return 'This route uses a wildcard';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com',302)
  getDocs(@Query('version') version){
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  // @Post()
  // @HttpCode(204)
  // createWithStatusCode(){
  //   return 'This action adds a new cat';
  // }


  // @Post()
  // @Header('Cache-Control','none')
  // createWtihHeader(){
  //   return 'This action adds a new cat'
  // }


  
}
