import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { MoviesListComponent } from "./movies-list/movies-list.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";

const routes: Routes = [{ path: "", component: MoviesListComponent }];

@NgModule({
  declarations: [MoviesListComponent, MovieCardComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class MoviesModule {}
