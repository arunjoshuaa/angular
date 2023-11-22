import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  create(post: { title: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }




getTodo()
{
  return this.http.get("https://jsonplaceholder.typicode.com/todos/")
}
deleteTodo(id:any)
{ 
  
    return this.http.delete("https://jsonplaceholder.typicode.com/todos/"+id)

}
creates(post:any)
{
  return this.http.post("https://jsonplaceholder.typicode.com/todos/", JSON.stringify(post));
}

}
