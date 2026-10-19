import { readFileSync } from "fs";
import { join } from "path";
import { parent } from "./parent.module.css";
import { composed } from "./consumer.module.css";

it("should invalidate cached code generation when a non-inlined import changes local identifiers", () => {
  const css = readFileSync(join(__dirname, "style.css"), "utf-8");
  expect(composed.split(" ").slice(1)).toEqual([parent]);
  expect(css).toContain(`.${parent} {`);
  expect(css).toContain(WATCH_STEP === "0" ? "color: blue;" : "color: green;");
  if (WATCH_STEP === "0") {
    STATE.previousParent = parent;
  } else {
    expect(parent).not.toBe(STATE.previousParent);
    expect(css).not.toContain(`.${STATE.previousParent} {`);
  }
});
