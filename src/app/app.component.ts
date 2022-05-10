import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
frase: string=""

 constructor(private frasine: HttpClient) {
  this.frasine.get("https://catfact.ninja/fact").subscribe(
    res=>{
      this.frase = res["fact"]

    },
    err => {
      console.log(err);
    }
  )
 }

}
