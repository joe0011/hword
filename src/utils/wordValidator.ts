import { dictionarySet, isRareWord } from '../data/dictionary';

export const validateWord = (word: string): boolean => {
    return dictionarySet.has(word.toLowerCase());
};

export const checkWordRarity = (word: string): boolean => {
    return isRareWord(word);
}; 