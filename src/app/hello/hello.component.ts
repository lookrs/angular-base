import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {

  message: string = '第一个组件'
  mytitle: string = ''

  inChange(e:Event){
    console.log(e)
  }

  getInputVal(v:string){
    console.log(v)
  }
}
