import { Component, NgZone, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {
  progress: number = 0;
  label: string;

  posts: any;
  url_posts: string = "https://jsonplaceholder.typicode.com/posts";


  constructor(
    private _ngZone: NgZone,
    private http: HttpClient
  ) {}

  ngOnInit() {
    console.log("antes");
    // this.getPosts();
    this.getPostsZone();
    console.log("después");
  }

  getPosts() {
    this.http.get(this.url_posts).subscribe((data => {
      console.log(data);
      this.posts = data;
      // console.log("después dentro del método");
    }))
  }
  getPostsZone() {
    this._ngZone.runOutsideAngular(() => {
      this.getPosts();
      this._ngZone.run(() => {
        console.log("Dentro del tema de zone, posts: ", this.posts);
      })
    })
  }
  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this._increaseProgress(() => console.log('Inside Done!'));
  }

  // Loop outside of the Angular zone
  // so the UI DOES NOT refresh after each setTimeout cycle
  processOutsideOfAngularZone() {
    this.label = 'outside';
    this.progress = 0;
    this._ngZone.runOutsideAngular(() => {
      this._increaseProgress(() => {
        // reenter the Angular zone and display done
        this._ngZone.run(() => { console.log('Outside Done!'); });
      });
    });
  }

  _increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      window.setTimeout(() => this._increaseProgress(doneCallback), 10);
    } else {
      doneCallback();
    }
  }

}
