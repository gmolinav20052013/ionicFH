import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/model/Componente';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  components: Componente[] = [
    {
     icon: 'american-football-outline',
     name: 'Action Sheet',
     redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
