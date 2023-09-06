import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class postDataService {
  constructor(
    private http: HttpClient,
    private firedb: AngularFireDatabase,
    private firestore:AngularFirestore
  ) {}

  onPost(userData: string) {
    let data=JSON.parse(userData);
    return this.http.post(
      'https://formauth-16bd4-default-rtdb.firebaseio.com/users.json',
      data 
    );
  }

  onGet() {
    return this.http
      .get('https://formauth-16bd4-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((Resp: any) => {
          const dataArray = [];
          for (const Key in Resp) {
            if (Resp.hasOwnProperty(Key)) {
              dataArray.push({ ...Resp[Key], id: Key });
            }
          }
          return dataArray;
        })
      );
  }
  onDelete(id: string) {
    if (confirm('sure confirm to delete..?')) {
      const tutorialsRef = this.firedb.list('users');
      tutorialsRef.remove(id);
      alert('removed success');
    }
  }

  onEditItem(item: any) {
    console.log(item)
  
    let data = {
      Name: item.Name,
      Number: item.Number,
      Address: item.Address
    };
  
    this.firedb.list('users').update(item.id,data)
      .then(() => {
        alert('Updated successfully');
      })
      .catch((error) => {
        console.error('Error updating document:', error);
        alert('Error while updating document');
      });
  }
  
}
