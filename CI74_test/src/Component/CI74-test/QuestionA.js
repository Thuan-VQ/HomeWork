

let A1 = [1, 2, "a"];
let A2 = [1, 3, "b"];
let result = A1.concat(A2);
function A (result){
  
    return [...new Set(result)];
    
}
console.log(A(result));