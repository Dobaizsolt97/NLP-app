import { postData } from "./postFunction";
import { updateUi } from "./updateFunction";
function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  let results = document.getElementById("results");
  if (formText) {
    let regex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
    let rez = regex.test(formText);
    if (rez) {
      alert("please enter an article");
    } else {
      postData(formText);
      updateUi(results);
    }
  }
}

export { handleSubmit };
