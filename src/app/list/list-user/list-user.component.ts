import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styles: [
  ]
})
export class ListUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const token=localStorage.getItem('token');
    console.log('HOLA SOY EL TOKEN->',token);
  }

}
