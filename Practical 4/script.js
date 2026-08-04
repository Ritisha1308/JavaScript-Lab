// Function Declaration
function reverseString(text) {
    return text.split("").reverse().join("");
}

// Closure
function palindromeChecker() {

    let count = 0;

    return function(text){

        count++;

        const cleaned = text
            .toLowerCase()
            .replace(/[^a-z0-9]/g,"");

        return{
            isPalindrome: cleaned === reverseString(cleaned),
            checks: count
        };
    }

}

const check = palindromeChecker();

// Arrow Function
const showResult = (msg,color)=>{

    const result=document.getElementById("result");

    result.innerHTML=msg;
    result.style.color=color;

}

function checkPalindrome(){

    try{

        const input=document.getElementById("textInput").value;

        if(input.trim()=="")
            throw "Please enter some text.";

        const output=check(input);

        if(output.isPalindrome){

            showResult(
                "✅ It's a Palindrome",
                "#2e8b57"
            );

        }

        else{

            showResult(
                "❌ Not a Palindrome",
                "#d9534f"
            );

        }

    }

    catch(error){

        showResult(error,"#ff9800");

    }

}