import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDTO {

  @IsString()// 해당 데코레이션 하단의 데이터 값이 string인지 검증/ 에러시 오류 throw
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsOptional() //값이 할당되지 않으면 이 해당 과정을 스킵함. (? 연산자와의 차이점: ?는 타입스크립트 문법으로 개발과정에 타입 체크에 도움을 줌. 데코레이션은 빌드 후에 작용함.)
  @IsString({ each: true }) // class-validator의 기능중 하나로, 하나 하나 열거하여 확인. 
  readonly genres: string[];
}