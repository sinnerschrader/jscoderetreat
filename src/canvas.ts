export class Canvas {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private width = 0;
  private heigth = 0;

  constructor() {
    const canvas = document.querySelector<HTMLCanvasElement>("#app");
    if (!canvas) {
      throw new Error("No canvas found");
    }
    this.canvas = canvas;
    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("No 2d context available");
    }
    this.context = context;
  }

  public init(width: number, height: number): void {
    this.width = width;
    this.heigth = height;
  }

  public paint(x: number, y: number, alive: boolean): void {
    const ctx = this.context;
    const width = 600 / this.width;
    const height = 600 / this.heigth;

    ctx.fillStyle = "#000";
    ctx.fillRect(x * width, y * height, width, height);
  }
}
