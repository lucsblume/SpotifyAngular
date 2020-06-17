import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.component.html',
  styleUrls: ['./audioplayer.component.css']
})
export class AudioplayerComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
    window.scrollTo({
      top: 0,
      
      behavior: 'smooth'
    });
  }

  public openTop(){
    
    window.scrollTo({
      top: 0,
      
      behavior: 'smooth'
    });
  }


  public open(){
    
    window.scrollTo({
      top: 140,
      
      behavior: 'smooth'
    });
  }

  public open2(){
    
    window.scrollTo({
      top: 832,
      
      behavior: 'smooth'
    });
  }

  public open3(){
    
    window.scrollTo({
      top: 1515,
      
      behavior: 'smooth'
    });
  }

  public open4(){
    
    window.scrollTo({
      top: 2206,
      
      behavior: 'smooth'
    });
  }
  public open5(){
    
    window.scrollTo({
      top: 2865,
      
      behavior: 'smooth'
    });
  }
  public open6(){
    
    window.scrollTo({
      top: 3590,
      
      behavior: 'smooth'
    });
  }

}
