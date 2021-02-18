# TODO: Most Vowel
# Given a string of words, return the word with the most vowel count
string = "What a wonderful day";
# Output: "wonderful"

# * Method 1: <Add method summary>
def most_vowel1 string
    newString = string.downcase.split(" ")
    emptyObj = {}
    for word in newString
      emptyObj[word] = word.count("aeiou")
    end
    emptyObj.max_by {|obj| obj[1]}[0]
end
print "most_vowel1 - "
p most_vowel1 string