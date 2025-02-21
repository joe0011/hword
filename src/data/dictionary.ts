import dictionary from '../dictionary.json';

// Function to determine if a word is rare
export const isRareWord = (word: string): boolean => {
    // Consider words not in main dictionary as rare
    return !dictionary.includes(word.toLowerCase());
};

// Export dictionary as a Set for faster lookups
export const dictionarySet = new Set(dictionary);

// Export the raw dictionary array
export default dictionary; 