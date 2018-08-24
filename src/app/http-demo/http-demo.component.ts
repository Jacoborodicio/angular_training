import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from "@angular/common/http";

class Location {
  identificador?: number;
  direccion?: string;
}


@Component({
  selector: 'app-http-demo',
  templateUrl: './http-demo.component.html',
  styleUrls: ['./http-demo.component.css']
})
export class HttpDemoComponent implements OnInit {
  locations: Array<Location>;
  user: any;
  url: string = 'https://api.filmelo.com/locations';
  constructor(
    private _http: HttpClient,
    private zone: NgZone
  ) { }

  ngOnInit() {

    // this.zone.runOutsideAngular(() => {
    //   this._http.get(this.url)
    //   .subscribe((resp) => {
    //     this.locations = resp["data"];
    //     console.log("Locations: ", this.locations);
    //     console.log("Después de la inicialización!");
    //     this.zone.run(() => {
    //       this.locations[this.locations.length - 1]['direccion'] = 'Dirección inventada!';
    //     })
    //   })
    //   console.log("Fuera del subscribe!");
    // });
    // console.log("Antes de la promesa, valor de locations: ", this.locations);
    this.getLocations();
    // console.log("Justo después de la promesa, valor de locations: ", this.locations);

  }

  async getLocations() {
    this.locations =  await this._http.get<Array<Location>>(this.url).toPromise();
    if(this.locations)
    this.locations = this.locations["data"];
    this.getUserFromLocationId(this.locations[1]["identificador"]);

  }

  async getUserFromLocationId(id: number) {
    this.user = await this._http.get(`https://jsonplaceholder.typicode.com/posts/${id}`).toPromise();
  }
} 
   