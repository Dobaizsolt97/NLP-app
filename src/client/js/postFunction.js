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
export { postData };
