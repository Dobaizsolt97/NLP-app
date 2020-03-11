/* const postData = async (url, textToEnter) => {
  const object = { value: `${textToEnter}` };
  const result = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
  });
};
export { postData };
 */

export async function postData(url, textToEnter) {
  const object = { value: `${textToEnter}` };
  const result = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(object)
  });
  try {
    let newData = await result.json();
    console.log("heres the result of postData: ", newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}
