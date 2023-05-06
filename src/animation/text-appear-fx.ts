export class TextAppearFX {
    private element: HTMLElement;
    private text: string;

    constructor(element: HTMLElement) {
        this.element = element;
        this.text = this.element.innerText;
    }

    /** TURNAROUND *****************/
    turnaround(nbTurn: number, duration: number, timeout: number): void {
        // Set an height for the element
        this.element.style.height = '1em';

        // Remove the text
        this.element.innerText = '';

        // Transform all letters into a <span>
        for (let i = 0; i < this.text.length; i++) {
            // Get the letter
            const letter = this.text.charAt(i);

            // Create a <span>
            const letterSpan = document.createElement('span');

            // Set the letter
            letterSpan.innerText = letter;

            // Opacity
            letterSpan.style.opacity = '0';

            // NOT A SPACE
            if (letter !== ' ') {
                // Set inline block
                letterSpan.style.display = 'inline-block';

                // Get timeout for this letter
                const letterTimeout = timeout * i;

                // Set the letter into the span
                setTimeout(() => (letterSpan.style.opacity = '1'), letterTimeout + 50);

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

    /** RACE *****************/
    race(duration: number) {
        const skew = 35;

        // Translation
        this.element.animate(
            [
                { transform: `translateX(-100%) skew(${skew}deg)`, opacity: '0' },
                { opacity: '1' },
                { transform: `translateX(0%) skew(${skew}deg)` },
            ],
            {
                duration: duration,
                iterations: 1,
            }
        );

        // Repositioning
        this.element.animate(
            [{ transform: `skew(${skew}deg)` }, { transform: `skew(${-skew}deg)` }, { transform: `skew(0deg)` }],
            {
                duration: 200,
                iterations: 1,
                delay: duration,
            }
        );
    }

    /** GLITCH **************************/
    glitch(timeout : number) {
        // Set an height for the element
        this.element.style.height = '1em';

        // Remove the text
        this.element.innerHTML = '';

        // Get indexes
        const order = Array.from({ length: this.text.length }, (_, index) => index + 1);

        // Shuffle it to have the order
        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }

        // Transform all letters into a <span>
        for (let i = 0; i < this.text.length; i++) {
            // Get the letter
            const letter = this.text.charAt(i);

            // Create a <span>
            const letterSpan = document.createElement('span');

            // Set the letter into the span
            letterSpan.innerText = letter;

            // Bug animation
            letterSpan.style.opacity = '0';
            setTimeout(() => (letterSpan.style.opacity = '1'), order[i] * timeout);
            setTimeout(() => (letterSpan.style.opacity = '0'), order[i] * timeout + 100);
            setTimeout(() => (letterSpan.style.opacity = '1'), order[i] * timeout + 250);
            setTimeout(() => (letterSpan.style.opacity = '.5'), order[i] * timeout + 300);
            setTimeout(() => (letterSpan.style.opacity = '.75'), order[i] * timeout + 400);
            setTimeout(() => (letterSpan.style.opacity = '0'), order[i] * timeout + 450);
            setTimeout(() => (letterSpan.style.opacity = '1'), order[i] * timeout + 600);

            // Add the span
            this.element.appendChild(letterSpan);
        }
    }
}
