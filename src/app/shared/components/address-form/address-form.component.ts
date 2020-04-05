import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { CepService } from 'src/app/core/services/cep.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Output() address = new EventEmitter();

  @Output() formAddressValidated = new EventEmitter();

  formAddress: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cepService: CepService
  ) { }

  ngOnInit(): void {
    this.formAddress = this.formBuilder.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      pais: ['', Validators.required],
      uf: ['', Validators.required],
      localidade: ['', Validators.required],
      telefone: ['', Validators.required],
    });
  }

  getCep(cep: string) {
    if (cep.length === 8) {
      this.cepService.getAddress(cep).subscribe(addressReturn => {
        this.formAddress.patchValue({
          logradouro: addressReturn.logradouro,
          pais: 'Brasil',
          uf: addressReturn.uf,
          localidade: addressReturn.localidade,
        });
        this.changedAddress();
      });
    }
  }

  changedAddress() {
    this.formAddress.invalid ? this.formAddressValidated.emit(false) : this.formAddressValidated.emit(true);
    this.address.emit(this.formAddress.value);
  }

}
