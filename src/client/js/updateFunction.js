const updateUi = async results => {
  const response = await fetch("http://localhost:8080/test");
  const data = await response.json();
  console.log(data);
  results.innerHTML = `<h1>${data.article} is a <strong>${data.subjectivity}</strong> article with a <strong>${data.polarity}</strong> attitude</h1>`;
};

export { updateUi };
