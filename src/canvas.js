export class Canvas {
  constructor() {
    this.width = 0;
    this.heigth = 0;
    const canvas = document.querySelector("#app");
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

  init(width, height) {
    this.width = width;
    this.heigth = height;
  }

  paint(x, y, alive) {
    const ctx = this.context;
    const width = 600 / this.width;
    const height = 600 / this.heigth;

    ctx.fillStyle = "#000";
    ctx.fillRect(x * width, y * height, width, height);
  }
}
