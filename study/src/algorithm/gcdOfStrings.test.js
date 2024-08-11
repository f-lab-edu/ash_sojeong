const cases = [
    {str1: "ABCABC", str2: "ABC", output: "ABC"},
    {str1: "ABABAB", str2: "ABAB", output: "AB"},
    {str1: "LEET", str2: "CODE", output: ""},
    {str1: "ABCABCABC", str2: "AABBCC", output: ""},
    /* 두 수가 같은 케이스 start */
    {str1: "ABCABC", str2: "ABCABC", output: "ABCABC"}, 
    {str1: "ABABAB", str2: "ABABAB", output: "ABABAB"},
    {str1: "LEET", str2: "LEET", output: "LEET"},
    {str1: "ABCABCABC", str2: "ABCABCABC", output: "ABCABCABC"},
    /* 두 수가 같은 케이스 end */
    {str1: "OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO", str2:"OBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNOOBCNO", output: "OBCNO"},
    {
        str1: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        str2: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        output: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    }
];

// 처음 생각한 과정 
var gcdOfStrings1 = function(str1, str2) {
    let result = "";

    let bigger = '';
    let smaller = '';

    if (str1.length > str2.length) {
        bigger = str1;
        smaller = str2;
    } else {
        bigger = str2;
        smaller = str1;
    }

    const uniqueSmaller = Array.from(new Set(smaller)).join(""); // bigger = ABCABCABC smaller = AABBCC <- 요 케이스도 최대공약수를 갖는다고 볼 수 있으므로 성립하지 않는 로직.
    if (bigger.indexOf(uniqueSmaller) > -1) {
        result = uniqueSmaller;
    } 

    return result;
};

/**
 * 유클리드 호제법
 * 1. A > B 로 셋팅.
 * 2. A % B = C 라 할 때, B % C 가 0이 될 때 까지 반복
 * 3. 나머지가 0이 되는 순간의 C값이 최대공약수 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */

var gcdOfStrings = function(str1, str2) {
    if (str1.concat(str2) !== str2.concat(str1)) {
        return "";
    }
  
   let _str1 = str1;
   let _str2 = str2;
   if (str1.length < str2.length) {
    _str1 = str2;
    _str2 = str1;
   }

   const len1 = _str1.length;
   const len2 = _str2.length;
   const remain = len1 % len2;

   if (remain) {
    return gcdOfStrings(_str2, _str2.slice(0, remain))
   } else {
    return _str1.slice(0, len2)
   }
}

test.each(cases)('최대공약수', ({str1, str2, output}) => {
    expect(gcdOfStrings(str1, str2)).toBe(output);
});