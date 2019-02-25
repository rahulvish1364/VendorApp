import {IUser} from './user'

export class Vendor {
    username: string;
    email: string;
    password: string;
    contact: import('./contact').Contact;
    food: [];
    event: [];
    decoration:[];
    venue: [];
    rating: Number;
// constructor(username,email, contact, food, event, decoration, venue) {
//     this.username=username; this.email=email; this.contact=contact; this.food=food; this.event=event
//     this.decoration=decoration; this.venue=venue; 
// }
constructor(email, password) {
    this.email= email;
    this.password= password
}
}
