# TODO: Caesar Cipher (Shift Cipher)
# * from General Assembly
# Given a string, return a string with the alphabets shifted 13 letters to the right.
string = "FREE PIZZA!";
# Output: SERR CVMMN!

# * Method 1: .split + .upto loop + if/else + .join
def caesar_cipher1 string
    alphabets = ('A'.."Z").to_a
    new_string = string.to_s.split("")
    0.upto(new_string.length - 1) do |i|
        next if new_string[i] == " "
        next if !new_string[i].match(/[A-Z]/)
        if alphabets.index(new_string[i]) >= alphabets.length/2
            new_string[i] = alphabets[alphabets.index(new_string[i])-alphabets.length/2]
        else
            new_string[i] = alphabets[alphabets.index(new_string[i])+alphabets.length/2]
        end
    end
    return new_string.join("")
end
print "caesar_cipher1 - "
p caesar_cipher1 string