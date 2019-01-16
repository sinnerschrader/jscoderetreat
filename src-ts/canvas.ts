export class Canvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private width = 0;
  private heigth = 0;

  constructor() {
    const canvas = document.querySelector<HTMLCanvasElement>("#app");
    if (!canvas) {
      return;
    }
    this.canvas = canvas;
    const context = this.canvas.getContext("2d");
    if (!context) {
      return;
    }
    this.context = context;
  }

  public init(width: number, height: number): void {
    this.width = width;
    this.heigth = height;
  }

  public paint(x: number, y: number, alive: boolean): void {
    if (!this.canvas || !this.context) {
      return;
    }
    const ctx = this.context;
    const width = 600 / this.width;
    const height = 600 / this.heigth;

    ctx.fillStyle = "#000";
    ctx.fillRect(x * width, y * height, width, height);
  }
}
