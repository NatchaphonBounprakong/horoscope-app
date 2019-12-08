import { Component, OnInit } from "@angular/core";
import { map, catchError, tap, find } from "rxjs/operators";
import { Subject, throwError, Observable, forkJoin } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpEventType
} from "@angular/common/http";
@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit {
  isShow = false;
  number: string;
  healtContent: String;
  loveContent: String;
  workContent: String;

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSubmitPhone() {
    this.isShow = true;

    //.createPhone(this.number);
    this.getPhone(this.number).subscribe(o => {
      console.log(o);
      if (o !== undefined) {
        (this.healtContent = o.HEALTHY),
          (this.loveContent = o.LOVE),
          (this.workContent = o.WORK);
      } else {
        this.createPhone(this.number);
      }
    });

    
  }

  getPhone(number: string) {
    return this.http
      .get<any[]>("https://ionic-horoscope-app.firebaseio.com/USER_PHONE.json")
      .pipe(
        map(o => {
          let array = [];
          for (let item of Object.keys(o)) {
            array.push(o[item]);
          }
          return array.find(m => m.NUMBER === number);
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }

  createPhone(number: string) {
    const NUMBER = number;
    let HEALTHY: string;
    let LOVE: string;
    let WORK: string;
    let healthyRequest = this.http.get<any[]>(
      "https://ionic-horoscope-app.firebaseio.com/HEALTHY.json"
    );

    let loveRequest = this.http.get<any[]>(
      "https://ionic-horoscope-app.firebaseio.com/LOVE.json"
    );

    let workRequest = this.http.get<any[]>(
      "https://ionic-horoscope-app.firebaseio.com/WORK.json"
    );

    forkJoin([healthyRequest, loveRequest, workRequest]).subscribe(
      ([healthyResp, loveResponse, workResponse]) => {
        HEALTHY = healthyResp[Math.floor(Math.random() * healthyResp.length)];
        LOVE = loveResponse[Math.floor(Math.random() * loveResponse.length)];
        WORK = workResponse[Math.floor(Math.random() * workResponse.length)];
        this.http
          .post("https://ionic-horoscope-app.firebaseio.com/USER_PHONE.json", {
            NUMBER,
            HEALTHY,
            LOVE,
            WORK
          })
          .subscribe(responseData => {
            this.getPhone(number).subscribe(o => {
              if (o !== null) {
                (this.healtContent = o.HEALTHY),
                  (this.loveContent = o.LOVE),
                  (this.workContent = o.WORK);
              } else {
                this.createPhone(this.number);
              }
            });
          });
      }
    );
  }
}
