# text-appear-fx

# Installation
```
npm i text-appear-fx
```

# Usage
### html
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Text Appear FX</title>
        <style>
            body {
                margin: 0;
                padding: 0;

                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
            }

            h1{
                text-align: center;
                width: 100%;
            }

            #race {
                width: 25%;
            }
        </style>
    </head>
    <body>
        <!-- TURNAROUND -->
        <h1 id="turnaround">Turnaround Turnaround</h1>

        <!-- RACE -->
        <h1 id="race">Race Race</h1>

        <!-- Glitch -->
        <h1 id="glitch">Glitch Glitch</h1>
        
        <script src="./animation.js" type="module"></script>
    </body>
</html>
```

### javascript
```javascript
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

```

# Example

![text-appear-fx](https://user-images.githubusercontent.com/110570511/236645227-125b845a-745e-473d-b988-2cc52a9ecd17.gif)
