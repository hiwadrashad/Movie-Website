import { Address } from "./Adress";
import { Company } from "./Company";


    export interface userDTO {
        id: number;
        name: string;
        username: string;
        email: string;
        address: Address;
        phone: string;
        website: string;
        company: Company;
        imageurl: string;
    }

