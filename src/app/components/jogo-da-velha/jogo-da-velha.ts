import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jogo-da-velha',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jogo-da-velha.html',
  styleUrl: './jogo-da-velha.css'
})
export class JogoDaVelhaComponent {
  board: string[] = Array(9).fill('');
  currentPlayer: 'X' | 'O' = 'X';
  winner: string | null = null;
  isDraw: boolean = false;
  scoreMario: number = 0;
  scoreBowser: number = 0;

  makeMove(index: number): void {
    if (!this.board[index] && !this.winner) {
      this.board[index] = this.currentPlayer;
      if (this.checkWinner()) {
        this.winner = this.currentPlayer;
        if (this.winner === 'X') this.scoreMario++;
        else this.scoreBowser++;
      } else if (this.board.every(cell => cell !== '')) {
        this.isDraw = true;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  checkWinner(): boolean {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    return winPatterns.some(([a, b, c]) => 
      this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]
    );
  }

  resetGame(): void {
    this.board = Array(9).fill('');
    this.currentPlayer = 'X';
    this.winner = null;
    this.isDraw = false;
  }
}