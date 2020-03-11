import "regenerator-runtime";
import { postData } from "../src/client/js/postFunction";
let testString = "I love cake";

test("it should post data from the website to the server", () => {
  postData("/test", testString).then(result => {
    expect(result).toMatch(testString);
  });
});
