import { TextAppearFX } from './dist/lib/animation/text-appear-fx.js';

const turnaroundElement = document.querySelector('#turnaround');
const turnaround = new TextAppearFX(turnaroundElement);
turnaround.turnaround(2, 1000, 50)
