import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JogoDaVelhaComponent } from './components/jogo-da-velha/jogo-da-velha';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JogoDaVelhaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}