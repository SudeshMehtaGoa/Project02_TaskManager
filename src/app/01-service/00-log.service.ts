/* logservice */
import { Injectable } from '@angular/core';

@Injectable()
export class logService {

  constructor() { }

  log(){
    console.log("New Task inserted.");
  };

  info(){
    console.log("Data retrived");
  };


}
