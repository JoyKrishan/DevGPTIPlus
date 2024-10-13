import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './boards/board.entity';
import { BoardService } from './boards/board.service';
import { BoardController } from './boards/board.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Board])
  ],
  controllers: [BoardController],
  providers: [BoardService],
})
export class AppModule {}