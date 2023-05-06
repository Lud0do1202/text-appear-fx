import { TextAppearFX } from 'text-appear-fx';

const turnaroundElement = document.querySelector('#turnaround');
const turnaround = new TextAppearFX(turnaroundElement);
turnaround.turnaround(2, 1000, 50)

const raceElement = document.querySelector('#race');
const race = new TextAppearFX(raceElement);
race.race(200, 'left')

const glitchElement = document.querySelector('#glitch');
const glitch = new TextAppearFX(glitchElement);
glitch.glitch(100)
