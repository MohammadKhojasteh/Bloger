import { Component, OnInit } from '@angular/core';
import {Blogpost} from '../blogpost';
import {Title} from '@angular/platform-browser';
import {BlogpostService} from '../blogpost.service';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  constructor(private  titleservice: Title , private blodservice: BlogpostService) { }
    title = 'blogs';
    blogs:Blogpost;
    error:{};

  ngOnInit() {
    this.titleservice.setTitle(this.title);
    this.blodservice.getBlogs().subscribe((data:Blogpost)=>{
      this.blogs = data ,
      error => this.error =error;
    });
  }

}
