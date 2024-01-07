import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './movies.entities';
import { CreateMovieDTO } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll() {
    return this.movies;
  }

  getOne(id: number) {
    console.log(typeof id);
    const movie = this.movies.find(movie => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`당신이 찾고있는 id: ${id}번 영화데이터는 존재하지 않습니다.`)
    }
    return movie;
  }

  create(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData
    })
  }

  deleteOne(id: number): void {
    this.getOne(id);
    const movie = this.movies.filter(movie => movie.id !== +id);
    this.movies = movie;
  }

  update(id: number, updateData) {
    let movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }

}
