import { AuthenticationModule } from './modules/authentication/authentication.module';
import { AuthenticationService } from './modules/authentication/authentication.service';
import { UsersModule } from './modules/users/users.module';
import { UsersService } from './modules/users/users.service';
import { PostsModule } from './modules/posts/posts.module';
import { PostsService } from './modules/posts/posts.service';
import { PostsController } from './modules/posts/posts.controller';
import { DatabaseModule } from './database/database.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    AuthenticationModule,
    UsersModule,
    PostsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION_TIME: Joi.string().required(),

      }),
    }),
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
