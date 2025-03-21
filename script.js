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

//알림이 사용이 되는것까지는 설정을 했는데, 언제 사용이 되어야하나, 조건을 설정안했음
//입력필드가 비어있는지 확인하는 함수기능을 만듭니다.
const checkEmptyInput = (input) => {
  if (input.value.trim() === '') {  // input.value로 수정
    // 인풋 입력칸에 입력한 문자열 중 띄어쓰기를 없애는 기능
    updateHelperText(input, '값을 입력해주세요', false);
  }
};

//이메일 형식이 올바른지 확인하는 함수
//이메일 주소가 규칙에 맞게 작성되었는지 확인하는 것!
const validEmailFormat = (input)=>{

  const strongPattern =  /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  if(strongPattern.test(password.value.trim()) == true){
//password.value = > 태그안에 입력한 입력 값{
  updateHelperText(input,"",true);
  return true;
}else{
  updateHelperText(input,"유효한 이메일 주소를 입력부탁드립니다.",false);
}
  //정규식 = > 마법,이메일에 골뱅이가 안들어갔다거나, com.co.kr이런식으로 표현이 안될때
  //검사해서 true혹은 false를 리턴하게 할 수 있다.=> 이메일 정규식식
}


// 비밀번호 강도를 확인하는 함수
// 비밀번호가 충분히 강한지 검증하는 것은 마치 학생의 답안이 올바른지 확인하는 것과 비슷합니다.
const checkPasswordStrength = (password) => {
  const strongPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (strongPattern.test(password.value)) {
      updateHelperText(password, "비밀번호 강도: 강함", true);
      return true;
  } else {
      updateHelperText(password, "비밀번호는 8자 이상이어야 하며, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.", false);
      return false;
  }
};

// 비밀번호와 확인 비밀번호가 일치하는지 확인하는 함수
// 마치 두 개의 열쇠가 일치하는지 확인하는 것과 비슷합니다.
const validatePasswordMatch =(passwordInput,confirmInput) =>{
   if(passwordInput.value != confirmInput.value){
      updateHelperText(confirmInput,"비밀번호가 일치하지 않습니다.",false);
      return false;
   }else{
    updateHelperText(confirmInput,"true");
   }
   }

// 전화번호가 올바른 형식인지 확인하는 함수
const validatePhoneNumber = (input)=>{
  const phonePattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
   if(phonePattern.test(input.value.trim())){
     updateHelperText(input,"",true);
      return true;
    } else{
      updateHelperText.Text(input,"유효한 전화번호를 입력해주세요.(예:010-1234-1234")
      return false;
     }
  }

  
  
