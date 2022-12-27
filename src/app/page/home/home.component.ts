import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  @Input() nomp!:String;
  @Input() phonp!:String;
  @Input() emailp!:String;
  @Input() pedidop!:String;

  muestra(nombres: String, phone:String, correo:String, asunto:String) {
    this.nomp=nombres;
    

    this.phonp=phone;

    this.emailp=correo;
    

    this.pedidop=asunto;
}
  

  
  ngOnInit(): void {
  }

}
