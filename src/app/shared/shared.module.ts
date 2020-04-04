import { NgModule, ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MovieService } from "../core/services/movie.service";

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [RouterModule, CommonModule],
  exports: [
    // Módulos
    RouterModule,
    CommonModule,
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [MovieService],
    };
  }
}
