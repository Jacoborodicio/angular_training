import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Post } from "./post.model";
import { Observable, Observer } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: 'app-async-pipes-demo',
  templateUrl: './async-pipes-demo.component.html',
  styleUrls: ['./async-pipes-demo.component.css']
})
export class AsyncPipesDemoComponent implements OnInit {

  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 4000);
  });

  // posts$: Observable<any>;
  // post$: Observable<Array<any>> = this.getPosts();
  post$: Observable<Post> = this.getPosts();
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {

    
  }

  getPosts(): Observable<any> {
    let observable = this._http.get('https://jsonplaceholder.typicode.com/posts/1');
    return observable;
  }

  moreInfo(event) {
    console.log(event);
  }

}
