// TODO: Sentence Reversal
//* from BinarySearch
//* 5/10/2021
// Given a list of strings sentence where each sentence[i] is a string with single character, reverse the order of the words in the sentence. You may assume there's no extraneous spaces in the sentence. Can you do modify sentence in-place and solve in O(1)\mathcal{O}(1)O(1) space?
const sentence = ["h", "i", " ", "w", "o", "r", "l", "d"];

// Input: sentence = ["h", "i", " ", "w", "o", "r", "l", "d"]
// Output: ["w", "o", "r", "l", "d", " ", "h", "i"]

// * Method 1
const sentenceReversal = (param) => {
  return sentence.join("").split(" ").reverse().join(" ").split("");
};

console.log("sentenceReversal - ", sentenceReversal(string));
