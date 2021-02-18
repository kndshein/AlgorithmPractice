# TODO: Count Duplicates in Object
# Given an array of objects of colors, return a new object that contains key names of each color and how many times they've been referenced.
colorsArray = [
  { colors: ["blue", "purple", "red"] },
  { colors: ["black", "orange", "blue"] },
  { colors: ["green", "red", "blue"] }
];

# * Method 1: for loop + for loop + if/else
def countDuplicates1 array
    emptyObj = {}
    for colors in array
      for color in colors[:colors]
        if emptyObj[color]
          emptyObj[color] = emptyObj[color] + 1
        else
          emptyObj[color] = 1
        end
      end
    end
    return emptyObj
end
  
print "countDuplicates - "
p countDuplicates1(colorsArray)