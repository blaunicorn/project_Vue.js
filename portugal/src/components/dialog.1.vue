<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover"  v-if="isShow" @click="closeMyself"></div>
      <transition name="drop">
        <div class="dialog-content"  v-if="isShow">
          <p class="dialog-close" @click="closeMyself">x</p>
          <slot>empty</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transform:scale(1);
  -webkit-transform:scale(1);
  -moz-transform:scale(1) ; 
  -o-transform:scale(1); 
  transition: all 1s ease;
  -moz-transition: all 1s ease-in;
	-webkit-transition: all 1s ease-in;
	-o-transition: all 1s ease-in;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(100px);
}
.drop-leave-active {
  transform: translateY(100px);
}

.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
}
.dialog-cover {
  background: #000;
  opacity: .6;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 80%;
  position: fixed;
  max-height: 80%;
  overflow: auto;
  background: #fff;
  top: 20%;
  left: 10%;
  margin-left: -5%;
  z-index: 10;
  border: 2px solid #464068;
  padding: 2%;
  line-height: 1.6;
}
.dialog-close {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>
