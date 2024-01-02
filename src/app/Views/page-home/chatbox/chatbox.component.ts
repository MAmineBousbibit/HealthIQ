import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  queryFormGroup!:FormGroup
  messages=[
    
    {role:"system",content : "hello"}
  ]
  result:any
  box = true;
  chat=false;

  inputValue: string = ''; 

  constructor(private formBuilder:FormBuilder,private httpClient:HttpClient){}
 ngOnInit(): void {
     this.queryFormGroup=this.formBuilder.group({
      query:this.formBuilder.control('')
     })
 } 
  toggleChatBox(): void {
    this.box=false;
    this.chat=true;
}
toggleChatBox1(){
  this.box=true;
  this.chat=false;
}


handleAskGPT(){
let url="https://api.openai.com/v1/chat/completions"
let httpHeaders=new HttpHeaders().set("Authorization","Bearer ")
this.messages.push({
  role:"user",content:this.queryFormGroup.value.query
})
let payload=
  {
    model:"gpt-3.5-turbo",
    messages:this.messages
  }

this.httpClient.post(url,payload,{headers:httpHeaders}).subscribe({
  next:(resp)=>{
   this.result=resp
   this.result.choices.forEach((choice:any)=>{
     this.messages.push({
      role:"assistant",content:choice.message.content
   })
   })
   
   console.log(this.result)
   this.queryFormGroup=this.formBuilder.group({
    query:this.formBuilder.control('')
   })
  },
  error:(err)=>{

  }
})

}
}

