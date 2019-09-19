const sendRequest = (json) => {
  return fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(resp => resp.json())
    .then(data => showURL(data))
    .catch(error => console.log(error))
}

function showURL(data) {
  return data.success   
    ? data.cardURL
    : "ERROR:" + data.error
}

export default sendRequest