import { postData } from "./postFunction";
import { updateUi } from "./updateFunction";
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  let results = document.getElementById("results");

  postData(formText);
  updateUi(results);
}

export { handleSubmit };
