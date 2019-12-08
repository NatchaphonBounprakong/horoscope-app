import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-healthy",
  templateUrl: "./healthy.component.html",
  styleUrls: ["./healthy.component.scss"]
})
export class HealthyComponent implements OnInit {
  @Input() content: string;
  constructor() {}

  ngOnInit() {}
}
