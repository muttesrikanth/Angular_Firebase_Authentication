import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";

@Injectable({providedIn:"root"})
export class postDataService {
 constructor(private http:HttpClient,private firedb:AngularFirestoreModule){}

onPost(userData:string){
 return   this.http.post('https://formauth-16bd4-default-rtdb.firebaseio.com/users.json',{userData})
}

onGet(){

return    this.http.get('https://formauth-16bd4-default-rtdb.firebaseio.com/users.json')
    .pipe(
        map((Resp:any)=>{
            const dataArray=[];
            for(const Key in Resp){
                if(Resp.hasOwnProperty(Key)){
                dataArray.push({...Resp[Key],id:Key});
                }
            }
            return dataArray;
        })

    )
    
    
}
onDelete(id:string){
     
}

}