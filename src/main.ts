import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for all origins (safe for admin / internal apps)
  app.enableCors({
    origin: true,
    credentials: true,
  });

  // ✅ Railway / Cloud port support
  const port = process.env.PORT || 3000;
  await app.listen(port);

  console.log(`✅ Server running on port ${port}`);
}

bootstrap();
