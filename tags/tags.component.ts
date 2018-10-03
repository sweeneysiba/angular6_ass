import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  isempty=false;
  constructor() { }

  ngOnInit() {
  }

  count:number=0;
  on :number;
  inputTags : any = [];
  editFlag :boolean = true;

  openInputBox() {
    this. inputTags.push({"index":this.count,"name":"", "editFlag":true});
    this.count++;
  }
  addInputTags(temp) {
    if (temp !=""){
      this.isempty =true;
    }
    var item = this. inputTags.filter(ms => ms.index==temp)[0];
    if(typeof item != 'undefined'){
      this. inputTags[this. inputTags.indexOf(item)].editFlag= false;
    }
  }
  renameTags(temp){
    var item = this. inputTags.filter(ms => ms.index==temp)[0];
    if(typeof item != 'undefined'){
      this. inputTags[this. inputTags.indexOf(item)].editFlag= true;
    }
  }
  deleteTags(temp){
    var item = this. inputTags.filter(ms => ms.index==temp)[0];
    if(typeof item != 'undefined'){
      this. inputTags.splice(this. inputTags.indexOf(item),1);
    }
  }
}

