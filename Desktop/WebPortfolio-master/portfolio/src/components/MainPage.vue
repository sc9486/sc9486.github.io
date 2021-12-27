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
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <router-link to="/PortfolioList"><b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide></router-link>


      <router-link to="/PortfolioList1"><b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide></router-link>


      <router-link to="/PortfolioList2"><b-carousel-slide img-src="./assets/logo.png">
          <img src='../assets/logo.png'>
      </b-carousel-slide></router-link>

      <router-link to="/PortfolioList3">
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
      </router-link>

      <router-link to="/PortfolioList">
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
      </router-link>
    </b-carousel>
    


    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
  </div>

      <div>
        <div class="black-bg">
            <h1> 메인 페이지임</h1>
            <p> 상세페이지 내용임</p>
        </div>
        <div>
            <b-button v-b-modal.LoginBox class="Login">Login</b-button>
            <b-modal id="LoginBox" title="Login">
                <p class="my-4">아이디와 비밀번호를 입력하세요.</p>
                <input v-model="message" placeholder="아이디: "><br><br>
                <input v-model="message" placeholder="패스워드: ">
            </b-modal>
        </div>
        <div>
            <b-button v-b-modal.RegisterView class="Register">Register</b-button>
            <b-modal id="RegisterView" title="Register">
                <p class="my-5">계정을 생성하세요.</p>
                <input v-model="message" placeholder="이름: "><br><br>
                <input v-model="message" placeholder="아이디: "><br><br>
                <input v-model="message" placeholder="패스워드: ">
            </b-modal>
        </div>
    </div>



  <div>
  <b-card-group>
    <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card title="Title" img-src="https://placekitten.com/g/300/450" img-alt="Image" img-top>
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This card has even longer content than the first to show that equal height action.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</div>




  </div>
</template>

<script>
  export default {
    data() {
      return {
       title: '그래',
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
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
    top: 30px;
    left: 1460px;
}
</style>