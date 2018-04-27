<template>
  <div >
  <div class="container">
     <header>
       <div class="row">
         <div id="logo">
           <a href=""><img src="static/img/logo.png"></a>
         </div><!--/logo-->
         <div class="col nav">
           <a href="">Venerável Mestre Xuecheng</a>
           <a href="">Templo Longquan</a>
           <a href="">Intercâmbios Internacionais</a>
           <a href="">Galeria de Fotos</a>
           <a href="">Vídeos</a>
         </div>
       </div>
     </header>
  </div><!--/container-->

  <!--中间主体内容-->
  <div id="main"  class="container">
       <div class="bread"> 
        Venerável Mestre Xuecheng / A Mensagem
       </div>
       <div class="title">
         <i class="red-icon"></i>
          A Mensagem
         <i class="green-icon"></i>
       </div>

       <div class="feedback">
         <form action="" method="post">
                <div class="form-group">
                  <label for="exampleInputEmail1">Caixa de correio：</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" >
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Resumo de temas：</label>
                  <input type="temas" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" v-model="title">
                </div>
                <div class="form-group">
                  <label>O conteúdo Da Mensagem：</label>
                  <div class="card">

                      <textarea  class="card-body" cols ="10" rows="12" style= "overflow-y:auto; font-size:0.9em;" v-model="content" 
                       placeholder="    No entanto, a gente ainda considerava-lhe o candidato mais
adequado. O Venerável Mestre Yiran, o abade aposentado, junto  do 
Venerável Yanlian, dirigiu ao Templo Fahai e conseguiu persuadir o 
Mestre a retornar.Assim, no oitavo dia do segundo mês do calendário 
lunar (15 de março) de 1989, a inauguração foi realizada. O Mestre 
Xuecheng, de apenas 23 anos, assumiu o comando deste templo 
prestigioso. Ele ficava o mais jovem abade com o mais alto nível de 
escolaridade nos templos do budismo Han.Durante o seu mandato 
como Abade, o Mestre perseverava nos seus estudos. Ele defendeu a 
sua dissertação de pós-graduação com sucesso e obteve.">
                    </textarea>

                  </div>
                </div>
                <div class="text-center mt-4">
                <!-- <button type="submit" class="btn btn-primary submit-btn" >Enviar</button> -->
                <input type="button" class="btn btn-primary submit-btn" v-on:click= "postMessage"  value ="Enviar"   />
                </div>
          </form>
          <br>
         <div   v-if = "issuccess" class="alert alert-success alert-dismissable">
            <button type="button" class="close" data-dismiss="alert"
                    aria-hidden="true">
                &times;
            </button>
            提交成功!
        </div> 
        <div v-if ="isfail" class="alert alert-danger alert-dismissable">
            <button type="button" class="close" data-dismiss="alert"
                    aria-hidden="true">
                &times;
            </button>
            {{extension_error_msg}}！请进行更改。
        </div>
       </div><!--/feedback-->




  </div><!--/main-->
  <!--中间主体内容结束-->

  <footer>
    <div class="container">
      <div class="row">
        <div class="col-auto mr-auto">
           <img class="footer_logo" src="static/img/footer_logo.png" />
        </div>
        <div class="footer_info col-auto">
          Anschrift:<br />
          Longquansi Str.27,<br /> 
          Fenghuangling,<br /> 
          Bezirk Haidian, 100194 Beijing, China<br />
E-mail: lqtc@vip.163.com
        </div>
      </div>
    </div>
  </footer>

  <div id="share">
    <a href=""><img src="static/img/wechat.png" /></a>
    <a href=""><img src="static/img/weibo.png" /></a>
    <a href=""><img src="static/img/email.png" /></a>
    <a href=""><img src="static/img/share.png" /></a>
  </div>


  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      email: '',
      title: '',
      content: '',
      issuccess: false,
      isfail: false,
      extension_error_msg: ''
    }
  },
  methods: {
    postMessage () {
      let that = this
            console.log(this.email,this.title,this.content)
      let params = {
        email: this.email,
        title: this.title,
        content: this.content
      }
      console.log(qs.stringify(params))
      this.$axios.post(this.GLOBAL.API + '?r=message/post-message',
        qs.stringify(params)).then(function (response) {
          if (response.data.result === 'OK') {
            that.issuccess = true
            that.isfail = false
            console.log(response.data)
            that.email = ''
            that.title = ''
            that.content = ''
          }  else if (response.data.result === 'ERROR') {  
              console.log(response.data)
              that.issuccess = false
              that.isfail = true
              that.extension_error_msg = response.data.extension_error_msg
            }  
        })  
    } 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
