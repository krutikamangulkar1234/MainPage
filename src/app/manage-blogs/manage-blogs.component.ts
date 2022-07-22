
import { Component, OnInit,Input, Output } from '@angular/core';
import { CreateBlogsService } from '../createblogs.service';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {
  @Input() title='';
  @Input() description='';


 @Input()
  "blog": { title: string, description: string};
 @Input() "id":number;
  constructor(private createblogsservice:CreateBlogsService) { }

  ngOnInit(): void {
  }
  removeblog() {
    this.createblogsservice.removeblog(this.id);
  }


}



