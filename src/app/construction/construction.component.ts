import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {

  public construction : any;
  public id : any;

  constructor(private activatedRoute: ActivatedRoute, private _http: HttpClient){
    
    // this.activatedRoute.queryParams.subscribe(params => {
      this.id = this.activatedRoute.snapshot.params['constructionId']
      console.log(this.id); // Print the parameter to the console. 
  // });
    
    this.getPhoto();
  }

  // constructor(private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.queryParams.subscribe(params => {
  //         let date = params['startdate'];
  //         console.log(date); // Print the parameter to the console. 
  //     });
  // }

ngOnInit() {
}

getPhoto(){
  this.getResource("http://localhost:8080/constructions/" + this.id)
  .subscribe(
    data => this.construction = data
  );
}

 getResource(resourceUrl : string) : Observable<any> {
  return this._http.get(resourceUrl);
 }
}
