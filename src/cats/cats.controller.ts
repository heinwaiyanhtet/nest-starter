import { Body, Controller, Get, Head, Header, HttpCode, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query, Redirect, Req } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('cats')
export class CatController {
  constructor(private readonly catsService: CatsService) {}
  // @Post()
  // create() : string{
  //   return "This action adds a new cat";    
  // }

  // @Get()
  // FindCats(@Req() request : Request ): string {
  //   return "This is all cats";
  // }


  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }))
    id: number,
  ) {
    return this.catsService.findOne(id);
  }
  

  @Get()
  findAll() : string{
    // return 'This route uses a wildcard';
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com',302)
  getDocs(@Query('version') version){
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
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
