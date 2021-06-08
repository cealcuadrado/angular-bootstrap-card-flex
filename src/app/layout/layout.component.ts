import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  cards: any[] = [
    {
      title: 'Distribución Manual',
      body: 'Mantenedor de distribución manual',
    },
    {
      title: 'Mantenedor Complejidad de Escritos',
      body: 'Mantenedor de complejidad de tipo de escritos',
    },
    {
      title: 'Gestor de Plazos',
      body: 'Despliegue de plazos de los distintos trámites',
    },
    {
      title: 'Unidad',
      body: 'Mantenedor Unidad',
    },
    {
      title: 'Resoluciones-Actuaciones',
      body: 'Mantenedor Relación Resolución-Actuación',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
