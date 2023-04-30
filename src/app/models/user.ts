import { Role } from "./role";

export class User {
    id!: number;
    fname!: string;
    lname!: string;
    email!: string;
    password!: string;
    phone!: string;
    adress!: string;
    token!: string;
    role: Role = Role.USER;
    enabled!:Boolean;
}
