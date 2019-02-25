export interface IUser {
    id: number;
    name: string;
    address: any; // this should be change to the type address in future
    email: string;
    password: string;
    contact: import('./contact').Contact;
}

