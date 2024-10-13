import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async createBoard(title: string, content: string): Promise<Board> {
    const newBoard = this.boardRepository.create({ title, content });
    await this.boardRepository.save(newBoard);
    return newBoard;
  }

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async getBoardById(id: number): Promise<Board> {
    return this.boardRepository.findOne(id);
  }

  async updateBoard(id: number, title: string, content: string): Promise<Board> {
    const board = await this.getBoardById(id);
    board.title = title;
    board.content = content;
    await this.boardRepository.save(board);
    return board;
  }

  async deleteBoard(id: number): Promise<void> {
    await this.boardRepository.delete(id);
  }
}