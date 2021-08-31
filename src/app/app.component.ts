import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'basicComponent';
  events = ['SZIGET','SZIN','FEZEN','EFOT'];
  show = true;
  klikkeljunke = false;
  inputContent = "";

  pipeDemo = [
{
'id': 1,
'name': 'vass'


},
{
'id': 2,
'name': 'Mihály'

},
{
  'id':3,
  'name':'Alex'
}


  ]

toggle(){
  this.show = !this.show;
  this.inputContent   = "asd na alma"
}


demo(ev: MouseEvent){
  console.log(ev.screenX);
}


}
