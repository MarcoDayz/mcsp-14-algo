
const arr = [1,2,3,4,5,6];
console.log(arr)
//create function to reverese arr
function reverseArr(arr){
    //you want to swap the front to end of each iteration
    //for loop thru passed in arr to half the length
    for(let i = 0; i < arr.length / 2; i++){
        //reassign arr at i to the last element decremented by i
        //reassign last element decremented by i to the arr at i
        [arr[i], arr[arr.length -1 -i]] = [arr[arr.length -1 -i], arr[i]];
    }
}
//invoke function
reverseArr(arr)
//console the arr once function mutates array
console.log(arr)