import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inside-subscribe',
  templateUrl: './inside-subscribe.component.html',
  styleUrls: ['./inside-subscribe.component.css']
})
export class InsideSubscribeComponent implements OnInit {

  url_posts: string = "https://jsonplaceholder.typicode.com/posts";
  url_single_post: string = "https://jsonplaceholder.typicode.com/posts/";

  posts: any;
  post: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    // this.metodoCombinado();
    // this.combinadoDemo();
    this.aux();
    console.log("Post desde ngOnInit(): ", this.posts);
  }

  getPosts(): Observable<any> {
    return this.http.get(this.url_posts);
  }
  getPost(n: number): Observable<any> {
    let url = this.url_single_post + n;
    return this.http.get(url);
  }

  metodoCombinado() {
    this.getPosts().subscribe((data) => {
      console.log("DATA: ", data);
      this.posts = data;
      console.log("POSTS: ", this.posts[0]["userId"])
      this.getPost(this.posts[0]["userId"]).subscribe((item) => {
        this.post = item;
      });
    })
  }

  async combinadoDemo() {
    return await this.getPosts().toPromise();
  }

  aux() {
    this.combinadoDemo().then(data => {
      this.posts = data;
      console.log("Dentro de aux, posts: ", this.posts);

    });
  }
}
