import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './movies.entities';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll() {
    return this.movies;
  }

  getOne(id: string) {
    const movie = this.movies.find(movie => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`당신이 찾고있는 id: ${id}번 영화데이터는 존재하지 않습니다.`)
    }
    return movie;
  }

  create(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData
    })
  }

  deleteOne(id: string): void {
    this.getOne(id);
    const movie = this.movies.filter(movie => movie.id !== +id);
    this.movies = movie;
  }

  update(id: string, updateData) {
    let movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }

}
