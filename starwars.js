import { restartAnimation } from "./restart-animation.js";
import { play } from "./music.js";

const API_ENDPOINT = "https://swapi.dev/api";

const song = {
  title: "Star Wars",
  artist: "Star Wars",
  audioUrl: "./audio/tema-sw.mp3",
  coverImageUrl: "./imgs/logo.svg",
};

play(song, document.body);

fetch(`${API_ENDPOINT}/films`)
  .then((res) => res.json())
  .then((object) => {
    const movies = object.results.sort((i, j) =>
      i.episode_id > j.episode_id ? 1 : -1
    );

    const list = document.querySelector("#filmes ul");

    movies.forEach(movie => {
        const createdItem = document.createElement("li");

        createdItem.innerHTML = `Episodio ${
          movie.episode_id
        } - ${movie.title.toUpperCase()}`;
  
        createdItem.addEventListener("click", () => {
          const introDescription = document.querySelector("pre.introducao");
  
          introDescription.innerHTML = `Episodio ${movie.episode_id}
              ${movie.title.toUpperCase()}
              
              ${movie.opening_crawl}`;
          restartAnimation(introDescription);
        });
  
        list.appendChild(createdItem);
    })
  });
