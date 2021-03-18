import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {
 titles:any[]=[]
 data:any[]=[]

  constructor(private pruebaService:PruebaService) { }

  ngOnInit(): void {
 this.getData();
  }

  getData(){
  const datax:any=this.pruebaService.jsonData();
   this.titles=Object.keys(datax.shift())
   this.data= datax;
   this.printMails();
  }

  printMails(){
    this.data.forEach((item)=>{
      console.log(item.email);
    })
  }

}
