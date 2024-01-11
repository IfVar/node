/* API Scripts and Functions */

function showColor(color) {
    return ("https://www.colorhexa.com/" + color + ".png");
}

function showDoggo() {
    const apiUrl = "https://dog.ceo/api/breeds/image/random"

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            // Access the parsed JSON data
            const message = data.message; // Extract the "message" property
            
          })
          .catch((error) => {
            console.log("Error: " + error);
          });
}