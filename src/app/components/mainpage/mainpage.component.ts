import { Component, OnInit } from '@angular/core';
import { postDataService } from 'src/app/post.service';
import { AuthenticationService } from 'src/app/services/authentication-service.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  getPosts: { userData: 'string'; id: 'string' }[] = [];
  Addtext:string='';
  showPopup:boolean=false;
  constructor(
    private postDataService: postDataService,
    private authserv: AuthenticationService
  ) {}
  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.postDataService.onGet().subscribe((resp) => {
        this.getPosts = resp;
      });
    }
  }
  logout() {
    this.authserv.logout();
  }
  adddata(){
    this.postDataService.onPost(this.Addtext).subscribe({
      next:res=>{alert('data added')}
      ,error:e=>{alert('Sumthing wrong')}
    })
  }
  deletePost(id:string){
      
  }
}
