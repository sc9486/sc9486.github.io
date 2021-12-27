<template>
  <div>
 <!-- 글상자 관리 -->
                <form method="post" @submit.prevent="textBox_Form"> <!-- 글상자 폼-->
                  <div id="textBox_Buttons">
                    <!-- 글상자 추가 버튼-->
                    <input type="button" class="button_TextBox" value="글상자 추가하기" v-on:click="textBox_Add()" style="width:175px;height:35px;top:80px;left:500px;font-size:15px;">
                    <!-- 글상자 삭제 버튼-->
                    <input type="button" class="button_TextBox" value="글상자 삭제하기" v-on:click="textBox_Delete()" style="width:175px;height:35px;top:80px;left:685px;font-size:15px;"> 
                  </div>
               </form>
  <!--글상자-->
  <!-- <textarea type="text" id='done${this.textBox_count}' class="textBox" cols="80" rows="15" contenteditable="true" placeholder="글을 입력해주세요." 
          name="done${this.textBox_count}" style="top:${this.textBox_count*370+180}px; left:900px; font-size:15px; resize: both;">
          </textarea> -->
  <!--글꼴 선택 버튼-->
  <b-form-select class="text"  v-model="selected_textStyle" :options="text_Style_options" 
    v-on:change="textChange_Style" size="md" style="width:50px;height:35px;top:30px;left:500px;font-size:15px;" > 
      <template #first>
        <b-form-select-option :value="null" disabled>글꼴</b-form-select-option>
      </template>
  </b-form-select> 
    <!--글꼴 크기 선택 버튼-->
  <b-form-select class="text" v-model="selected_textSize" :options="text_Size_options" 
    v-on:change="textChange_Size" size="md"  style="width:50px;height:35px;top:30px;left:580px;font-size:15px;">
      <template #first>
        <b-form-select-option :value="null" disabled>글꼴 크기</b-form-select-option>
      </template>
  </b-form-select> 
      <!--글꼴 굵기 선택 버튼-->
  <b-form-select class="text"  v-model="selected_textThickness" :options="text_Thickness_options" 
    v-on:change="textChange_Bold" size="md" value="Surround" style="width:50px;height:35px;top:30px;left:660px;font-size:15px;">
      <template #first>
        <b-form-select-option :value="null" disabled>글꼴 굵기</b-form-select-option>
      </template>
  </b-form-select> 
 
    <button v-on:click="textChange_Bold"  value="Surround">Greet</button>
    <div contenteditable="true">Hello World</div>
     
  </div> 
  
</template>

<script> 

export default {
  name: 'ddr',
   data() {
      return {
       
        textBox_count : 0, // 글상자 개수
    
        selected_textStyle: null, // 선택된 글꼴
        selected_textSize: null, // 선택된 글꼴 크기
        selected_textThickness: null, // 선택된 글꼴 굵기
        text_Style_options: [
        
          { value: '굴림', text: '굴림'},
          { value: '맑은 고딕', text: '맑은 고딕'},
          { value: '궁서', text: '궁서' },
          { value: '휴먼엽서체', text: '휴먼엽서체'} 
        ],
           text_Size_options: [
          { value: '16px', text: '16'},
          { value: '19px', text: '19'},
          { value: '22px', text: '22'},
          { value: '25px', text: '25'},
          { value: '28px', text: '28'},
          { value: '31px', text: '31'},
          { value: '34px', text: '34'},
          { value: '37px', text: '37'},
          { value: '40px', text: '40'},
          { value: '43px', text: '43'},
          { value: '46px', text: '46'},
          { value: '50px', text: '50'},

        ],
           text_Thickness_options: [
          { value: 'normal', text: '보통'},    
          { value: 'bold', text: '굵게'},
        ]
      }
    },
  methods: { 
      textBox_Add: function () {
					const addedForm = document.getElementById('textBox_Buttons') // getElementById : document 객체를 대상으로 해당 id 를 가진 요소 노드를 찾아 줍니다.
					const str = `<textarea type="text" id='done${this.textBox_count}' class="textBox" cols="80" rows="15" contenteditable="true" placeholder="글을 입력해주세요." 
          name="done${this.textBox_count}" style="top:${this.textBox_count*370+180}px; left:900px; font-size:15px; resize: both;" >
          </textarea>
                 <div
              ref="wrapper"
              :style="style"
              :class="{ active: active }"
              @touchstart="handleMouseDown"
              @mousedown="handleMouseDown"
              class="textBox_Controller" style="top:430px;left:50px;">
          
                <div v-if="resizable">
                  <span
                    :data-resizetype="item"
                    :key="item"
                    :class="item"
                    :style="{ ...getNewHandler(item) }"
                    class="textBox_resize-handler"
                    v-for="item in resizeHandler"
                  ></span>
                </div>
                <span :style="rotateHandler" v-if="rotatable" data-type="rotate" class="textBox_rotate-handler" ></span>
            </div> `

					const div = document.createElement('div') // createElement : HTML 엘리먼트를 생성 
					div.id = 'added' + this.textBox_count
					div.innerHTML = str
        
					addedForm.appendChild(div) // appendChild : 부모 노드에 자식 노드를 추가 -> parent.append(child);
					this.textBox_count++
	},
    textBox_Delete () {
      if (this.textBox_count > 1) {
        const addedDiv = document.getElementById('added' + (--this.textBox_count))
        document.getElementById('textBox_Buttons').removeChild(addedDiv)
      }
    },
           textChange_Style() { // 글자 폰트 변경
             document.getElementById('done${this.textBox_count}').style.fontFamily = this.selected_textStyle;          
        },
           textChange_Size() { // 글자 크기 변경
            // document.getElementById('done${this.textBox_count}').style.fontSize = this.selected_textSize;  
            //  var span = document.createElement("span");
            //   span.style.fontWeight = "bold";
            //     span.style.color = "black";
              // if (window.getSelection) {
                
              //     var sel = window.getSelection();
              //     sel.fontWeight=this.selected_textStyle;  
                  // if (sel.rangeCount) {
          
                  //     var range = sel.getRangeAt(0).cloneRange(); // cloneRange() : 범위를 복제할 수 있습니다
                  //   console.log(sel.rangeCount);
                  //     range.surroundContents(span); //surroundContents(node) : 범위 내 컨텐츠를 node 로 래핑.
                  //     console.log(range.rangeCount);
                   



                  //     sel.removeAllRanges();
                  //     console.log(sel.toString());
                  //     sel.addRange(range);
                  //     console.log(sel.toString());
                  // }
       // }
            // let selectedObj = window.getSelection();
            //  console.log(selectedObj.getRangeAt(0).toString());
            //  selectedObj.getRangeAt(0).toString().style.fontSize = this.selected_textSize;              
        },
           textChange_Bold() { // 글자 굵기 변경
          //  document.getElementById('done${this.textBox_count}').style.fontWeight = this.selected_textThickness;
                 var span = document.createElement("span");
                  span.style.fontWeight = "bold";
                 span.style.color = "black";
                  if (window.getSelection) {
                      var sel = window.getSelection();
                      if (sel.rangeCount) {
                          var range = sel.getRangeAt(0).cloneRange();
                          range.surroundContents(span);
                          sel.removeAllRanges();
                          sel.addRange(range);
                      }
                   }        
        },
        surroundSelection() {
        var span = document.createElement("span");
        span.style.fontWeight = "bold";
        span.style.color = "black";
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.rangeCount) {
                var range = sel.getRangeAt(0).cloneRange();
                range.surroundContents(span);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    }
  }
}
</script> 
<style>


.text{
  border: 2px solid darkgray;
  border-radius: 5px;
  position: absolute;
}
.textBox{
  border: 2px solid darkgray;
  border-radius: 5px;
  position: fixed;
  width:800px;
  height:600px;
}

</style>

