import * as classes from "./style.module.css";
import legacyClasses from "./legacy/index.css";

it("should have consistent hash", () => {
  expect(classes["container-main"]).toBe("_8fe05f3de489e0609b01-container-main")
  expect(legacyClasses["legacy-main"]).toBe("_89c413336bee33f6149e-legacy-main")
});
