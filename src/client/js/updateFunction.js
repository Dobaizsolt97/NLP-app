const updateUi = async results => {
  const response = await fetch("http://localhost:8080/test");
  const data = await response.json();
  console.log(data);
  results.innerHTML = `<h1>${data.article}</h1>
  <h1>Subjectivity: ${data.subjectivity}</h1>
  <h1> Polarity: ${data.polarity}</h1>`;
};

export { updateUi };
