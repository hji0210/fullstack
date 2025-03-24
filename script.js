//DOM 요소 연결을 시켜줘야한다.
const screen = document.getElementById("screen");

const buttons = document.querySelectorAll("button");
//document.querySelector();=>태그한개만 가지고 와서 변수에 담아준다.
//document.querySelectorAll();=>태그 여러개를 리스트형태로 담아서 변수에 담아준다.




const operatorRegex = /^[+\-*/]$/; // 연산자 구별 정규식
const numberRegex = /^[0-9]$/; // 숫자 구별 정규식



//input태그 화면에 숫자 또는 연산자를 추가하는 함수
function appendToScreen(value){
  screen.value += value;
 //  screen.value => DOM연결해준 screen
 // value => 인자값을 입력해주면 붙는것
}

//화면 초기화 함수
function clearScreen(){
  screen.value = "";

}

// 연산 수행 함수
function calculate(operator, numbers) {
  const [num1, num2] = numbers.map(Number);
  //numbers에다가 배열로 된 데이터들을 넣는 것(숫자와 문자)
  //numbers.map(Number);=>numbers안에 있는 배열 데이터들을 숫자로 바꿔준다.
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error"; 
      //삼항조건식
      //num2가 0이 아닌게 true이면 num1/num2
      //num2가 0이 아닌게 false이면 "Error"가 실헹이 된다.
    default:
      return ""; 
  }
}

  //버튼 클릭 시 동작을 처리하는 함수
  function handleButtonClick(event) {
    console.log(event);
    event.preventDefault();
    //새로고침되는게 방지가 된다.
    const buttonText = event.target.innerText;
    //event.target.innerText => 버튼의 텍스트를 가져온다.

     if(numberRegex.test(buttonText)==true){
       //숫자를 눌렀을때
       appendToScreen(buttonText);
     }else if(operatorRegex.test(buttonText)==true){
       //연산자를 눌렀을때
       appendToScreen(buttonText);
  }
  }
  
//버튼 클릭 이벤트 리스너 등록 함수
function initializeButtonListeners(){
  buttons.forEach((button)=>{
   button.addEventListener("click", handleButtonClick);
   
  })
}

//"=" 버튼 클릭 시 계산 결과를 화면에 표시
function handleResultClick(){
  const screenValue = screen.value;
  //화면에 있는 값을 가져온다.


  if(screenValue.includes("+")){
    const [num1,num2] = screenValue.split("+");
    //split("+");=>+를 기준으로 나눠준다.
    screen.value = calculate("+",[num1,num2]);
} else if (screenValue.split("-")) {
  const [num1,num2] = screenValue.split("-");
  screen.value = calculate("-",[num1,num2]);

} else if (screenValue.split("*")) {
  const [num1,num2] = screenValue.split("*");
  screen.value = calculate("*",[num1,num2]);

} else if (screenValue.split("/")) {
  const [num1,num2] = screenValue.split("/");
  screen.value = calculate("/",[num1,num2]);
}


}

// 초기화 버튼 클릭 시 화면을 초기화
document.getElementById("resetButton").addEventListener("click", function () {
  clearScreen();
});

//"="버튼 클릭 시 계산실행
document.getElementById("result").addEventListener("click",handleResultClick);

//계산기 기능 실행
initializeButtonListeners();