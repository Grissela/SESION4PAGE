
 import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lateral',
  templateUrl: './lateral.component.html',
  styleUrls: ['./lateral.component.css']
})
export class LateralComponent implements OnInit {

  constructor() { }
  
  @Input() nom!:String; 
  // nom!:String;
  @Input() phon!:String;
  @Input() email!:String;
  @Input() pedido!:String;
  
  @Output() cambioNombre = new EventEmitter<String>()
  @Output() cambioPhon = new EventEmitter<String>()
  @Output() cambioCorreo = new EventEmitter<String>()
  @Output() cambioAsunto = new EventEmitter<String>()

  
  muestra(nombres: String, phone:String, correo:String, asunto:String) {
      this.nom=nombres;
      this.cambioNombre.emit(this.nom);

      this.phon=phone;
      this.cambioPhon.emit(this.phon);

      this.email=correo;
      this.cambioCorreo.emit(this.email);

      this.pedido=asunto;
      this.cambioAsunto.emit(this.pedido);
  }
  ngOnInit(): void {
  }
  

}
