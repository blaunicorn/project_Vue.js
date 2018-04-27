<!--分页实验 -->
<template>
  <div class="tTable container body-content">
    <form method="post" action="/upload" enctype="multipart/form-data">
      <input type="text" name="name" value="" placeholder="请输入用户名">
      <input type="text" name="age" value="" placeholder="请输入年龄">
      <input type="file" name="uploadFile">
      <input type="submit" value="提交">
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      age: '',
      file: ''
    }
  },
  methods: {
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    submitForm(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('age', this.age);
      formData.append('file', this.file);

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      this.$aixos.post('/upload', formData, config).then(function (res) {
        if (res.status === 2000) {
          /*这里做处理*/
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
/*  激活时的字体颜色 */
.active {
  color: #42b983;
}
</style>
