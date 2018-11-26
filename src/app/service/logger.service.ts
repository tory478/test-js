import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
  }

  public get trace() {
    return console.log.bind(console);
  }

  public alert() {
    alert('sampe');
  }
}
