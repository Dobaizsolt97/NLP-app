import { updateUi } from "../src/client/js/updateFunction";
import "regenerator-runtime";
describe("get the data from storrage", () => {
  test("should get an object", () => {
    updateUi().then(result => {
      expect(result).toContain(expect.anything());
    });
  });
});
