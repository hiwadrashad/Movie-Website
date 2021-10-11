import { movieDTO } from "../Entities/movieDTO";

export class movieSingleton{
    
    private static _Instance : movieSingleton;

    private static _List : movieDTO[];
    
    private constructor()
    {

    }

    public static get GetSingleton()
    {
           if (this._Instance === undefined || this._Instance === null)
           {
                this._Instance = new movieSingleton();
           }       
           return this._Instance;    
    }

    public Add(DTO : movieDTO)
    {
      movieSingleton._List.push(DTO);
    }

    public Clear()
    {
        movieSingleton._List = [] as movieDTO[];
    }
   
}