import { CheckLink } from "../src/client/js/formHandler";
let formText = "https://jestjs.io/docs/en/getting-started";
describe("check if input is link", () => {
  test("should get true", () => {
    expect(CheckLink(formText)).toBeTruthy();
  });
});
