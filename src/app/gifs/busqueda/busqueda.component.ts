import { GifsService } from './../services/gifs.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){

  }

  public buscar() {
    const valor = this.txtBuscar.nativeElement.value;

    this.gifsService.buscarGifts(valor);

    this.txtBuscar.nativeElement.value = ' ';
  }
}
