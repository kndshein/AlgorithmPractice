// TODO: Vowel Count
//* from General Assembly
// Given a string, return the total number of vowels in the string
const string = "All cows eat grass";
// Output: 5

// * Method 1: .split + for loop
const vowelCount1 = (string) => {
  let lowerString = string.toLowerCase();
  let stringArray = lowerString.split("");
  let counter = 0;
  for (i = 0; i < stringArray.length; i++) {
    if (
      stringArray[i] === "a" ||
      stringArray[i] === "e" ||
      stringArray[i] === "i" ||
      stringArray[i] === "o" ||
      stringArray[i] === "u"
    ) {
      counter++;
    }
  }
  return counter;
};
console.log("vowelCount1 - ", vowelCount1(string));

// * Method 2: .split + for loop
const vowelCount2 = (string) => {
  let stringArray = string.toLowerCase().split("");
  let vowels = ["a", "e", "i", "o", "u"];
  let counter = 0;
  for (i = 0; i < string.length; i++) {
    if (vowels.indexOf(stringArray[i]) >= 0) {
      counter++;
    }
  }
  return counter;
};
console.log("vowelCount2 - ", vowelCount2(string));

// * Method 3: .match + regex
const vowelCount3 = (string) => {
  const matchedArr = string.match(/[aeiou]/gi);
  return matchedArr === null ? 0 : matchedArr.length;
};
console.log("vowelCount3 - ", vowelCount3(string));
