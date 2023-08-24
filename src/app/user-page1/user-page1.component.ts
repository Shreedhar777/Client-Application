import { Component } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-user-page1',
  templateUrl: './user-page1.component.html',
  styleUrls: ['./user-page1.component.scss']
})
export class UserPage1Component {
  private socket:any;

  constructor() { }

  ngOnInit(): void {
    this.socket = io.connect('http://localhost:3000'); // Replace with your server URL

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    let isDrawing = false;

    canvas.addEventListener('mousedown', () => {
      isDrawing = true;
    });

    canvas.addEventListener('mousemove', (event) => {
      if (!isDrawing) return;
      const { offsetX, offsetY } = event;
      context?.lineTo(offsetX, offsetY);
      context?.stroke();
      this.socket.emit('draw', { x: offsetX, y: offsetY });
    });

    canvas.addEventListener('mouseup', () => {
      isDrawing = false;
    });

    this.socket.on('draw', (data:any) => {
      const { x, y } = data;
      context?.lineTo(x, y);
      context?.stroke();
    });
  }
}
