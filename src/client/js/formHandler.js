import { postData } from "./postFunction";
import { updateUi } from "./updateFunction";
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  let results = document.getElementById("results");
  if (formText) {
    if (CheckLink) {
      alert("please enter an article");
    } else {
      postData("http://localhost:8080/test", formText);
      updateUi(results);
    }
  }
}

export { handleSubmit, CheckLink };
function CheckLink(formText) {
  let regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
  let rez = regex.test(formText);
  return rez;
}
