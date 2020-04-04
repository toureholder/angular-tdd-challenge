import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardMovieComponent } from './card-movie/card-movie.component';

const routes: Routes = [
  { path: '', component: ListMoviesComponent },
];


@NgModule({
  declarations: [ListMoviesComponent, CardMovieComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MoviesModule { }
