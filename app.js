const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/slack")
    .then((res) => res.json())
    .then((jokeData) => {
      const jokeText = jokeData.attachments[0].text;
      const jokes = document.getElementById("joke");
      console.log(jokeText);
      jokes.innerHTML = jokeText;
    });
});
