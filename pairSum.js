/**
 * @author Garina Léon
 * garina.leon@gmail.com
 * 
 * Write a function solution that, given an array A consisting of N integers, returns
 * the maximum sum of two numbers whose digits add up to an equal sum. If there are
 * no two numbers whose digits have an equal sum, the function should return -1.
 * 
 * Examples : 
 *  - Given A=[51,71,17,42], the function should return 93. There are two pairs of 
 *    numbers whose digits add up to an equal sum : (51,42) and (17,71). The first
 *    pair sums up to 93.
 *  - Given A=[42,33,60], the function should return 102. The digits of all the 
 *    numbers in A add up to the same sum, and choosing to add 42 and 60 gives the
 *    result 102.
 *  - Given A=[51,32,43], the function should return -1, since all numbers in A have
 *    digits that add up to different, unique sums.
 * 
 * Write an efficient algorithm for the following assumptions : 
 *  - N is an integer within the range [1..200,000]
 *  - each element of array A is an integer within the range [1..1,000,000,000]
 * 
 */



class transformedArray {
    constructor(){
        this.table = new Map();
    }

    getMaximum (items){
        if(items.length == 2){
            return items[0]+items[1];
        }else{
            let max= 0;
            let iLength = items.length;
            for(let i=0; i<iLength ; i++){
                for(let j=i+1 ; j<iLength ; j++){
                    max = (items[i]+items[j] > max) ? items[i]+items[j] : max;
                }
            }
            return max;
        }
    }

    set (val) {
        let str = val.toString();
        let digitSum = 0;
        for(let i=0,iLength=str.length; i<iLength ; i++){
            digitSum +=parseInt(str[i]);
        }
        if(this.table.has(digitSum)){
            let newVal=[...this.table.get(digitSum),val]
            this.table.set(digitSum,newVal);
        }else{
            this.table.set(digitSum,[val]);
        }  
    }

    getResult (){
        let max = 0;
        this.table.forEach(val =>{
            if( val.length > 1){
                max = (this.getMaximum(val) > max) ? this.getMaximum(val) : max;
            }
        })
        return max;
    }
}

function pairSum(arrayOfInt){
    let digitsArrayMap = new transformedArray();
    for(let i=0,iLength=arrayOfInt.length ; i<iLength ; i++){
        if(arrayOfInt[i]<1 || arrayOfInt[i]>1000000000){
            return -1;
        }
        digitsArrayMap.set(arrayOfInt[i]);
    }
    if(arrayOfInt.length == digitsArrayMap.table.size){
        return -1;
    }
    return digitsArrayMap.getResult();

}
//You can leave a comment on how should I do to make it more efficient
console.log(pairSum([51,32,43]));
console.log(pairSum([51,71,17,42]));
console.log(pairSum([42,33,60]));