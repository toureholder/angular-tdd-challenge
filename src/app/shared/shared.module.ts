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
import { LoadingComponent } from './components/loading/loading.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [InputComponent, AddressFormComponent, LoadingComponent],
  entryComponents: [],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    NgxPhoneMaskBrModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
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
    ToastrModule,

    // Componentes
    InputComponent,
    AddressFormComponent,
    LoadingComponent
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
