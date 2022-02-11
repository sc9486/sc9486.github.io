 

<!-- 글상자 관리
                <form method="post" @submit.prevent="textBox_Form"> <!-- 글상자 폼-
                  <div id="textBox_Buttons">
                    <!-- 글상자 추가 버튼-
                    <input type="button" class="button_TextBox" value="글상자 추가하기" v-on:click="textBox_Add()" style="width:175px;height:35px;top:80px;left:500px;font-size:15px;">
                    <!-- 글상자 삭제 버튼-
                    <input type="button" class="button_TextBox" value="글상자 삭제하기" v-on:click="textBox_Delete()" style="width:175px;height:35px;top:80px;left:685px;font-size:15px;"> 
                  </div>
               </form>

  <!--글꼴 선택 버튼-
  <b-form-select class="text"  v-model="selected_textStyle" :options="text_Style_options" 
    v-on:change="textChange_Style" size="md" style="width:50px;height:35px;top:30px;left:500px;font-size:15px;" > 
      <template #first>
        <b-form-select-option :value="null" disabled>글꼴</b-form-select-option>
      </template>
  </b-form-select> 
    <!--글꼴 크기 선택 버튼-
  <b-form-select class="text" v-model="selected_textSize" :options="text_Size_options" 
    v-on:change="textChange_Size" size="md"  style="width:50px;height:35px;top:30px;left:580px;font-size:15px;">
      <template #first>
        <b-form-select-option :value="null" disabled>글꼴 크기</b-form-select-option>
      </template>
  </b-form-select> 
      <!--글꼴 굵기 선택 버튼-
  <b-form-select class="text"  v-model="selected_textThickness" :options="text_Thickness_options" 
    v-on:change="textChange_Bold" size="md" value="Surround" style="width:50px;height:35px;top:30px;left:660px;font-size:15px;">
      <template #first>
        <b-form-select-option :value="null" disabled>글꼴 굵기</b-form-select-option>
      </template>
  </b-form-select> 
 
    <button v-on:click="textChange_Bold"  value="Surround">Greet</button>
    <div contenteditable="true">Hello World</div>   -->
    <!-- <b-form-select v-model="selected" 
                   :options="options"
                   calss="mb-3"
    ></b-form-select>

  <div>Selected: <strong>{{selected}}</strong></div> -->
 