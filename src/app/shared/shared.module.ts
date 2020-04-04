import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { MovieService } from '../core/services/movie.service';

@NgModule({
  declarations: [],
  entryComponents: [],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule
  ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MovieService
      ]
    };
  }
}
