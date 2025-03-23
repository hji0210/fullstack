//DOM 요소 연결을 시켜줘야한다.
const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");
//document.querySelector();=>태그한개만 가지고 와서 변수에 담아준다.
//document.querySelectorAll();=>태그 여러개를 리스트형태로 담아서 변수에 담아준다.

let currentInput = "";
//아무것도 없는 빈캆 설정


const reOperator = /^(\d+|\*\*|[+\-*/])$/; // 사칙연산자(+,-,*,/)를 구별하게 해주는 정규표현식
const reNumber = /[0-9]/g; // 숫자를 구별해주는 정규표현식

//input태그 화면에 숫자 또는 연산자를 추가하는 함수
function appendToScreen(value){
  screen.value += value;
 //  screen.value => DOM연결해준 screen
 // value => 인자값을 입력해주면 붙는것
}

//화면 초기화 함수
function clearScreen(){
  screen.value = "";
  //빈 인풋값
}

//연산 수행 함수
function calcuate(operator, numbers){
  const[num1, num2] = numbers.map(Number);
  //number에다가 배열로 된 데이터들을 넣을거임(숫자와 연산자)
  //map->numbers라는 기능을 필터링해서 numbers를 다시 정리해줌
  //numbers.map(Number); =>numbers안에 있는 배열데이터들을 전부 숫자화 시켜달라는 뜻
  //지금은 문자로 되어있음
}
    switch(operator){
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2 !== 0 ? num1 / num2 : "Error"; 
       //삼항조건식
       //만약 num2를 0이 아닌게 true이면면 num1/num2를 해주고
       // num2가 0이 아닌게 false면 Error를 출력해준다.
      default:
        return "";
    }