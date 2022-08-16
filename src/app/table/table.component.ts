import { Component, OnInit } from '@angular/core';
import demo from '../../assets/users.json'


interface Users{
  Name:string,
  Age:number,
  Gender:string
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    users:{
      name:string,
      age:number,
      gender:string
    }[] = demo;
    

  constructor() { }

  ngOnInit(): void {

    console.log(this.users);
    
  }
  
}
