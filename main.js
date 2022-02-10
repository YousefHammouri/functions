const specialChars = function (string1, string2) {

    let count = 0;
    let specialChar;
    for (let i = 0; i < string2.length; i++) {
        specialChar = string2[i]
        for (let x = 0; x < string1.length; x++) {
            let char = string1[x]
            if (specialChar == char) {
                count++;
            }
        }
    }
    return count;
}

const string1 = "t2g=gb?gk*fER*f$g=rbj%b**rgb^"
const string2 = "=*"

console.log(

    specialChars(string1,string2)
    );



const factorial = function(num){
let result=1;

for(i=num; i>0; i--){

result=result*i;

}
return result;

}

console.log(factorial(5));



const findKey = function (string) {

let key ="";
let isHash = false;
for(i=0;i<string.length;i++){
if(string[i]=="#"){

    isHash=!isHash;
    }
    if(isHash && string[i]!="#"){
    key=key+string[i]
    
}}

    
return key;
}




console.log(findKey("hwcvw#tulips#jnrfjhr"))
