var removeHead = function(array1, num1) {
    array1.splice(0,num1);
    return array1;
};

console.log(removeHead([0,1,2,3],1));
console.log(removeHead(['car','boat','train','plane'],3));