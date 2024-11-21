var isAnagram = function (s, t) {
    let arrS = s.split('').sort();
    let arrT = t.split('').sort();
    // console.log(arrS)
    // console.log(arrT)

    if (arrS.length !== arrT.length ) {
        return false
    } else {
        for (let i = 0; i < arrS.length; i++) {
            if (arrS[i]!==arrT[i]) {
                return false
            }
        }
    }

    return true
};

s = "anagram"
t = "nagaram"



console.log(isAnagram(s, t))