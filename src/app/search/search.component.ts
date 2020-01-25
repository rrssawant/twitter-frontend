import { Component, OnInit } from '@angular/core';
import { SearchService } from './../search.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchValue: any;
  spinnerShow = false;
  emptyDataCheck = false;
  dataCheck = false;
  dataArray = [];
  storeArray = [];
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

   /* 
  Search Function
  */

  searchFunction(form : NgForm){
    this.searchService.searchFunction(this.searchValue).subscribe(
      (res : any)=> {
       if(res.data.length ===0){
        this.dataCheck = true;
        this.emptyDataCheck = false;
        return ;
       }
          this.dataCheck = false;
          this.emptyDataCheck = false;
          this.storeArray = res.data;
          this.dataArray =this.storeArray.splice(0,7)

      },(error:any)=>{
        console.log(error);
      }
    );
  }

  /* 
  Scrolled Function
  */

  onScroll() {
    if(this.storeArray.length === 0 && this.dataArray.length >0){
      this.emptyDataCheck = true;
    }else if(this.storeArray.length === 0 && this.dataArray.length ===0){
      this.emptyDataCheck = false;
    }else{
    this.spinnerShow = true;
    setTimeout(()=>{
      this.dataArray.push(...this.storeArray.splice(0,1))
      this.spinnerShow = false;
    },2000);
    }
  }


}
