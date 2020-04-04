import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address } from 'src/app/shared/models/address';
import { movieDb } from 'src/app/moviedb-config';

@Component({
  selector: 'app-booking-tickets',
  templateUrl: './booking-tickets.component.html',
  styleUrls: ['./booking-tickets.component.scss']
})
export class BookingTicketsComponent implements OnInit {

  id: string;
  movie: Movie;
  urlImage: string;
  formBookingTickets: FormGroup;
  formCompanion: FormGroup;
  formAddressValid: boolean;
  frete: number;
  companion: boolean;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private formBuilder: FormBuilder
  ) {
    this.id = this.route.snapshot.params.id;
    this.movie = new Movie();
    this.formAddressValid = false;
    this.urlImage = movieDb.url_image;
    this.companion = false;
  }

  ngOnInit(): void {
    this.movieService.getMovie(this.id).subscribe(movieReturn => {
      this.movie = movieReturn;
      this.movie.value = 20;
      this.frete = 10;
    });

    this.createForms();
  }

  createForms() {
    this.formBookingTickets = this.formBuilder.group({
      nome: ['', Validators.required],
      ultimoNome: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      email: ['', Validators.required],
      acompanhante: [''],
      address: ['', Validators.required],
    });

    this.formCompanion = this.formBuilder.group({
      nomeAcompanhante: ['', Validators.required],
      ultimoNomeAcompanhante: ['', Validators.required],
      cpfAcompanhante: ['', Validators.required],
      dataNascimentoAcompanhante: ['', Validators.required],
      emailAcompanhante: ['', Validators.required],
    });
  }

  changedAddress(address: Address) {
    this.formBookingTickets.patchValue({
      address
    });
  }

  formAddressValidated(valid: boolean) {
    this.formAddressValid = valid;
  }

  send() {
    if (this.companion) {
      this.formBookingTickets.patchValue({
        acompanhante: this.formCompanion.value
      });
    }
    console.log(this.formBookingTickets.value);
  }

  calcSubTotal(): number {
    let value = 0;

    value = this.companion ? this.movie.value * 2 : this.movie.value;

    return value;
  }

  calcTotal(): number {
    let value = 0;

    value = this.calcSubTotal() + this.frete;

    return value;
  }

}
