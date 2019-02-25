import { Vendor } from './vendor'
import { Customer } from './customer'

export interface Event {
Id: number;
Name: string;
associatedManager:  Vendor;
customer : Customer;  
}
