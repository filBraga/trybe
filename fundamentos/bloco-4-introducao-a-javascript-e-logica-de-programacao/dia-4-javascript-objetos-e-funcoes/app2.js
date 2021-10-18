
function isPalindrome(palindromeString) {
    let splitPalindromeString = palindromeString.split("")
    let reversePalindromeString = splitPalindromeString.reverse()
    let joinPalindromeString = reversePalindromeString.join("")

    if (joinPalindromeString == palindromeString){
        console.log(splitPalindromeString)
        console.log(reversePalindromeString)
        console.log(joinPalindromeString)
        console.log("true")
        return true
    } else {
        console.log(splitPalindromeString)
        console.log(reversePalindromeString)
        console.log(joinPalindromeString)
        console.log("false")
        return false
    }
  }

  isPalindrome("arara");
  isPalindrome("desenvolvimento");