import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.entity';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  create(@Body() createBoardDto: { title: string; content: string }): Promise<Board> {
    return this.boardService.createBoard(createBoardDto.title, createBoardDto.content);
  }

  @Get()
  getAll(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  @Get(':id')
  getOne(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateBoardDto: { title: string; content: string }): Promise<Board> {
    return this.boardService.updateBoard(id, updateBoardDto.title, updateBoardDto.content);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.boardService.deleteBoard(id);
  }
}