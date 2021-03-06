import { Component } from '@angular/core';
import{Post} from './models/post.models'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postList: Array<Post>=new Array<Post>();
  invia(userName:HTMLInputElement, userPost:HTMLInputElement)
  {
    let newPost=new Post(userName.value, userPost.value);
    this.postList.push(newPost);
  }
}

