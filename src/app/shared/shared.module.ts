import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { MovieService } from '../core/services/movie.service';
import { InputComponent } from './components/input/input.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { NgxPhoneMaskBrModule } from 'ngx-phone-mask-br';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [InputComponent, AddressFormComponent],
  entryComponents: [],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgxPhoneMaskBrModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    // Módulos
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgxPhoneMaskBrModule,
    NgxMaskModule,

    // Componentes
    InputComponent,
    AddressFormComponent
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
