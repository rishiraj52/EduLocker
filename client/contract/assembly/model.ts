import {PersistentVector} from 'near-sdk-as';

export interface DayFees{
      day:i32,
      fees:string
}

export interface Certificates{
      studnetClass:string,
      id:string,
      cid:string
}