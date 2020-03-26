/**
@author Garina Léon
garina.leon@gmail.com

Write a function solution that, given a string S of N lowercase English letters,
returns a string with no instances of three identical consecutive letters, obtained
from S by deleting the minimum possible number of letters.

Examples : 
 * Given S="eedaaad", the function should return "eedaad". One occurence of letter a is deleted
 * Given S="xxxtxxx", the function should return "xxtxx". Note that letter x can occur more than
    three times in the returned string, if the occurences are not consecutive.
 * Given S="uuuuxaaaaxuuu", the function should return "uuxaaxuu".

Write an efficient algorithm for the following assumptions : 
 * N is an integer within the range [1..200,000]
 * string S consists only of lowercase letters (a-z)

*/



function consecutiveLetters(strInput){
    if(strInput.length < 1 || strInput.length > 200000 || !strInput.match('^[a-z]+$')){
        return -1;
    }else{
        let stringArray = strInput.split(''); // transform the string into array in order to better manipulation(for me)
        let result = findAndRemove(1,stringArray,1);
        return result.join('');
    }
}

/**
 * 
 * @param {number} index   start the for loop from that index,
 * index helps avoiding to start the for loop from 0
 * @param {[]} stringArray  array containing each letter in string S
 * @param {number} countLetter  to count the occurence of a letter
 * @returns {[]} The array of letters left;
 */
function findAndRemove(index, stringArray,countLetter){
    let arrLength = stringArray.length; // to avoid calling .length everytime when the array is getting bigger
    for( ; index<arrLength; index++){
        if(stringArray[index]==stringArray[index-1]){
            countLetter++;
        }else{
            countLetter = 1;
        }

        if(countLetter==3){
            stringArray.splice(index,1);
            return findAndRemove(index,stringArray,2); 
        }
    }
    return stringArray;
}
//You can leave a comment on how should I do to make it more efficient
console.log(consecutiveLetters("eedaaad"));
console.log(consecutiveLetters("xxxtxxx"));
console.log(consecutiveLetters("uuuuxaaaaxuuu"));
