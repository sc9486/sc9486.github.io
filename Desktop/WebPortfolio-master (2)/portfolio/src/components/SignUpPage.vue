<template>
  <div>
    <v-app id="app"> 
      <v-main> 
        <v-container style="position: relative; top: 20%; margin-left: 20%" class="text-xs-center" > 
          <v-layout row wrap class="text-xs-center"> 
            <v-flex> <v-card flat class="mx-auto" max-width="800"> 
              <v-row style="margin-top: 60px"> <v-col> 
                <v-form style="width: 400px; height: 300px"> 
            
                 <v-text-field id="userId" placeholder="userId" v-model="userId" required maxlength="16"></v-text-field>           
                 <v-text-field id ="userName" placeholder="name" type="userName" v-model="userName" required maxlength="16"></v-text-field> 
                 <v-text-field id ="userEmail" placeholder="email" type="userEmail" v-model="userEmail" required ></v-text-field> 
                 <v-text-field id ="userPassword" placeholder="userPassword" type="password" v-model="userPassword" required maxlength="16"></v-text-field>  
                 <v-text-field id="userPasswordChecker" placeholder="userPassword" type="password" required maxlength="16"></v-text-field> 
              
                <v-card-actions> 
                  <v-btn color="#2c4f91" dark large block @click="SignUp" >Sign Up</v-btn > 
                </v-card-actions> </v-form> </v-col> </v-row> </v-card> </v-flex> </v-layout> </v-container> </v-main> </v-app>
  </div>
</template>
<script>
export default {
  data() { return { 
                userId: "", userPassword: "", userName:"",userEmail:"",
                isEmptyCheck: false, isIdCheck: false, isAdminCheck: false, 
                isPasswordCheck: false, isCheckSpecial: false, isCheckPasswordPattern: false,
                signUpApproval: false, // 가입 승인 여부
                bucketName : "portfolioserversungkyul",
                bucketRegion : "ap-northeast-2",
                IdentityPoolId : "ap-northeast-2:b491c966-e183-46be-b4ab-ccc670ec5e3d"
                };
          },
methods: { 
  SignUp() 
  { 
    this.EmptyCheck(); // 입력란이 공란인지 체크 
    if(this.isEmptyCheck == false) {return;}

    //this.IDCheck(); // 입력된 아이디가 가입 이력이 있는지 체크
    //if(this.isIdCheck == false) {return;}

    this.AdminCheck();// 이름이 관리자인지 체크
    if(this.isAdminCheck == false) {return;}
   
    this.PasswordCheck(); // 입력된 비밀번호 두개가 같은지 체크
    if(this.isPasswordCheck == false) {return;}

    this.CheckSpecial(); // 특수문자 포함여부 체크 
    if(this.isCheckSpecial == false) {return;}

    this.CheckPasswordPattern(); // 비밀번호 패턴 체크 (8자리이상, 알파벳과 특수문자와 숫자 포함하는지 여부 체크)
    if(this.isCheckPasswordPattern == false) {return;}

     if( this.isEmptyCheck == true && this.isAdminCheck == true
        && this.isPasswordCheck == true && this.isCheckSpecial == true && this.isCheckPasswordPattern == true )
    // if(this.signUpApproval == true)

        // AWS 권한 인증 
          AWS.config.update({
          region: this.bucketRegion,
          credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this.IdentityPoolId
          })
        });
       var fileName = this.userName+".txt"; // 파일 제목
       var file_content = document.getElementById('userId').value+"$"+document.getElementById('userName').value+"$"
       + document.getElementById('userEmail').value+"$"+document.getElementById('userPassword').value; // 파일 내용 
      
          // Use S3 ManagedUpload class as it supports multipart uploads
        var upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: this.bucketName,
            Key: fileName, // AWS에 올라갈 파일의 이름 설정
            Body: file_content
        }});

        //AWS에 파일 업로드
        var promise = upload.promise();
        promise.then(
          function (err,data) {
            if (err) {
           // 데이터를 정상적으로 가져오지 않았다면
            //return alert("데이터 전송에 실패했습니다.", err.message);
                  var link = 'http://localhost:8080/#/Login'; // 메인 화면으로 넘어감
                  location.href=link;
                   return alert("회원가입에 성공했습니다.", err.message);
            }
            else if(!err){
              // 데이터를 정상적으로 가져왔다면,
              // 로그인 화면으로 이동
                  // if(this.isIdCheck == true)
                  // {
                  
                  var link = 'http://localhost:8080/#/Login'; // 메인 화면으로 넘어감
                  location.href=link;
                    return alert("회원가입에 성공했습니다.", err.message);   
                  // }
                  // else
                  // {
                    // alert("이미 가입된 아이디 입니다. 다른 아이디를 입력해주세요.");
                  //}
            }
          }
         );  
  },
  // 입력란이 공란인지 체크
  EmptyCheck()
  {
    this.userId = document.getElementById("userId").value
    this.userName = document.getElementById("userName").value 
    this.userEmail = document.getElementById("userEmail").value
    this.userPassword = document.getElementById("userPassword").value
  
    if(this.userId == ""){
       alert("아이디를 입력해주세요.");
       this.isEmptyCheck = false;
      }
    else if(this.userName == ""){
      alert("이름을 입력해주세요.");
      this.isEmptyCheck = false;
      }
    else if(this.userEmail == ""){
       alert("이메일을 입력해주세요.");
       this.isEmptyCheck = false;
      }
    else if(this.userPassword == ""){
     alert("비밀번호를 입력해주세요.");
     this.isEmptyCheck = false;
      }
    else if(this.userPasswordChecker == ""){
      alert("비밀번호를 입력해주세요.");
      this.isEmptyCheck = false;
      }
    // 가입 승인
    else 
    { 
      this.isEmptyCheck = true;
    }

  },
  // 같은 아이디로 가입된 내역이 있다면 경고 알림
  IDCheck()
  {
      // AWS 권한 인증 
            AWS.config.update({
            region: this.bucketRegion,
            credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this.IdentityPoolId
          })
        });
        this.userName = document.getElementById('userName').value

        var userInfor = this.userName + ".txt"
      
        let s3 = new AWS.S3({ params: { Bucket: this.bucketName }});
        
          s3.listObjectsV2(
            {
                Bucket: this.bucketName
            },
            (err, data) => {
                if (err) {
                   alert("서버와 연결에 실패하였습니다.");
                    this.isIdCheck = false;
                }
                else(!err)
                {
                  let lists = [];
                 
                  let contents = data.Contents;
                  contents.forEach((content) => { 
                     lists.push(content.Key);
                  })
                  for(var i=0; i< lists.length;i++)
                  {
                      if(lists[i] != userInfor){ // 같은 파일이 없다면 
                      this.isIdCheck = true; // 가입 승인                 
                    }
                    else{
                      alert("이미 가입된 아이디 입니다. 다른 아이디를 입력해주세요.");
                      this.isIdCheck = false;
                      return;
                    }      
                  } 
                  return;
                }
            }
        );
    },
  // 관리자인지 체크
  AdminCheck()
  {
    this.userName = document.getElementById('userName').value
    
    if(this.userName == "조하늘")
      {  
        this.isAdminCheck = true;
      }
      else if(this.userName == "정아연") 
      {
        this.isAdminCheck = true;
      }
      else if(this.userName == "이상민") 
      {
        this.isAdminCheck = true;
      } 
      // 가입 불승인
      else
      {
        this.isAdminCheck = false;
        alert("관리자가 아닙니다. 서버에 접근할 수 없습니다.");
      }
  },
  // 비밀번호 입력창에 입력된 두 내용이 같은지 체크하는 메서드
  PasswordCheck()
  {      
    var passwordOne = document.getElementById('userPassword').value;
    var passwordTwo = document.getElementById('userPasswordChecker').value;
    
    if( passwordOne != passwordTwo )
    {
      this.isPasswordCheck = false;
      alert("두 비밀번호가 일치하지 않습니다.");
    }
      // 가입 승인
    else 
    {
      this.isPasswordCheck = true;
    }
  },
  // 특수 문자가 있나 없나 체크 
  CheckSpecial() 
  { var special_Pattern = /[`~!#$%^&*|\\\'\";:\/?]/gi; 
    
    this.userId = document.getElementById("userId").value
    this.userName = document.getElementById("userName").value 
    this.userEmail = document.getElementById("userEmail").value
    this.userPassword = document.getElementById("userPassword").value
    
    if(special_Pattern.test(this.userId) == true) // 특수문자가 있다면
    {
      this.isCheckSpecial = false;
       alert("아이디에는 특수문자 /[`~!#$%^&*|\\\'\";:\/?]/ 를 포함할 수 없습니다. ");

    }
    else if(special_Pattern.test(this.userName) == true) // 특수문자가 있다면
    {
      this.isCheckSpecial = false;
       alert("이름에는 특수문자 /[`~!#$%^&*|\\\'\";:\/?]/ 를 포함할 수 없습니다. ");
    }  
    else if(special_Pattern.test(this.userEmail) == true) // 특수문자가 있다면
    {
      this.isCheckSpecial = false;
       alert("이메일에는 특수문자 /[`~!#$%^&*|\\\'\";:\/?]/ 를 포함할 수 없습니다. ");
    }  
    else if(this.userPassword.indexOf("$") !== -1 ) // 특수문자가 있다면
    {
      this.isCheckSpecial = false;
       alert("비밀번호에는 특수문자 $를 포함할 수 없습니다. ");
    }  
    else {  
      this.isCheckSpecial = true;
    };
  },
  // 비밀번호 패턴 체크 (8자 이상, 문자, 숫자, 특수문자 포함여부 체크)
  CheckPasswordPattern() {
    this.userPassword = document.getElementById("userPassword").value
  
    var pattern1 = /[0-9]/;				// 숫자
    var pattern2 = /[a-zA-Z]/;			// 문자
    var pattern3 = /[~!@#%^&*()_+|<>?:{}]/;	// 특수문자

    if(!pattern1.test(this.userPassword) || !pattern2.test(this.userPassword) || !pattern3.test(this.userPassword) || this.userPassword.length < 8) 
    {
      this.isCheckPasswordPattern = false;
      alert("비밀번호는 8자리 이상 알파벳, 숫자, 특수문자 /[~!@#%^&*()_+|<>?:{}]/ 로 구성하여야 합니다.");
    } 
    else {
      this.isCheckPasswordPattern = true;
      this.signUpApproval = true;
    }
  },
}
}
</script>