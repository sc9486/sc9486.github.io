<template>
  <div>
    <v-app id="app"> 
      <v-main> 
        <v-container style="position: relative; top: 20%; margin-left: 20%" class="text-xs-center" > 
          <v-layout row wrap class="text-xs-center"> 
            <v-flex> <v-card flat class="mx-auto" max-width="800"> 
              <v-row style="margin-top: 60px"> <v-col> 
                <v-form style="width: 400px; height: 300px"> 
                  <div class="mx-3"> 
            
                  <div class="mx-1"> 
                    <v-text-field placeholder="userId" v-model="userId" required ></v-text-field> 
                      
                  </div> 
                    </div> 
                    <div class="mx-3"> 
                    <div class="mx-1"> 
                      <v-text-field placeholder="userPassword" type="password" v-model="userPassword" required ></v-text-field> 
                      </div> 
                      </div> 
                      <v-card-actions> 
                       <v-btn color="#2c4f91" dark large block @click="Login" >Login</v-btn > 
                      </v-card-actions> </v-form> </v-col> </v-row> </v-card> </v-flex> </v-layout> </v-container> </v-main> </v-app>


  </div>
</template>
<script>
export default {
  data() { return { 
                userId: "",userName:"", userPassword: "", idCheck: false,
                bucketName : "portfolioserversungkyul",
                bucketRegion : "ap-northeast-2",
                IdentityPoolId : "ap-northeast-2:b491c966-e183-46be-b4ab-ccc670ec5e3d",
                };
          },
methods: { 
  Login() 
   {  
     // AWS 권한 인증 
            AWS.config.update({
            region: this.bucketRegion,
            credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: this.IdentityPoolId
          })
        });
        // 서버의 전체 파일안에 
        // 입력한 아이디를 가진 파일이 있는지 찾아본다.
        var arr = ['이상민', '정아연', '조하늘']; 
        for (var i = 0; i < arr.length; i++) {
          var userInfor = arr[i] + ".txt"
           let s3 = new AWS.S3({ params: { Bucket: this.bucketName }});
           let params = {Bucket: "portfolioserversungkyul", Key: userInfor} // AWS에 올라갈 파일의 이름 설정
          var userDataArray = []
          s3.getObject(params, (err, data) => {
                if (err) {
                }
                else{
                  // 파일 마다 내용을 가져와서 아이디가 있는지 검사
                   var text = data.Body.toString() 
                    userDataArray = text.split('$');
                    console.log("서버에서 가져온 아이디 :"+userDataArray[0])
                   if(this.userId != userDataArray[0])
                    {
                      //아이디가 없음
                      this.idCheck = false
                      console.log("없음")
                    }
                    else
                    {   //아이디 있음
                      this.idCheck = true
                      console.log("있음")
                      // 비밀번호 확인
                      if(this.userId == userDataArray[0] && (this.userPassword != userDataArray[3]))
                      {
                        this.$store.state.inLogin = false
            
                        return alert("비밀번호를 확인해주세요.");
                      }
                      else if((this.userId == userDataArray[0]) && this.userPassword == userDataArray[3])
                      {
                          // 로그인 성공
                          window.localStorage.setItem('isLogin','true')
                          window.localStorage.setItem('userId',this.userId)
                          window.localStorage.setItem('userName',userDataArray[1])
                          window.localStorage.setItem('userEmail',userDataArray[2])
                          this.$store.state.inLogin = true
                          this.$store.state.userId = this.userId
                          this.$store.state.userName = userDataArray[1]
                          this.$store.state.userEmail = userDataArray[2]

                          if(userDataArray[1]=="이상민")
                          {
                            var link = 'http://localhost:8080/#/PortfolioList';
                            location.href=link;
                          }
                          else if(userDataArray[1]=="정아연")
                          {
                            var link = 'http://localhost:8080/#/PortfolioList1';
                            location.href=link;
                          }
                          if(userDataArray[1]=="조하늘")
                          {
                            var link = 'http://localhost:8080/#/PortfolioList2';
                            location.href=link;
                          }    
                        }
                      return;
                    }
                }
              })
            } 
            console.log(this.idCheck)
  
            if(this.idCheck == false){return alert("가입 내역이 존재하지 않습니다. 아이디를 확인해주세요.", err.message);}
     }
  }
}
</script>