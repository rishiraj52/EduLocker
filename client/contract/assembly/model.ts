import {PersistentVector} from 'near-sdk-as';

export interface DayFees{
      day:i32,
      fees:string
}

export interface Certificates{
      class:string,
      certificateID:PersistentVector<string>
}