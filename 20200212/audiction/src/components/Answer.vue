<!--
 * #Author :墨抒颖
 * #Date :2020-02-12 18:27:46
 * #LastEditTime  :2020-02-12 20:41:57
 * #LastEditors   :墨抒颖
 * #Github :https://github.com/moshuying
 * #Gitee :https://gitee.com/moshuying
 * #Blogs :http://sfau.lt/bPbzVVJ
 * #Description :墨抒颖
 -->
<template>
  <div class="main">
    <div class="content">
      <div class="publish">
        <input type="text" v-model="text">
        <span @click="send">发布</span>
      </div>
      <div class="history">
        <div class="line" v-for="(value,ix) in data" :key="ix">
          <div class="left">
            <span><strong>{{value.name}}:</strong></span>
            <span>{{value.text}}</span>
          </div>
          <div class="right">
            <span>{{value.time}}</span>
          </div>
        </div>
        <div class="pagetap">
          <span @click="query(0)">首页</span>
          <span @click="query((ix-1)<=0?0:(ix-1))">上一页</span>
          <span v-for="(value,ix) in len" :key="ix" @click="query(ix)">{{ix+1}}</span>
          <span @click="query(ix+1)">下一页</span>
          <span @click="query(len.length)">尾页</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { queryAnswer, sendAnswer } from '@/api/home.js'
export default {
  props: {
    id: { type: String, default: '1' }
  },
  data () {
    return {
      text: '',
      data: [],
      len: [],
      ix: 0
    }
  },
  async mounted () {
    const res = (await queryAnswer({ id: '1' }))
    this.data = res.data
    this.len = new Array(res.len)
  },
  methods: {
    async send () {
      const res = await sendAnswer({ message: '1' })
      if (res.status === 200) {
        // this.$toast.success('发布成功')
      }
    },
    async query (ix) {
      console.log(ix)
      this.ix = ix
      this.data = (await queryAnswer({ id: ix })).data
    }
  }
}
</script>

<style scoped lang="scss">
.main{
  font-size: 0.8rem;
  width: 100%;
  border: 1px solid #d1d1d1;
  border-radius: 7px;
  .content{
    padding: 2rem 1rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .publish{
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      input{
        width: 100%;
        outline: none;
        border: 1px solid #d1d1d1;
        border-radius: 5px;
      }
      span{
        margin:  0 0 0 1rem;
        color: #fff;
        width: 7rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        cursor: pointer;
        background-color: #5fabff;
      }
    }
    .history{
      width: 100%;
      .line{
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #d1d1d1;
        .left{
          span{
            color: black;
            display: block;
          }
        }
      }
      .pagetap{
        margin-top: 1.4rem;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          height: 2rem;
          width: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-top:1px solid #d1d1d1;
          border-bottom: 1px solid #d1d1d1;
          border-left: 1px solid #d1d1d1;
          &:hover{
            background-color: #ff5246;
            color: white;
            border-color: #ff5246;
          }
          &:first-child{
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
          }
          &:last-child{
            border-right: 1px solid #d1d1d1;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
          }
          &:nth-child(2){
            width: 4rem;
          }
          &:nth-last-child(2){
            width: 4rem;
          }
        }
      }
    }
  }
}
</style>
