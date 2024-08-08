export class Graph {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
  
    constructor(canvasId: string) {
      this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
      this.ctx = this.canvas.getContext('2d')!;
    }
  
    drawNode(x: number, y: number, size: number, label: string): void {
      this.ctx.beginPath();
      this.ctx.arc(x, y, size, 0, 2 * Math.PI);
      this.ctx.fillStyle = 'blue';
      this.ctx.fill();
      this.ctx.stroke();
      this.ctx.fillStyle = 'black';
      this.ctx.fillText(label, x - size / 2, y + size / 2);
    }
  
    drawLink(x1: number, y1: number, x2: number, y2: number): void {
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
    }
  }
  