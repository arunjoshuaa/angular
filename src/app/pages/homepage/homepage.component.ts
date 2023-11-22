import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {


  constructor(private api:ApiService){}
  todo:any;
  title: string = "";
  
 
  ngOnInit()
  {
    this.api.getTodo().subscribe((data:any)=>{
        this.todo=data

    })
  }
  del(data:any)
    {
     // this.=data
    //  console.log(data)
    this.api.deleteTodo(this.todo.id).subscribe((response)=>{
   //   console.log(this.todo)
     this.todo = this.todo.filter((item: { id: any; }) => item.id !== data.id);
      
    })
  
  }

   add() {
    if(this.title.trim()!=='')
    {
      const data={title:this.title,finished:false}
      this.todo.push(data)
      this.title=''
    }
    
    
 }
}