import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { movieDTO } from '../Entities/movieDTO';
import { finalize } from 'rxjs/operators'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  CurrentDetailsOBJ! : movieDTO;

  MovieJSONS! : movieDTO[];

  constructor(public httpClient : HttpClient) {
    let response = this.httpClient.get<any>("https://jsonplaceholder.typicode.com/posts");
    response.pipe( finalize(() => {
           this.MovieJSONS.forEach(
             element => {
               let RNDMNMDR = getRandomInt(5);
               if (RNDMNMDR === 0)
               {
                 element.image = "./../../assets/home-page-assets/images/upcoming/01.jpg"
               }
               else
               if (RNDMNMDR === 1)
               {
                element.image = "./../../assets/home-page-assets/images/upcoming/02.jpg"
               }
               else
               if (RNDMNMDR === 2)
               {
                element.image = "./../../assets/home-page-assets/images/upcoming/03.jpg"
               }
               else
               if (RNDMNMDR === 3)
               {
                element.image = "./../../assets/home-page-assets/images/upcoming/04.jpg"
               }
               else
               if (RNDMNMDR === 4)
               {
                element.image = "./../../assets/home-page-assets/images/upcoming/05.jpg"
               }

             }
           )
    })
    ).subscribe(response =>{
      this.MovieJSONS = response;
    })
   }

  ShowInfoCard: boolean = false;

  ngOnInit(): void {
  }

  ToggleCard()
  {
    this.ShowInfoCard = !this.ShowInfoCard;
  }

  GetDetails(input : any)
  {
     this.ShowInfoCard = true;
     this.CurrentDetailsOBJ = this.MovieJSONS.filter(a => a.id === input)[0];
  }
}

function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}