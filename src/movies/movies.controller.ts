import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './dto/create-movie.dto';

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
    getOne(@Param('id') targetId: number) {
        console.log(typeof targetId);
        return this.moviesService.getOne(targetId);
    }

    @Post()
    createMovie(@Body() movieData: CreateMovieDTO) {
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    deleteMovie(@Param('id') targetId: number) {
        console.log(typeof targetId);
        return this.moviesService.deleteOne(targetId);
    }

    @Patch('/:id')
    patchMovie(@Param('id') targetId: number, @Body() updateData) {
        console.log(typeof targetId);
        return this.moviesService.update(targetId, updateData);
    }
}
