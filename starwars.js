import { play } from './music.js';

const API_ENDPOINT = 'https://swapi.dev/api'

const song = {
    title: 'Star Wars',
    artist: 'Star Wars',
    audioUrl: './audio/tema-sw.mp3',
    coverImageUrl: './imgs/logo.svg',
}

play(song, document.body);
