import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
})
export class NavPage implements OnInit {
  componentes: Componente[] = [
    {
      nombre: "Grid o Cuadricula",
      icono: "apps",
      url:"/grid"
    },
    {
      nombre:'Infinite scroll',
      icono:'infinite',
      url:'/infinite'
    },
    {
      nombre:'Inputs',
      icono:'chatboxes',
      url:'/input'
      },
    {
    nombre:"Modal",
      icono:"albums",
      url:"/modal"
  },
  {
    nombre:'Popover',
    icono:'text',
    url:'/popover'
    },

{
  nombre:'Loading o cargando',
  icono:'sync',
  url:'/loadin'
}

];
selectedPath='';
  constructor(private router: Router, private menuCrtl: MenuController) {
    this.router.events.subscribe((event: RouterEvent) =>{
    this.selectedPath = event.url;
    });
   }


  ngOnInit() {
  }
  toggleMenu(){
    this.menuCrtl.toggle();
  }

}

interface Componente{
  nombre:string;
  icono:string;
  url:string;
}
