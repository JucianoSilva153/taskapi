
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );
  await app.listen(process.env.PORT ?? 3000);
  console.log("Api de Gestão de Tarefas rodando em 'http://localhost:3000/'")
}
bootstrap();
