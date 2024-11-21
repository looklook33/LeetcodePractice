var isIsomorphic = function(s, t) {
    let sortS=s.split('').sort();
    let sortT=t.split('').sort();
    // console.log(sortS);
    // console.log(sortT);
    if (s.length!==t.length){
        return false
    } else {
        for (let i = 0; i <s.length-1; i++){
            if (sortS[i]===sortS[i+1] && sortT[i]===sortT[i+1]){
                return true
            }
        }
    }
    return false;
    
};

s = "egg", t = "add"

console.log(isIsomorphic(s,t))