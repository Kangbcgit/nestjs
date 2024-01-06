import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';

// nest generate(g) controller(co) 컨트롤러 폴더생성 (터미널) 
@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) { }
    //@Get => 이런걸 데코레이터(Decorator)라고 부름
    @Get()
    getAll() {
        return this.moviesService.getAll();
    }

    @Get('/:id')
    getOne(@Param('id') targetId: string) {
        return this.moviesService.getOne(targetId);
    }

    @Post()
    createMovie(@Body() movieData) {
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    deleteMovie(@Param('id') targetId: string) {
        return this.moviesService.deleteOne(targetId);
    }

    @Patch('/:id')
    patchMovie(@Param('id') targetId: string, @Body() updateData) {
        return this.moviesService.update(targetId, updateData);
    }
}
