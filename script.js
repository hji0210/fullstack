// 'wrapperBox'라는 변수에 ID가 'wrapper'인 요소를 가져옵니다. 
// 마치 특정 서랍을 열기 위해 서랍 이름표를 확인하고 그 서랍을 찾는 것과 같습니다.
const wrapperBox = document.getElementById("wrapper");

// 'inputFieldGroup'라는 변수에 클래스명이 'inputGroup'인 모든 요소를 가져옵니다. 
// 이는 같은 이름표가 붙은 여러 서랍을 한 번에 모두 가져오는 것과 비슷합니다.
const inputFieldGroup = document.getElementsByClassName("inputGroup");;


const allInputs = document.querySelector("input");
const userNickname = document.getElementById("nickname");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("userPassword");
const confirmPassword = document.getElementById("confirmPassword");
const userPhone = document.getElementById("phone");
const registrationForm = document.getElementById("registrationForm");


const updateHelperText = (input,message,isVaild)=>{
  const inputGroup = input.parentElement;
  console.log(userEmail.parentElement);
//한개의 input태그의 부모태그에 접근하는 것 
//예시로 input태그를 저희가 usermail로 접근하였다고 하면,아래 태그들의 최상위태그를 의미한다.
//<div class="inputGroup">
//<label for="userEmail">이메일 주소</label>
//<input type="email" id="email" class="emailInput">
//<span class="helperText">알림</span>
//<!-- /*글자표현*/ -->
//</div>

const helperText = inputGroup.getElementsByClassName("helperText")[0];
//=> 알림
if(isVaild == true){
  //isValid에는 boolean데이터 true/false가 들어가게끔 만든다.
  inputGroup.classList.remove("invalid");
  inputGroup.classList.add("valid");
  helperText.style.visibility = "hidden";
}
if(isVaild == false){
  //isValid에는 boolean데이터 true/false가 들어가게끔 만든다.
  inputGroup.classList.remove("valid");
  inputGroup.classList.add("invalid");
  helperText.style.visibility = "hidden";
  helperText.innerText = message;
}


};


//알림이 사용이 되는것까지는 설정을 했는데, 언제 사용이 되어야하나, 조건을 설정안했음음

