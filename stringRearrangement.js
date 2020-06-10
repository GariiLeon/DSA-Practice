/**
 * Problem from Codesignal
 * 
 * Given an array of equal-length strings, you'd like to know if it's possible 
 * to rearrange the order of the elements in such a way that each consecutive 
 * pair of strings differ by exactly one character. Return true if it's 
 * possible, and false if not.
 * @param arr 
 */

function stringRearragement(arr){
    let map = [];
    for(let i=0; i<arr.length; i++){
        let listPossible = [];
        let str1 = arr[i];
        for(let k=0;k<arr.length;k++){
            if(k!=i){
                let str2 = arr[k];
                let countDiff = 0;
                for(let j=0;j<str1.length;j++){
                    if(str1.charAt(j)!=str2.charAt(j)) countDiff++;
                }

                if(countDiff==1){
                    listPossible.push(k);
                }
            }
        }
        map.push({index : i,lstPossIndex : listPossible});        
    }
    
    for(let i=0; i<map.length; i++){
        if(checkRecurr([map[i].index],map,i)) return true;
    }
    return false;
}

function checkRecurr(lstIndex,map,i){
    let listPossibleIndex= map[i].lstPossIndex;
    for(let j=0; j<listPossibleIndex.length; j++){
        let val = listPossibleIndex[j];
        if(lstIndex.length == map.length-1){
            if(lstIndex.indexOf(val)==-1) return true;
        }else{
            if(lstIndex.indexOf(val)==-1){
                if(checkRecurr([...lstIndex,val],map,val)) return true;
            }
        }
        
    }
    return false;
}
// Test cases
console.log(stringRearragement(["aba", "bbb", "bab"])); // False
console.log(stringRearragement(["ab", "bb", "aa"])); // True
console.log(stringRearragement(["q", "q"])); // False
console.log(stringRearragement(["zzzzab", "zzzzbb", "zzzzaa"])); // True
console.log(stringRearragement(["ab", "ad", "ef", "eg"])); // False