function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  let results = document.getElementById("results");
  Client.checkForName(formText);

  const updateUi = async () => {
    const response = await fetch("http://localhost:8080/test");
    const data = await response.json();
    console.log(data);
    results.innerHTML = `<h1>${data.article} is a ${data.subjectivity} article with a ${data.polarity} attitude</h1>`;
  };

  const postData = async textToEnter => {
    const object = { value: `${textToEnter}` };
    const result = await fetch("http://localhost:8080/test", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    });
  };
  postData(formText);
  updateUi();
}

export { handleSubmit };
