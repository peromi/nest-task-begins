import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ 
 
    TypeOrmModule.forRoot({
    type:'postgres',
    host:"127.0.0.1",
    username: "postgres",
    password: "root",
    port: 5432,
    database: "taskmanagement",
    autoLoadEntities: true,
    synchronize:true
  }), TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
