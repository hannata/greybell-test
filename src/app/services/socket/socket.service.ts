import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: any;

  constructor() {
    this.socket = io('https://enigmatic-hollows-14343.herokuapp.com');
  }

  listen(Eventname: string): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on(Eventname, (data) => {
        subscriber.next(data);
      });
    });
  }
}
