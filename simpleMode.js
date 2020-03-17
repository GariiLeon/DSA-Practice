process.stdin.resume();
process.stdin.setEncoding("utf-8");
console.log("Enter numbers separated by space : ");
process.stdin.on("data",function(input){
    input = input.replace(/[^0-9 ]|^\s+|\s+$/g, '');
    input = input.replace(/[ +]+/g, ' ');
    let arr = input.split(" ");
    console.log("\x1b[33m%s\x1b[0m","Your result is : "+simpleMode(arr));
    console.log("\nEnter numbers separated by space : ");
});


/**
 * @author Garina Léon
 *  This function returns the number that appears most frequently in an array,
    if there is more than one most repeated then return the one that appeared in the array first
    if not return -1
 */
function simpleMode(arr){
    let arrMap = new Map();
    for(let i=0,iLength=arr.length; i<iLength;i++){
        let index = arr[i];
        if(arrMap.has(index)){
            let val = arrMap.get(index);
            arrMap.set(index,{count : val.count+1, index :val.index});
        }else{
            arrMap.set(index,{count : 1, index : i});
        }
    }
    let resCount = 2;
    let index =0;
    let res;
    let modeFound = false;
    arrMap.forEach((val , key)=>{
        if((!res&& val.count>=resCount) || (val.count == resCount && val.index<= index) || val.count > resCount){
            resCount = val.count;
            index = val.index;
            res = key;
            modeFound = true;
        }
    })

    return modeFound ? res : -1;
}