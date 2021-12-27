<template>
    <div>
    <div>   
        <b-button v-b-modal.modal-xl variant="primary">
            <img src="../assets/img06.png" class="test">
        </b-button>
        
      
    <modal>
        <b-modal id="modal-xl" size="xl" title="개인 페이지 글쓰기 화면">
        <!-- 좌측 상단의 설정들 -->
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
            <div id = "tittle" class="tittle" style="width:150px;height:30px;top:14px;left:50px;"> [ 제목 ] :</div>
            <input type="tittleText" class="tittleText" placeholder="제목을 입력하세요!" style="width:310px;height:30px;top:30px;left:150px;font-size:10px;">
            <button id = "titlleImgButton" class="titlleImgButton" style="width:30px;height:30px;top:80px;left:70px;font-size:15px;"> + </button> 
            <input type="text" class="TitlleImgBox" placeholder="썸네일 이미지.jpg" style="width:310px;height:30px;top:80px;left:150px;font-size:15px;">
          <!-- 파일 추가 버튼 -->
          <div>
              <p><input type="file" id="file" class="inputfile" v-on:change="upload" accept="*.gif,.jpg,.png,audio/*" 
              multiple required capture='user' onchange = 'aaa' style="width:310px;height:30px;top:130px;left:50px;font-size:15px;"></p>            
          </div>
            <!-- 추가된 파일-->

               <div
              ref="wrapper"
              :style="style"
              :class="{ active: active }"
              @touchstart="handleMouseDown"
              @mousedown="handleMouseDown"
              class="yoyoo-ddr" style="top:430px;left:50px;">
          
              <p><img v-bind:src="newImgSrc" class = "img"></p>   
              <div v-if="resizable">
                <span
                  :data-resizetype="item"
                  :key="item"
                  :class="item"
                  :style="{ ...getNewHandler(item) }"
                  class="resize-handler"
                  v-for="item in resizeHandler"
                ></span>
              </div>
              <span :style="rotateHandler" v-if="rotatable" data-type="rotate" class="rotate-handler" ></span>
            </div> 
               <div
              ref="wrapper"
              :style="style"
              :class="{ active: active }"
              @touchstart="handleMouseDownA"
              @mousedown="handleMouseDownA"
              class="textBox_Controller" draggable='true' style="top:430px;left:50px;"> 
          
                <div  v-if="resizable">
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
            </div> 
      
        <div id = "buttons" > <!-- 우측 상단의 버튼들 -->
                <!-- <button id = "button01" class="button_Else" style="width:70px;height:35px;top:30px;left:500px;font-size:15px;" data-toggle="dropdown" aria-expanded="false"> 글꼴 </button> 
                <button id = "button02" class="button_Else" style="width:70px;height:35px;top:30px;left:580px;font-size:15px;"> 크기 </button> 
                <button id = "button03" class="button_Else" style="width:50px;height:35px;top:30px;left:660px;font-size:15px;"> 색 </button>  -->
                 <b-form-select class="button_Else" style="width:50px;height:35px;top:30px;left:500px;font-size:15px;" 
                   v-model="selected" :options="text_Style_options" v-on:change="textChange_Style"> 글꼴 </b-form-select> 
                <b-form-select class="button_Else"  text="글꼴 크기" style="width:50px;height:35px;top:30px;left:580px;font-size:15px;" 
                   v-model="selected" :options="text_Size_options" v-on:change="textChange_Size" ></b-form-select> 
                <b-form-select class="button_Else" text="글꼴 굵기" style="width:50px;height:35px;top:30px;left:660px;font-size:15px;" 
                   v-model="selected" :options="text_Thickness_options" v-on:change="textChange_Bold"></b-form-select> 

                <button id = "button04" class="button_Else" style="width:120px;height:35px;top:30px;left:720px;font-size:15px;"> 하이퍼링크 </button>   
                    <!-- 글상자 관리 -->
                <form method="post" @submit.prevent="textBox_Form"> <!-- 글상자 폼-->
                  <div id="textBox_Buttons">
                    <!-- 글상자 추가 버튼-->
                    <input type="button" class="button_TextBox" value="글상자 추가하기" v-on:click="textBox_Add()" style="width:175px;height:35px;top:80px;left:500px;font-size:15px;">
                    <!-- 글상자 삭제 버튼-->
                    <input type="button" class="button_TextBox" value="글상자 삭제하기" v-on:click="textBox_Delete()" style="width:175px;height:35px;top:80px;left:685px;font-size:15px;"> 
                  </div>
               </form>
        </div>
        </b-modal>
    </modal>
      
     <div class="box-solid">solid</div>
      
        <img src="../assets/img06.png" class="test1">
        <img src="../assets/img06.png" class="test2">
        <img src="../assets/image.jpg" class="test3">
        <img src="../assets/img06.png" class="test4">
        <img src="../assets/img06.png" class="test5">
        <img src="../assets/img06.png" class="test6">
        <img src="../assets/img06.png" class="test7">
        <img src="../assets/Left.jpg" class="Left">
        <img src="../assets/Right.jpg" class="Right">
    </div>
   <div>
    <b-button v-b-toggle.sidebar-variant class="MenuButton">Menu bar</b-button>
    <b-sidebar id="sidebar-variant" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
      <div class="px-3 py-2">
        <p>
          Crasasd
        </p>
        <router-link to="/PortfolioList"><b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img></router-link>
        <b-text class = "Lee-link">이상민 포트폴리오</b-text>
      </div>
       <div class="px-3 py-3">
        <router-link to="/PortfolioList1"><b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img></router-link>
        <b-text class = "Lee-link">정아연 포트폴리오</b-text>
      </div>
   
       <div class="px-3 py-4">
        <router-link to="/PortfolioList2"><b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img></router-link>
        <b-text class = "Lee-link">조하늘 포트폴리오</b-text>
      </div>
    
    </b-sidebar>
  </div>
</div>
</template>

<script> 
import {
  getBoundingRect,
  getHandler,
  getPoints,
  getSize,
  heightMap,
  pointMap,
  pointMap2,
  rad2deg,
  tr2bl,
  widthMap,
} from './helper'
export default {
  name: 'ddr',
  props: {
    value: {
      default: function() {
        return { x: 0, y: 0, width: 100, height: 100, rotation: 0 }
      },
      type: Object,
    },
    handlerSize: {
      type: Number,
      default: 13,
    },
    active: {
      default: true,
      type: Boolean,
    },
    resizeHandler: {
      default: function() {
        return ['tl', 'tm', 'tr', 'r', 'br', 'bm', 'bl', 'l']
      },
      type: Array,
    },
    resizable: {
      default: true,
      type: Boolean,
    },
    rotatable: {
      default: true,
      type: Boolean,
    },
    draggable: {
      default: true,
      type: Boolean,
    },
    acceptRatio: {
      default: false,
      type: Boolean,
    },
    minWidth: {
      type: Number,
      default: 1,
    },
    minHeight: {
      type: Number,
      default: 1,
    },
    parent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
          transform: Object.assign({}, this.value),
          currentRatio: 1,
          isInitialRatio: false,
          newImgSrc: '', // 새로운 이미지의 경로를 저장할 변수
          textBox_count : 0, // 글상자 개수

          selected: null, // 선택된 목록
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
            { value: '43px', text: '46'},
            { value: '46px', text: '46'},
            { value: '50px', text: '50'},
          ],
              text_Thickness_options: [
            { value: 'normal', text: '얇게'},
            { value: 'bold', text: '굵게'},
          ]
    }
  },
  created() {
    // 缓存当前位置信息
    this.localeTransform = { ...this.transform }
  },
  watch: {
    value(t) {
      this.transform = t
    },
  },
  computed: {
    rotateHandler() {
      let size = Math.ceil(this.handlerSize) + 'px'
      return {
        width: size,
        height: size,
        top: -25 + 'px',
        'margin-left': -Math.floor(this.handlerSize / 2) + 'px',
      }
    },
    style() {
      let transform = this.transform
      return {
        left: transform.x + 'px',
        top: transform.y + 'px',
        width: transform.width + 'px',
        height: transform.height + 'px',
        transform: `rotate(${transform.rotation}deg)`,
      }
    },
  },
  methods: {
       upload(e) {
          let file = e.target.files;
          let reader = new FileReader();

          reader.readAsDataURL(file[0]);
          reader.onload = e => {
              this.newImgSrc = e.target.result;                
          }
       },
    getNewHandler(type) {
      let cursor = getHandler(type, this.transform.rotation)
      let { handlerSize } = this
      let props = {}
      let half = -Math.floor(handlerSize / 2) + 'px'
      switch (type) {
        case 'tl':
          props = {
            top: half,
            left: half,
          }
          break
        case 'tm':
          props = { top: half, 'margin-left': half }
          break
        case 'tr':
          props = { right: half, top: half }
          break
        case 'r':
          props = { right: half, 'margin-top': half }
          break
        case 'br':
          props = { bottom: half, right: half }
          break
        case 'bm':
          props = { 'margin-left': half, bottom: half }
          break
        case 'bl':
          props = { left: half, bottom: half }
          break
        case 'l':
          props = { 'margin-top': half, left: half }
          break
      }
      return {
        cursor: cursor + '-resize',
        width: Math.ceil(handlerSize) + 'px',
        height: Math.ceil(handlerSize) + 'px',
        ...props,
      }
    },

    handleMouseDown(event) {
      if (!this.active) return
      let point = event.touches ? event.touches[0] : event
      let { clientX, clientY } = point
      this._lastX = clientX
      this._lastY = clientY
      this._activeTarget = event.target
      this._parentRect = this.$refs.wrapper.parentNode.getBoundingClientRect() //  DomRect 구하기 (각종 좌표값이 들어있는 객체)
      this.localeTransform = this.transform
      // Get the movable boundary of the element in the parent element
      if (this.parent) {
        let mouseDownRect = getBoundingRect(this.transform)
        let minLeft = this.transform.x - mouseDownRect.left
        let maxLeft = this._parentRect.width - this.transform.width - minLeft
        let minTop = this.transform.y - mouseDownRect.top
        let maxTop = this._parentRect.height - this.transform.height - minTop
        this.minBoundary = { minLeft, maxLeft, minTop, maxTop }
      }
      document.addEventListener('mousemove', this.handleMouseMove, false) // DOM객체. addEventListener(이벤트명, 실행할 함수명, 옵션)
      document.addEventListener('touchmove', this.handleMouseMove, false)
      document.addEventListener('touchend', this.handleMouseUp, false)
      document.addEventListener('mouseup', this.handleMouseUp, false)
       console.log(event.target.dataset.type);
      if (event.target.dataset.type === 'rotate') {
        this._handlerType = 'rotate'
        this.handleRotateStart(event)
        this.$emit('rotate-start', event, this.transform)
      } else if (this._activeTarget.dataset.resizetype) {
        this._handlerType = 'resize'
        this.handleResizeStart(event)
        this.$emit('resize-start', event, this.transform)
      }
    
      else {
        this._handlerType = 'drag'
        this.draggable && this.$emit('drag-start', event, this.transform)
      }
       console.log(this._handlerType);
    },
        handleMouseDownA(event) {
      if (!this.active) return
      let point = event.touches ? event.touches[0] : event
      let { clientX, clientY } = point
      this._lastX = clientX
      this._lastY = clientY
      this._activeTarget = event.target
      this._parentRect = this.$refs.wrapper.parentNode.getBoundingClientRect() //  DomRect 구하기 (각종 좌표값이 들어있는 객체)
      this.localeTransform = this.transform
      // Get the movable boundary of the element in the parent element
      if (this.parent) {
        let mouseDownRect = getBoundingRect(this.transform)
        let minLeft = this.transform.x - mouseDownRect.left
        let maxLeft = this._parentRect.width - this.transform.width - minLeft
        let minTop = this.transform.y - mouseDownRect.top
        let maxTop = this._parentRect.height - this.transform.height - minTop
        this.minBoundary = { minLeft, maxLeft, minTop, maxTop }
      }
      document.addEventListener('mousemove', this.handleMouseMoveA, false) // DOM객체. addEventListener(이벤트명, 실행할 함수명, 옵션)
      document.addEventListener('touchmove', this.handleMouseMoveA, false)
      document.addEventListener('touchend', this.handleMouseUpA, false)
      document.addEventListener('mouseup', this.handleMouseUpA, false)
       console.log(event.target.dataset.type);
      if (event.target.dataset.type === 'rotate') {
        this._handlerType = 'rotate'
        this.handleRotateStart(event)
        this.$emit('rotate-start', event, this.transform)
      } else if (this._activeTarget.dataset.resizetype) {
        this._handlerType = 'resize'
        this.handleResizeStart(event)
        this.$emit('resize-start', event, this.transform)
      }
    
      else {
        this._handlerType = 'drag'
        this.draggable && this.$emit('drag-start', event, this.transform)
      }
       console.log(this._handlerType);
    },
    handleMouseMove(event) {
        
      if (this._handlerType === 'resize') {
        this.handleResizeMove(event)
        this.$emit('resize', event, this.transform) // emit : 자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달할 때 사용됩니다. resize라는 키를 등록
      } else if (this._handlerType === 'drag' && this.draggable) {
        this.doMove(event)
        this.$emit('drag', event, this.transform)
      } else if (this._handlerType === 'rotate') {
        this.handleRotateMove(event)
        this.$emit('rotate', event, this.transform)
           
      }
     
      console.log("handleMouseMove : "+this._handlerType)
    },
     handleMouseMoveA(event) {
        
      if (this._handlerType === 'resize') {
        this.handleResizeMove(event)
        this.$emit('resize', event, this.transform) // emit : 자식 컴포넌트에서 부모 컴포넌트로 데이터를 전달할 때 사용됩니다. resize라는 키를 등록
      } else if (this._handlerType === 'drag' && this.draggable) {
        this.doMove(event)
        this.$emit('drag', event, this.transform)
      } else if (this._handlerType === 'rotate') {
        this.handleRotateMove(event)
        this.$emit('rotate', event, this.transform)
           
      }
     
      console.log("handleMouseMove_A : "+this._handlerType)
    },
    doMove(event) {
      let { clientX, clientY } = event.touches ? event.touches[0] : event
      let deltaX = clientX - this._lastX
      let deltaY = clientY - this._lastY
      this._lastX = clientX
      this._lastY = clientY
      if (this.parent) {
        this.localeTransform.x += deltaX
        this.localeTransform.y += deltaY
        this.restrictToParentBoundary()
      } else {
        this.transform.x = Math.round(this.transform.x + deltaX)
        this.transform.y = Math.round(this.transform.y + deltaY)
      }
    },
    restrictToParentBoundary() {
      let x = Math.max(this.minBoundary.minLeft, this.localeTransform.x)
      let y = Math.max(this.minBoundary.minTop, this.localeTransform.y)
      x = Math.min(this.minBoundary.maxLeft, x)
      y = Math.min(this.minBoundary.maxTop, y)
      this.transform.x = Math.round(x)
      this.transform.y = Math.round(y)
    },
    handleMouseUp(event) {
      document.removeEventListener('mousemove', this.handleMouseMove, false)
      document.removeEventListener('mouseup', this.handleMouseUp, false)
      document.removeEventListener('touchmove', this.handleMouseMove, false)
      document.removeEventListener('touchend', this.handleMouseUp, false)
      let ev = {
        drag: 'draggable',
        resize: 'resizable',
        rotate: 'rotatable',
      }
      this.isInitialRatio = false
      this[ev[this._handlerType]] && this.$emit(this._handlerType + '-end', event, this.transform)
    },
    handleMouseUpA(event) {
      document.removeEventListener('mousemove', this.handleMouseMoveA, false)
      document.removeEventListener('mouseup', this.handleMouseUpA, false)
      document.removeEventListener('touchmove', this.handleMouseMoveA, false)
      document.removeEventListener('touchend', this.handleMouseUpA, false)
      let ev = {
        drag: 'draggable',
        resize: 'resizable',
        rotate: 'rotatable',
      }
      this.isInitialRatio = false
      this[ev[this._handlerType]] && this.$emit(this._handlerType + '-end', event, this.transform)
    },
    handleResizeStart(event) {
      let type = event.target.dataset.resizetype
      let rect = this.transform
      let matrix = getPoints(rect)
      let pressAngle
      let opposite = matrix[pointMap[type]]
      let opp2 = matrix[pointMap2[type]]
      let { clientX, clientY } = event.touches ? event.touches[0] : event
      let x1 = clientX - this._parentRect.left - opp2.x
      let y1 = clientY - this._parentRect.top - opp2.y
  
      let _width = rect.width,
        _height = rect.height
      if (tr2bl[type]) {
        if (widthMap[type]) _height /= 2
        pressAngle = rad2deg(Math.atan2(_width, _height))
      } else {
        if (heightMap[type]) _width /= 2
        pressAngle = rad2deg(Math.atan2(_height, _width))
      }
      let startAngle = rad2deg(Math.atan2(y1, x1))
      this._resizeOpt = {
        matrix,
        rect,
        type,
        opposite,
        opp2,
        pressAngle,
        startAngle,
      }
    },
    handleResizeMove(event) {
      let { clientX, clientY } = event.touches ? event.touches[0] : event
      let { opposite, opp2, type, pressAngle, startAngle } = this._resizeOpt
      let x = clientX - this._parentRect.left - opp2.x,
        y = clientY - this._parentRect.top - opp2.y,
        dis = Math.hypot(y, x)
      let ratio = event.shiftKey || this.acceptRatio
      if (!this.isInitialRatio && ratio) {
        this.currentRatio = this.transform.width / this.transform.height
        this.isInitialRatio = true
      }

      if (!ratio) {
        this.isInitialRatio = false
      }

      let { w, h } = getSize({
        type,
        dis,
        x,
        y,
        startAngle,
        pressAngle,
      })
      let transform = Object.assign({}, this.transform)
      if (this.isInitialRatio) {
        if (widthMap[type]) h = w / this.currentRatio
        else w = h * this.currentRatio
      }
      w = Math.max(Math.round(w), this.minWidth)
      h = Math.max(Math.round(h), this.minHeight)
      if (widthMap[type] && !ratio) {
        transform.width = w
      } else if (heightMap[type] && !ratio) {
        transform.height = h
      } else {
        transform.width = w
        transform.height = h
      }

      let matrix = getPoints(transform)
      let _opp = matrix[pointMap[type]]
      let deltaX = -(_opp.x - opposite.x),
        deltaY = -(_opp.y - opposite.y)
      transform.x = Math.round(transform.x + deltaX)
      transform.y = Math.round(transform.y + deltaY)

      this.transform = transform
    },
    handleRotateStart(event) {
      let { clientX, clientY } = event.touches ? event.touches[0] : event
      let t = this.$refs.wrapper.getBoundingClientRect(),
        cx = t.left + t.width / 2,
        cy = t.top + t.height / 2,
        startAngle = (180 / Math.PI) * Math.atan2(clientY - cy, clientX - cx),
        rotation = this.transform.rotation
      this._rotateOpt = { cx, cy, startAngle, rotation }
    },
    handleRotateMove(event) {

      let { cx, cy, startAngle, rotation } = this._rotateOpt
      let { clientX, clientY } = event.touches ? event.touches[0] : event
      let x = clientX - cx,
         
        y = clientY - cy,
        angle = (180 / Math.PI) * Math.atan2(y, x),
        currentAngle = angle - startAngle,
        r = rotation + currentAngle

      r = r % 360
      r = r < 0 ? r + 360 : r
      this.transform.rotation = Math.floor(r)
      console.log("회전"+this._handlerType);
    },
   textBox_Add: function () {
					const addedForm = document.getElementById('textBox_Buttons') // getElementById : document 객체를 대상으로 해당 id 를 가진 요소 노드를 찾아 줍니다.
					const str = `<textarea type="text" class="textBox" cols="80" rows="15" placeholder="글을 입력해주세요." 
          name="done${this.textBox_count}" id="done${this.textBox_count}"
          style="top:${this.textBox_count*370+180}px;left:500px;font-size:15px;position: absolute; resize: both;"></textarea>
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
    textBox_Form: function () { // 나중에 서버로 글상자 데이터 보낼 때 밑의 코드 참고하기
          //   const fd = new FormData() // 폼 데이터 객체 생성
          //   for (let i = 0; i < this.textBox_count; i++) {
          //     const added = document.getElementById('done' + i)
          //     fd.append('done' + i, added.value) // append 폼 데이터 객체에 옮길 데이터 지정
          //   }
          //   console.log(fd)
          //   this.$axios.post('/api/create/textBox_Buttons', fd)
          //     .then((response) => {
          //       console.log(response.data)
          //       if (response.data === -1) {
          //         alert('Report Wrong!')
          //       }
          //       this.$router.push({ name: 'Success' })
          //     })
      }	
  },
   textChange_Style() { // 글자 폰트 변경
             document.getElementById('done${this.textBox_count}').style.fontFamily = this.selected;          
        },
           textChange_Size() { // 글자 크기 변경
           document.getElementById('done${this.textBox_count}').style.fontSize = this.selected;                 
        },
           textChange_Bold() { // 글자 굵기 변경
           document.getElementById('done${this.textBox_count}').style.fontWeight = this.selected;                
        },
}
</script>

<style scoped>
.test{
    width: 290px;
    height: 400px;
    top: 150px;
    left: 320px;
    position:fixed;
}
.test1{
    width: 290px;
    height: 400px;
    top: 150px;
    left: 640px;
    position: fixed;
}
.test2{
    width: 290px;
    height: 400px;
    top: 150px;
    left: 960px;
    position: fixed;
}
.test3{
    width: 290px;
    height: 400px;
    top: 150px;
    left: 1280px;
    position: fixed;
}
.test4{
    width: 290px;
    height: 400px;
    top: 600px;
    left: 320px;
    position: fixed;
}
.test5{
    width: 290px;
    height: 400px;
    top: 600px;
    left: 640px;
    position: fixed;
}
.test6{
    width: 290px;
    height: 400px;
    top: 600px;
    left: 960px;
    position: fixed;
}
.test7{
    width: 290px;
    height: 400px;
    top: 600px;
    left: 1280px;
    position: fixed;
}
.Left{
    width: 100px;
    height: 200px;
    top: 480px;
    left: 100px;
    position: fixed;
}
.Right{
    width: 100px;
    height: 200px;
    top: 480px;
    left: 1625px;
    position: fixed;

}
.MenuButton{
    top: 0px;
    left:0px;
    position: fixed;
}
.tittle{
   position: absolute;
    height: 30px;
    width: 150px;
    top: 30px;
    left: 60px;
  background-color: rgb(255, 255, 255);
  border: none;
   color: rgb(27, 27, 27);
  padding: 15px 15px;
  text-align:start;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 2px 2px;
  cursor: pointer;

   word-wrap: break-word;
}
.tittleText{
   position: absolute;
    height: 50px;
   width: 150px;
    top: 0px;
    left: 150px;
  background-color: rgb(255, 255, 255);
  border: none;
   color: rgb(27, 27, 27);
  padding: 15px 30px;
  text-align:start;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);

   word-wrap: break-word;
}
.titlleImgButton{
   position: absolute;
    height: 30px;
   width: 30px;
    top: 100px;
    left: 70px;
  background-color: rgb(255, 196, 0);
  border: none;
   color: rgb(255, 255, 255);
  padding: 15px 15px;
  text-align:center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 2px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
  line-height: 0px; 
    display: flex;
  justify-content: center;
  align-items: center;
}
.TitlleImgBox{
   position: absolute;
    height: 30px;
   width: 310px;
    top: 50px;
    left: 70px;
  background-color: rgb(255, 255, 255);
  border: none;
   color: rgb(27, 27, 27);
  padding: 15px 30px;
  text-align:start;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
   word-wrap: break-word;
}
.fileImgButton{
   position: fixed;
    height: 300px;
   width: 30px;
    top: 130px;
    left: 70px;
}
.fileTextBox{
   position: absolute;
    height: 30px;
   width: 310px;
    top: 130px;
    left: 70px;
  background-color: rgb(255, 255, 255);
  border: none;
   color: rgb(27, 27, 27);
  padding: 15px 30px;
  text-align:start;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
   border: solid 2px rgb(0, 0, 0);
   word-wrap: break-word;
}
.button_Else{
    position: absolute;
    background-color: rgb(255, 196, 0);
    color: rgb(255, 255, 255);
    border: solid 2px rgb(0, 0, 0); 
 
}
.button_TextBox{
    position: absolute;
    background-color: rgb(102, 102, 102);
    color: rgb(255, 255, 255);
    border: solid 2px rgb(0, 0, 0);
}
.page__demo-group {
   top: 600px;
    left: 320px;
    margin-bottom: 16px;
   width: 100px; 
   position:fixed;
}

 .inputfile {
    /* top:50px; */
    left:150px;
    font-size:15px;
    width: auto;
    height: auto;
    position: absolute;
}
 .yoyoo-ddr {
    width: auto;
    height: auto;
    position: absolute;
}


.img {
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;   
}
.yoyoo-ddr .resize-handler,
.yoyoo-ddr .rotate-handler {
  display: none;
}

.yoyoo-ddr.active {
  border: 1px dashed #607d8b;
}

.yoyoo-ddr.active .resize-handler,
.yoyoo-ddr.active .rotate-handler {
  display: inline-block;
}

.resize-handler,
.rotate-handler {
  position: absolute;
  border: 1px solid #607d8b;
  background: #fff;
  box-sizing: border-box;
  border-radius: 50%;
}

.textBox_resize-handler,
.textBox_rotate-handler {
  position: absolute;
  border: 1px solid #607d8b;
  background: #fff;
  box-sizing: border-box;
  border-radius: 50%;
}
.resize-handler.tm {
  left: 50%;
}

.resize-handler.r {
  top: 50%;
}

.resize-handler.bm {
  left: 50%;
}

.resize-handler.l {
  top: 50%;
  cursor: pointer;
}

.rotate-handler {
  left: 50%;
  cursor: crosshair;
} 
.textBox_rotate-handler {
  left: 50%;
  cursor: crosshair;
} 
.textBox {
  position: absolute;
  resize: both;
  display: inline-block;
  text-overflow: ellipsis;
  overflow-y:scroll;
  white-space:normal;
  cursor : move;
}  
</style>

