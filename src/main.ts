import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //DTO에서 선언되지 않은 데이터를 제거해버림.
    forbidNonWhitelisted: true, // whiteList 기능의 강화버전. 제거를 넘어서 오류로 간주함.
    transform: true //자동으로 type을 변경해줌 (ex: @param('id')는 string이지만 typescript 문법으로 number로 적어놓을시 자동으로 number타입으로 변환해줌.)
  })) // 유효성 검사 코드
  await app.listen(3000);
}
bootstrap();
