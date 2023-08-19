import { 
  Component, 
  OnInit,
  Input // <-- Agregamos Input 
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})

export class UserItemComponent implements OnInit{
  
  @Input() name : String; // <-- Agregamos el nombre del propietario 

  constructor(){
    this.name = '' //Eliminamos el nombre que estaba fijado
  }

  ngOnInit(){

  }

}
