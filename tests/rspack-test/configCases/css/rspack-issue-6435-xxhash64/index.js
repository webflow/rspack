import * as classes from "./style.module.css";
import legacyClasses from "./legacy/index.css";

it("should have consistent hash", () => {
	expect(classes["container-main"]).toBe("_1aca092dd4f3fb56-container-main")
	expect(legacyClasses["legacy-main"]).toBe("_3e2d71b53f4f2575-legacy-main")
});
