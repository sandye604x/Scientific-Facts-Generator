function displayFacts(response) {
    console.log("fact generated");
    new Typewriter ('#display', {
      strings: response.data.answer,
      autoStart:true,
      cursor:"",
      delay: 5,
    });
  
}

function generateFact(event) {
 event.preventDefault();
 let topic = document.querySelector("#textbox");

  let apikey = "4932054o633942b306c5da4cf004ctf8";
  let context =
    "You are a knowledgeable scientist or researcher who has a lot of knowledge about wildlife, ocean, space, science ";
  let prompt =
    `Please generate a scientific fact between 1 to 3 lines using the topic entered ${topic.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;
 

  let answerElement = document.querySelector("#display");
  answerElement.classList.remove("hidden");
  answerElement.innerHTML = `<div class="generating">⌛Generating a scientific fact on ${topic.value}</div>`;
  console.log("generated fact");

  axios.get(apiUrl).then(displayFacts);
}


let generatorForm = document.querySelector("#factsGenerator");
generatorForm.addEventListener("submit", generateFact);