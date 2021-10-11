import { userDTO } from "../Entities/userDTO";
import { UsersComponent } from "../users/users.component";

export class userSingleton{
    private static _Instance : userSingleton;

    private static _List : userDTO[];
    
    private constructor()
    {

    }

    public static get GetSingleton()
    {
           if (this._Instance === undefined || this._Instance === null)
           {
                this._Instance = new userSingleton();
           }       
           return this._Instance;    
    }

    public Add(DTO : userDTO)
    {
      userSingleton._List.push(DTO);
    }

    public Clear()
    {
        userSingleton._List = [] as userDTO[];
    }
}