function descendingOrder(n) {
    n = +n.toString().split('').sort((a,b)=> +b - +a).join('');
    console.log("🚀 ~ descendingOrder ~ n ➔", n);
}

descendingOrder(0); //=> 0)
descendingOrder(1); //=> 1)
descendingOrder(111); //=> 111)
descendingOrder(15); //=> 51)
descendingOrder(1021); //=> 2110)
descendingOrder(123456789); //=> 987654321)
