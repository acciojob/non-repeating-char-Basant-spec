function firstNonRepeatedChar(str) {
    // Object to count occurrences of each character
    const charCount = {};

    // First pass: Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: Find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Example usage with user input
const input = prompt("Enter a string:");
alert(firstNonRepeatedChar(input));
