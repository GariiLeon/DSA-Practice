/**
 * @author Garina Léon
 * 
 * Given a string S consisting of N letters 'a' and/or 'b'. In one move, you can swap
 * one letter for the other( 'a' for 'b' or 'b' for 'a').
 * Write a function solution that, given such a string S, returns the minimum number 
 * of moves required to obtain a string containing no instances of three identical consecutive letters.
 * 
 * Examples : 
 *  1. Given S="baaaaa", the function should return 1. The string without three identical
 *  consecutive letters which can be obtained in one move is "baabaa".
 *  2. Given S="baaabbaabbba", the function should return 2. There are four valid strings
 *  obtainable in two moves : for example, "bbaabbaabbaa". bababbaababa bbaabbaababa bababbaabbaa
 *  3. Given S="baabab", the function should return 0.
 * 
 * Write an efficient algorithm for the following assumptions : 
 *  . N is an integer within the range [0..200,000]
 *  . string S consists only of the characters 'a' and/or 'b'
 */

function swapLetters(givenString){
    if(givenString.length < 1 || givenString.length > 200000 || !givenString.match('^[a-b]+$')){
        return -1;
    }else{
        const stringArrays = givenString.split(''); // transform the string into array in order to better manipulation(for me)
        let firstRes = findAndReplace(stringArrays,1);
        if(firstRes==0 || firstRes==1)
            return firstRes;
        let secondRes = findAndReplace(stringArrays,2);
        if(secondRes==1)
            return secondRes;
        let thirdRes = findAndReplace(stringArrays,3);
        return Math.min(firstRes,secondRes,thirdRes);
    }
}

/**
 * 
 * @param {[]} stringArray // array containing each letter in string S
 * @param {number} option // option of which letter to move in the 3 consecutive letters
 * @returns {number} Minimum number of moves  
 */
function findAndReplace(oString,option){
    let stringArray = oString.slice(0);
    let moves = 0;
    let countLetter = 1;
    let arrLength = stringArray.length; // to avoid calling .length everytime when the array is getting bigger

    //third option, change the third element
    if(option==3){
        for(let index=arrLength-1 ; index>0; index--){
            if(stringArray[index]==stringArray[index-1]){
                countLetter++;
            }else{
                countLetter = 1;
            }

            if(countLetter==3){
                countLetter=1;
                moves++;
                stringArray[index-1] = (stringArray[index-1] == 'a') ? 'b' : 'a';
            }
        }
        return moves;
    }

    //for the second option(change the middle) and the first one(change the first letter of consecutive letters)
    for(let index =1 ; index<arrLength; index++){
        if(stringArray[index]==stringArray[index-1]){
            countLetter++;
        }else{
            countLetter = 1;
        }

        if(countLetter==3){
            countLetter = 1;
            moves++;
            if(option==1){
                stringArray[index] = (stringArray[index] == 'a') ? 'b' : 'a';
            }else{
                stringArray[index-1] = (stringArray[index-1] == 'a') ? 'b' : 'a';
            }
        }
    }
    return moves;
}

console.log(swapLetters("baaaaa"));
console.log(swapLetters("baaabbaabbba"));
console.log(swapLetters("baabab"));