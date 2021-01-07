(function(){ //hoisting
    //변수 예제
    name = 'ria'
    console.log(name) //ria
    var name;
    //변수선언을 하지 않았음에도 변수가 끌어올려져 식별됨.

    //함수 예제
    world();

    function world(){
        console.log('world')
    }
    //함수를 먼저 호출했음에도 불구하고 함수가 끌어올려져 실행됨.


    //var의 hoisting의 예
    console.log(a) //undefined
    a = 0;
    console.log(a) //0
    var a = 1;

    //let과 var의 비교
    let b; //var b도 가능함 
    console.log(b) //undefinde
    b = 0;
    console.log(b) //0
    b = 1;
    console.log(b) //1
}());