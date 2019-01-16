// // Example:
import {
    Canvas
} from "./canvas.js";

export function paintCanvas(document) {
    // // Create a canvas
    const canvas = new Canvas(document);
    // // Initialize width and height of your universe
    canvas.init(10, 10);
    // // Paint a cell at x, y and set it as alive
    canvas.paint(0, 0, true);
}

export function echo(input) {
    return input;
}