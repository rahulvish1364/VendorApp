import {Event} from './event';
export class Birthday implements Event {
    Id: number;    
    Name: string;
    associatedManager: import("./vendor").Vendor;
    customer: import("./customer").Customer;
    
}
