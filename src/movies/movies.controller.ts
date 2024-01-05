import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

// nest generate(g) controller(co) 컨트롤러 폴더생성 (터미널) 
@Controller('movies')
export class MoviesController {
    //@Get => 이런걸 데코레이터(Decorator)라고 부름
    @Get()
    getAll() {
        return 'this will retun all movies';
    }

    @Get('/:id')
    getOne(@Param('id') targetId: string) {
        return `this will return one movie is id: ${targetId}`;
    }
    
    @Post('create')
    createMovie() {
        return `this will create movie`;
    }

    @Delete('delete/:id')
    deleteMovie(@Param('id') targetId: string) {
        return `this will delete movie id: ${targetId}`;
    }

    @Patch('patch/:id')
    patchMovie(@Param('id') targetId: string) {
        return `patch는 targetid ${targetId}번 영화 일부 데이터를 업데이트 합니다.`;
    }

    @Put('put/:id')
    putMovie(@Param('id') targetId: string) {
        return `patch는 targetid ${targetId}번 영화 전체 데이터를 업데이트 합니다.`;
    }
}
