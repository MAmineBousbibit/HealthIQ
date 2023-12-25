import { Component } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  box = true;
  chat=false;

  inputValue: string = ''; 
  
  toggleChatBox(): void {
    this.box=false;
    this.chat=true;
}
toggleChatBox1(){
  this.box=true;
  this.chat=false;
}
sendmsg(){
 
  console.log(this.inputValue);
  this.inputValue='';
}


}

