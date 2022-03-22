let arr=[1,2,3];
let arrr=[2,3,7];
function commun(arr1,arr2) {
    let k=0;
    let arr3=[];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i]==arr2[j]) {
                arr3[k]=arr1[i];
                k++;
            } 
        }        
    }
    return arr3;
}
console.log(commun(arr,arrr));