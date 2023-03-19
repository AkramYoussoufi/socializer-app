import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MousepositionService {
  private positionY: number = 0;
  private positionX: number = 0;

  setMousePosition(x: number, y: number) {
    this.positionX = Math.floor((x / window.innerWidth) * 20);
    this.positionY = Math.floor((y / window.innerHeight) * 120);
  }

  getMousePositionX() {
    return this.positionX;
  }

  getMousePositionY() {
    return this.positionY;
  }
}
