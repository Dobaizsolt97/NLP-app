export async function updateUi(results) {
  const response = await fetch("http://localhost:8080/test");
  const data = await response.json();

  results.innerHTML = `<h1>${data.article}</h1>
  <h1>Subjectivity: ${data.subjectivity}</h1>
  <h1> Polarity: ${data.polarity}</h1>`;
}
