import { IsNumber, IsString } from "class-validator";

export class UpdateMovieDto {

  @IsString()
  readonly title?: string;
  @IsNumber()
  readonly year?: number;
  @IsString({ each: true }) //유효성 검사 데이터 타입이 배열일 때, 각 항목의 유효성 검사를 실행.
  readonly genres?: string[];
}