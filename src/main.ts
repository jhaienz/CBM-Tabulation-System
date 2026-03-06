import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    logger: ['error', 'debug', 'warn', 'log', 'verbose'],
  });
  await app.listen(process.env.PORT as string);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  console.log(`Server is running on PORT: ${process.env.PORT}`);
}
bootstrap();
