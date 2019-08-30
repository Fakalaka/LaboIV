import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../clases/usuario';

@Component({
  selector: 'app-listado-de-usuarios',
  templateUrl: './listado-de-usuarios.component.html',
  styleUrls: ['./listado-de-usuarios.component.css']
})
export class ListadoDeUsuariosComponent implements OnInit {

  public usuarios: [Usuario];

  constructor() {

  }

  ngOnInit() {
  }

}
