import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsectionRoutingModule } from './blogsection-routing.module';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogsectionRoutingModule
  ]
})
export class BlogsectionModule { }
