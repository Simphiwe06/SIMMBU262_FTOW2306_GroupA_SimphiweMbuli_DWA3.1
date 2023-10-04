// @ts-check

/**
 * The maximum allowed number.
 * @type {number}
 */
const MAX_NUMBER = 15;

/**
 * The minimum allowed number.
 * @type {number}
 */
const MIN_NUMBER = -5;

/**
 * The step amount for incrementing or decrementing the number.
 * @type {number}
 */
const STEP_AMOUNT = 5;

/**
 * Represents the HTML input element for displaying the number.
 * @type {HTMLInputElement}
 */
const number = document.querySelector('[data-key="number"]');

/**
 * Represents the HTML button element for subtraction.
 * @type {HTMLButtonElement}
 */
const subtract = document.querySelector('[data-key="subtract"]');

/**
 * Represents the HTML button element for addition.
 * @type {HTMLButtonElement}
 */
const add = document.querySelector('[data-key="add"]');

/**
 * Handles the subtraction of 1 from the displayed number.
 * @returns {void}
 */
const subtractHandler = () => {
    /**
     * The new value after subtraction.
     * @type {number}
     */
    const newValue = parseInt(number.value) - 1;
    
    number.value = newValue;

    // Enable the "Add" button if it was previously disabled
    if (add.disabled === true) {
        add.disabled = false;
    }

    // Disable the "Subtract" button if the new value is less than or equal to the minimum number
    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true;
    }
};

/**
 * Handles the addition of 1 to the displayed number.
 * @returns {void}
 */
const addHandler = () => {
    /**
     * The new value after addition.
     * @type {number}
     */
    const newValue = parseInt(number.value) + 1;
    
    number.value = newValue;

    // Enable the "Subtract" button if it was previously disabled
    if (subtract.disabled === true) {
        subtract.disabled = false;
    }

    // Disable the "Add" button if the new value is greater than or equal to the maximum number
    if (newValue >= MAX_NUMBER) {
        add.disabled = true;
    }
};

// Add event listeners to the buttons
subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler);
