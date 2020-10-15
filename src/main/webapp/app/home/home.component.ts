import { Component, OnInit } from '@angular/core';

import { IPost } from 'app/shared/model/post.model';
import { PostService } from 'app/entities/post/post.service';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'jhi-home',
    templateUrl: './home.component.html',
    styleUrls: ['home.scss']
})
export class HomeComponent implements OnInit {

    posts: IPost[] = [];

    constructor(
        protected postService: PostService
    ) {
    }

    ngOnInit(): void {
        this.postService.query().subscribe((res: HttpResponse<IPost[]>) => (this.posts = res.body || []))
    }
}
