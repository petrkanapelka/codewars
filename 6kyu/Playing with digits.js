function digPow(n, p){
    const sum=n.toString().split('').reduce((prev, acc,index)=>+prev + (+acc)**(index + p),0);
    console.log(sum%n===0?sum/n:-1)
    return sum%n===0?sum/n:-1
}


digPow(89, 1) //, 1)
digPow(92, 1) //, -1)
digPow(46288, 3) //, 51)

/*
n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 */