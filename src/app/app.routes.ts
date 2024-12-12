import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameBoardComponent } from './game-board/game-board.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game-board', component: GameBoardComponent },
];
