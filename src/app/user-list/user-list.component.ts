import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  
  names : String[]; // <-- Array

  constructor(){
    this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; //Fijamos los  nombres
  }

  ngOnInit(){

  }
}
