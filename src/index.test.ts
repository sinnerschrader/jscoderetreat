import { echo } from "./index";

test("Game of life exports a test function which echos its input", () => {
  expect(echo("input")).toBe("input");
});
