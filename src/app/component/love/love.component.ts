import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-love',
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.scss'],
})
export class LoveComponent implements OnInit {
  @Input() content: string;
  constructor() { }

  ngOnInit() {}

}
