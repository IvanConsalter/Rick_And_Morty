import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('character') character;

  constructor() { }

  ngOnInit(): void {
  }

  checkStatus(status: string): string {
    if(status === 'Alive') return 'circle-status-alive';
    if(status === 'Dead') return 'circle-status-dead';

    return 'circle-status-unknown';
  }

}
