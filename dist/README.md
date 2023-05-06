# text-appear-fx

# Installation
```
npm i text-appear-fx
```

# Usage
### html
```html
<div id="animate-txt">This text will be animate directly</div>
```

### javascript
```javascript
import { TextAppearFX } from 'text-appear-fx'

const element = document.querySelector('#animate-txt');
const tafx = new TextAppearFX(element)
tafx.glitch(50)
```

# Animations
- turnaround
- race
- glitch

![text-appear-fx](https://user-images.githubusercontent.com/110570511/236645227-125b845a-745e-473d-b988-2cc52a9ecd17.gif)
