<!--
 * #Author :墨抒颖
 * #Date :2020-02-12 16:39:04
 * #LastEditTime  :2020-02-12 18:31:53
 * #LastEditors   :墨抒颖
 * #Github :https://github.com/moshuying
 * #Gitee :https://gitee.com/moshuying
 * #Blogs :http://sfau.lt/bPbzVVJ
 * #Description :墨抒颖
 -->
<template>
  <div class="list">
    <div class="content">
      <div class="icon">
        <img :src="data.url" alt="">
      </div>
      <div class="info">
        <div class="name">
          <span><Strong> {{data.name}} </Strong></span>
          <span> {{data.time}} </span>
          <span v-for="(value,ix) in data.tag" :key="ix"> #{{value}} </span>
        </div>
        <div class="title">
          <span v-if="data.stick">
            <strong> 置顶 </strong>
          </span>
          <span><strong> {{data.title}} </strong></span>
        </div>
        <div class="text">
          <span>{{data.text}}</span>
        </div>
        <div class="listfooter">
          <span><i class="answer"></i> 回答 {{data.answer===0?'':data.answer}}</span>
          <span @click="setAnswer"><i class="addAnswer"></i> {{data.discuss===0?' 添加评论':' 评论 '+data.discuss}}</span>
          <span @click="setAgree"><i :class="agree?'userAgree':'agree'"></i> {{data.agree===0?'':' '+data.agree}}</span>
        </div>
        <answer v-if="answerDialog"/>
      </div>
    </div>
  </div>
</template>
<script>
import answer from '@/components/Answer.vue'
export default {
  name: 'List',
  components: {
    answer
  },
  props: {
    data: { type: Object, default: () => {} }
  },
  data () {
    return {
      agree: this.data.userAgree,
      answerDialog: false
    }
  },
  methods: {
    setAgree () {
      this.agree = !this.agree
    },
    setAnswer () {
      this.answerDialog = !this.answerDialog
    }
  }
}
</script>
<style scoped lang="scss">
@import '@/style/index.scss';
.answer{
  @include icon('/img/viewsIcons/edit-reply.png')
}
.addAnswer{
  @include icon('/img/viewsIcons/comment.png')
}
.agree{
  @include icon('/img/viewsIcons/good-gray.png')
}
.userAgree{
  @include icon('/img/viewsIcons/good-red.png')
}
.list{
  width: 100%;
  margin: 3px auto 3px auto;
  .content{
    width:80%;
    padding: 0.7rem;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 3px;
    display: flex;
    justify-content: space-between;
    div{
      padding: 0 0 0.6rem 0;
    }
    .icon{
      width: 4rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      img{
        width: 2rem;
        height: 2rem;
      }
    }
    .info{
      width: 100%;
      .name{
        font-size: 0.8rem;
        span:nth-child(1){
          color: black;
        }
        span:nth-child(2){
          padding-left: 1rem;
        }
        span:nth-child(3){
          padding-left: 1rem;
        }
      }
    }
    .title{
      display: flex;
      span{
        color: black;
        &:nth-child(1){
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 3rem;
          min-height: 1.4rem;
          color: #fff;
          font-size: 0.8rem;
          background-color: #ff5246;
          border-radius: 5px;
        }
        &:nth-child(2){
          padding: 0 0 0 0.5rem;
        }
      }
    }
    .text{
      font-size: 0.9rem;
      span{
        white-space: pre-wrap;
        width: 100%;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }
    }
    .listfooter{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span{
        height: 1.2rem;
        padding-right: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
