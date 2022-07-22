import { Component, OnInit,Input, Output } from '@angular/core';
import { CreateBlogsService } from '../createblogs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
