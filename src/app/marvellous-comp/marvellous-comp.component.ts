import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-comp',
  templateUrl: './marvellous-comp.component.html',
  styleUrls: ['./marvellous-comp.component.css']
})
export class MarvellousCompComponent implements OnInit {

  public title = 'Inside The Marvellous Component calling from Root Component';
  constructor() { }

  ngOnInit() {
  }

}
