import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Address } from 'src/app/shared/models/address';
import { movieDb } from 'src/app/moviedb-config';
import { ReservaService } from 'src/app/core/services/reserva.service';
import { Booking } from 'src/app/shared/models/booking';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-tickets',
  templateUrl: './booking-tickets.component.html',
  styleUrls: ['./booking-tickets.component.scss']
})
export class BookingTicketsComponent implements OnInit {

  id: string;
  movie: Movie;
  booking: Booking;
  urlImage: string;
  formBookingTickets: FormGroup;
  formCompanion: FormGroup;
  formAddressValid: boolean;
  frete: number;
  companion: boolean;
  loading: boolean;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private formBuilder: FormBuilder,
    private reservaService: ReservaService,
    private toastr: ToastrService,
  ) {
    this.id = this.route.snapshot.params.id;
    this.movie = new Movie();
    this.booking = new Booking();
    this.formAddressValid = false;
    this.urlImage = movieDb.url_image;
    this.companion = false;
  }

  ngOnInit(): void {
    this.loading = true;
    this.movieService.getMovie(this.id).subscribe(movieReturn => {
      this.movie = movieReturn;
      this.movie.value = 20;
      this.frete = 10;
      this.loading = false;
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
    this.loading = true;

    if (this.companion) {
      this.formBookingTickets.patchValue({
        acompanhante: this.formCompanion.value
      });
    }

    this.booking.nome = this.formBookingTickets.value.nome;
    this.booking.ultimoNome = this.formBookingTickets.value.ultimoNome;
    this.booking.cpf = this.formBookingTickets.value.cpf;
    this.booking.dataNascimento = this.formBookingTickets.value.dataNascimento;
    this.booking.email = this.formBookingTickets.value.email;
    this.booking.nomeAcompanhante = this.formBookingTickets.value.acompanhante.nomeAcompanhante;
    this.booking.ultimoNomeAcompanhante = this.formBookingTickets.value.acompanhante.ultimoNomeAcompanhante;
    this.booking.cpfAcompanhante = this.formBookingTickets.value.acompanhante.cpfAcompanhante;
    this.booking.dataNascimentoAcompanhante = this.formBookingTickets.value.acompanhante.dataNascimentoAcompanhante;
    this.booking.emailAcompanhante = this.formBookingTickets.value.acompanhante.emailAcompanhante;
    this.booking.cep = this.formBookingTickets.value.address.cep;
    this.booking.logradouro = this.formBookingTickets.value.address.logradouro;
    this.booking.pais = this.formBookingTickets.value.address.pais;
    this.booking.uf = this.formBookingTickets.value.address.uf;
    this.booking.localidade = this.formBookingTickets.value.address.localidade;
    this.booking.telefone = this.formBookingTickets.value.address.telefone;

    this.reservaService.send(this.booking).subscribe(bookingReturn => {
      this.toastr.success(`Reserva feita com sucesso.`);
      this.loading = false;
    }, error => {
      this.toastr.error(`${error.message}`);
      this.loading = false;
    });

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
