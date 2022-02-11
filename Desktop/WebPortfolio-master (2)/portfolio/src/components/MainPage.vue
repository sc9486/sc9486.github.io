<template>
  <div>
  <div>
    <b-carousel
      id="carousel-1"
     v-model="slide"  
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="postion=fixed;text-shadow: 1px 1px 2px #333;z-Index=1;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <h1 @click="LoginCheck_PortfolioList()">
        <b-carousel-slide
          caption="이상민"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1024/480/?image=52"
        ></b-carousel-slide>
      </h1>
      <h2 @click="LoginCheck_PortfolioList1()">
        <b-carousel-slide img-src="./assets/logo.png">
        <h1>정아연</h1>
            <img src='../assets/logo.png'>
        </b-carousel-slide>
      </h2>
      <h3 @click="LoginCheck_PortfolioList2()">
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
          <h1>조하늘</h1>
        </b-carousel-slide>
      </h3>

    </b-carousel>
    <div>
      <a class="Login" v-if="isLogin" href="http://localhost:8080/#/Login" role="button">Login</a>
      <a class="Logout" v-if="!isLogin" @click="Logout()" role="button">Logout</a> 
      <a class="SignUp" href="http://localhost:8080/#/SignUp" role="button">Sign Up</a>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       title: '그래',
        slide: 0,
        sliding: null,
         isLogin: true // 로그인 버튼 활성화 여부
      }
    },
    created() // 처음 페이지 로드시 실행
    {
      var login = localStorage.getItem('isLogin'); // 로그인 여부 조회
      if(login == "true") // 로그인 되어 있다면
      { 
        this.isLogin = false; // 로그인 버튼 비활성화
      }
      else // 로그인 되어 있지 않다면
      {
        this.isLogin = true;
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      Logout()
      {
        window.localStorage.clear();
        window.localStorage.setItem("isLogin","false")
        this.isLogin = true;
        this.$store.state.inLogin = false;
        alert("로그아웃 되었습니다.");
        var link = 'http://localhost:8080';
        location.href=link;
      },
       GoToSignUpPage()
      {
        var link = 'http://localhost:8080/#/SignUp';
        location.href=link;
      },
      LoginCheck_PortfolioList()
      {
        var login = localStorage.getItem('isLogin'); // 로그인 여부 조회

        if(login) // 로그인 되어 있다면
        { 
           var name = localStorage.getItem('userName'); // 이름 조회
          if(name == '이상민')
          {
            var link = 'http://localhost:8080/#/PortfolioList';
            location.href = link;
          }
          else
          {
            var link = 'http://localhost:8080/#/PortfolioList3';
            location.href=link;
          }
        }
        else // 로그인 되어 있지 않다면
        {        
          var link = 'http://localhost:8080/#/PortfolioList3';
          location.href=link;
        }
      },
       LoginCheck_PortfolioList1()
      {
        var login = localStorage.getItem('isLogin'); // 로그인 여부 조회
    
        if(login) // 로그인 되어 있다면
        { 
          var name = localStorage.getItem('userName'); // 이름 조회
          if(name == '정아연')
          {
          var link = 'http://localhost:8080/#/PortfolioList1';
           location.href = link;
          }
         else // 로그인 되어 있지 않다면
          {
            var link = 'http://localhost:8080/#/PortfolioList4';
            location.href=link;
          }
        }
        else // 로그인 되어 있지 않다면
        {
          var link = 'http://localhost:8080/#/PortfolioList4';
          location.href=link;
        }
      },
       LoginCheck_PortfolioList2()
      {
        var login = localStorage.getItem('isLogin'); // 로그인 여부 조회
    
        if(login) // 로그인 되어 있다면
        { 
           var name = localStorage.getItem('userName'); // 이름 조회

          if(name == '조하늘')
          {
            var link = 'http://localhost:8080/#/PortfolioList2';
            location.href = link;
          }
          else // 로그인 되어 있지 않다면
          {
            var link = 'http://localhost:8080/#/PortfolioList5';
            location.href=link;
          }
        }
        else // 로그인 되어 있지 않다면
        {
          var link = 'http://localhost:8080/#/PortfolioList5';
          location.href=link;
        }
      },
    }
  }

  
</script>

<style>
body{
    margin : 0
}
div{
    box-sizing: border-box;
}
.black-gb{
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed; padding: 20px;
}
.white-bg{
    width: 100%; background: white;
    border-radius: 8px;
    padding: 20px;
}
.Register{
    position: Fixed;
    top: 30px;
    left: 1530px;
}
.Login{
    position: Fixed;
    top: 35px;
    left: 1430px;
    z-index: 200;
}
.Logout{
      position: Fixed;
    top: 35px;
    left: 1430px;
    z-index: 200;
}
.SignUp{
    position: Fixed;
    top: 75px;
    left: 1430px;
    z-index: 200;
}
</style>
