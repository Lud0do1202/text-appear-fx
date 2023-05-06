/**
 * Apply animation to some texts
 *
 * @author Lud0do1202 (Traina Ludo)
 */
export class TextAppearFX {
    private element: HTMLElement;
    private text: string;

    /**
     * Create a new instance of TextAppearFX
     *
     * @param element The element containing the text
     */
    constructor(element: HTMLElement) {
        // Check args
        if (!(element instanceof HTMLElement))
            throw new Error('TEXT_APPEAR_FX\nelement arg must be an instance of HTMLElement');

        this.element = element;
        this.text = this.element.textContent;
    }

    /**
     * Each letter turns on them-self
     *
     * @param numberOfTurns The number of turns (int)
     * @param duration The duration for making the turns (ms)
     * @param timeout The timeout between letters (ms)
     */
    turnaround(numberOfTurns: number, duration: number, timeout: number): void {
        // Check args
        if (typeof numberOfTurns !== 'number') throw new Error('TURNAROUND\nnumberOfTurns arg must be a number');
        else if (typeof duration !== 'number') throw new Error('TURNAROUND\nduration arg must be a number');
        else if (typeof timeout !== 'number') throw new Error('TURNAROUND\ntimeout arg must be a number');

        // numberOfTurns -> int
        numberOfTurns = Math.floor(numberOfTurns);

        // Set an height for the element
        this.element.style.height = '1em';

        // Remove the text
        this.element.textContent = '';

        // Transform all letters into a <span>
        for (let i = 0; i < this.text.length; i++) {
            // Get the letter
            const letter = this.text.charAt(i);

            // Create a <span>
            const letterSpan = document.createElement('span');

            // Set the letter
            letterSpan.textContent = letter;

            // Opacity
            letterSpan.style.opacity = '0';

            // NOT A SPACE
            if (letter !== ' ') {
                // Set inline block
                letterSpan.style.display = 'inline-block';

                // Get timeout for this letter
                const letterTimeout = timeout * i;

                // Set the letter into the span
                setTimeout(() => (letterSpan.style.opacity = '1'), letterTimeout + 150);

                // Add animation
                letterSpan.animate(
                    [
                        { scale: 0, transform: 'rotate(0deg)' },
                        { scale: 1, transform: `rotate(${numberOfTurns * 360}deg)` },
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

    /**
     * The text come from the left with a fast effect
     *
     * @param duration The duration of the animation (ms)
     */
    race(duration: number, side: 'left' | 'right') {
        // Check args
        if (typeof duration !== 'number') throw new Error('RACE\nduration arg must be a number');
        else if (side !== 'left' && side !== 'right') throw new Error("RACE\nside arg must be a 'left' or 'right'");

        const skew = side === 'left' ? 35 : -35;
        const defaultTranslate = side === 'left' ? -100 : 100;

        // Translation
        this.element.animate(
            [
                { transform: `translateX(${defaultTranslate}%) skew(${skew}deg)`, opacity: '0' },
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

    /**
     * The text appear letter by letter randomly with a glitch effect
     *
     * @param timeout The timeout between letters (ms)
     */
    glitch(timeout: number) {
        // Check args
        if (typeof timeout !== 'number') throw new Error('GLITCH\ntimeout arg must be a number');

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
            letterSpan.textContent = letter;

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
