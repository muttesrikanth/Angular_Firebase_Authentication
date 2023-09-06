import { Component, OnInit } from '@angular/core';
import { postDataService } from 'src/app/services/post.service';
import { AuthenticationService } from 'src/app/services/authentication-service.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  getPosts: any = [];
  Addtext: string = '';
  username: string = '';
  mobile: string = '';
  editing: boolean = false;
  editItem: any = {};
  user = '';

  constructor(
    private postDataService: postDataService,
    private authserv: AuthenticationService
  ) {}

  ngOnInit() {
    this.getData();
  }
  logout() {
    this.authserv.logout();
  }
  getData() {
    if (localStorage.getItem('user')) {
      this.user = localStorage.getItem('user');
      this.postDataService.onGet().subscribe((resp) => {
        this.getPosts = resp;
      });
    }
  }
  adddata() {
    let data = JSON.stringify({
      Name: this.username,
      Number: this.mobile,
      Address: this.Addtext,
    });
    this.editing = false;
    this.editItem = {};
    this.postDataService.onPost(data).subscribe({
      next: (res) => {
        alert('data added');
        this.clearAll();
        this.getData();
      },
      error: (e) => {
        alert('Sumthing wrong');
      },
    });
  }
  deletePost(id: string) {
    this.postDataService.onDelete(id);
    setTimeout(() => {
      this.getData();
    }, 800);
  }
  editClicked(item: any) {
    this.editItem = {
      id:item.id
    };
    
    this.editing = true;
    this.username = item.Name;
    this.mobile = item.Number;
    this.Addtext = item.Address;
  }
  editData() {
    this.editItem = {...this.editItem,
      Name: this.username,
      Number: this.mobile,
      Address: this.Addtext,
    };
    console.log(this.editItem)
    this.postDataService.onEditItem(this.editItem);
    this.editing = false;
    setTimeout(() => {
      this.clearAll();

      this.getData();
    }, 1500);
  }
  clearAll() {
    this.editing = false;
    this.editItem = {};
    this.Addtext = '';
    this.username=''
    this.mobile=''
  }
}
