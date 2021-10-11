import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { userDTO } from '../Entities/userDTO';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  
  constructor(public httpClient : HttpClient) {

    let response = this.httpClient.get<any>("https://jsonplaceholder.typicode.com/users");
    response.pipe( finalize(() => {
           this.UserJSONS.forEach(
             element => {
               let RNDMNMDR = getRandomInt(5);
               if (RNDMNMDR === 0)
               {
                 element.imageurl = "./../../assets/images/faces/face2.jpg"
               }
               else
               if (RNDMNMDR === 1)
               {
                element.imageurl = "./../../assets/images/faces/face3.jpg"
               }
               else
               if (RNDMNMDR === 2)
               {
                element.imageurl = "./../../assets/images/faces/face4.jpg"
               }
               else
               if (RNDMNMDR === 3)
               {
                element.imageurl = "./../../assets/images/faces/face5.jpg"
               }
               else
               if (RNDMNMDR === 4)
               {
                element.imageurl = "./../../assets/images/faces/face6.jpg"
               }

             }
           )
    })
    ).subscribe(response =>{
      this.UserJSONS = response;
    })

   }

  ShowInfoCard: boolean = false;

  CurrentDetailsOBJ! : userDTO;

  UserJSONS! : userDTO[];

  
  ToggleCard()
  {
    this.ShowInfoCard = !this.ShowInfoCard;
  }

  GetDetails(input : any)
  {
     this.ShowInfoCard = true;
     this.CurrentDetailsOBJ = this.UserJSONS.filter(a => a.id === input)[0];
  }

  ngOnInit(): void {
  }
  

}
function getRandomInt(max : number) {
  return Math.floor(Math.random() * max);
}
