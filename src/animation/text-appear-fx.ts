export class TextAppearFX {
    private element: HTMLElement;
    private text: string;

    constructor(element: HTMLElement) {
        this.element = element;
        this.text = this.element.innerText;
    }

    /** TURNAROUND *****************/
    turnaround(nbTurn : number, duration : number, timeout: number): void {
        // Set an height for the element
        this.element.style.height = '1em';
        this.element.innerText = '';

        // Transform all letters into a <span>
        for (let i = 0; i < this.text.length; i++) {
            // Get the letter
            const letter = this.text.charAt(i);

            // Create a <span>
            const letterSpan = document.createElement('span');

            // Set the letter
            letterSpan.innerHTML = letter;

            // Opacity
            letterSpan.style.opacity = '0';

            // NOT A SPACE
            if (letter !== ' ') {
                // Set inline block
                letterSpan.style.display = 'inline-block';

                // Get timeout for this letter
                const letterTimeout = timeout * i;

                // Set the letter into the span
                setTimeout(() => (letterSpan.style.opacity = '1'), (letterTimeout + 50));

                // Add animation
                letterSpan.animate(
                    [
                        { scale: 0, transform: 'rotate(0deg)' },
                        { scale: 1, transform: `rotate(${nbTurn * 360}deg)` },
                    ],
                    {
                        duration: duration,
                        iterations: 1,
                        delay: letterTimeout,
                    }
                );
            }

            // Add the span
            this.element.appendChild(letterSpan);
        }
    }


}
