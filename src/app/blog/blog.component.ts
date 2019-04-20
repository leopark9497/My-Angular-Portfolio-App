import { Component, OnInit, Input } from '@angular/core';
import { ConfigService} from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  
techs =[];

  constructor(private config: ConfigService) { }

  ngOnInit() {
  this.techs = this.getTech()
  }

  getTech(){
    return this.config.getConfig().techs;
  }
}
