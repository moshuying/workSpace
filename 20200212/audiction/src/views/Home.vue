<!--
 * #Author :墨抒颖
 * #Date :2020-02-12 16:22:22
 * #LastEditTime  :2020-02-12 20:24:38
 * #LastEditors   :墨抒颖
 * #Github :https://github.com/moshuying
 * #Gitee :https://gitee.com/moshuying
 * #Blogs :http://sfau.lt/bPbzVVJ
 * #Description :墨抒颖
 -->
<template>
  <div class="main">
    <div class="nav">
      <div class="menu">
        <span @click="query('all')"><a href="#">全部</a></span>
        <span @click="query('经验')"><a href="#">经验</a></span>
        <span @click="query('职位')"><a href="#">职位</a></span>
        <span @click="query('面试')"><a href="#">面试</a></span>
        <span @click="query('其他')"><a href="#">其他</a></span>
      </div>
      <div class="post">
        <span>发帖</span>
      </div>
    </div>
      <list :data="value"  v-for="(value,ix) in listdata" :key="ix"/>
    <router-view></router-view>
  </div>
</template>

<script>
import list from '@/components/List.vue'
import { getList } from '@/api/home.js'
export default {
  name: 'Home',
  components: {
    list
  },
  data  () {
    return {
      listdata: []
    }
  },
  async mounted () {
    await this.query()
  },
  methods: {
    async query (el) {
      this.listdata = (await getList({ type: el })).data
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
  width: 100%;
  .nav{
    width: 80%;
    height: 3rem;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #fff;
    margin: 1px auto 1px auto;
    display: flex;
    justify-content: space-between;
    .menu{
      height: 100%;
      width: 17rem;
      padding: 0 0 0 2rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span{
        display: inline-block;
        min-width: 4rem;
        cursor: pointer;
        &:hover{
          color: #ff5246;
        }
      }
    }
    .post{
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 1rem;
      span{
        cursor:pointer;
        min-width: 6.7rem;
        min-height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        border-radius: 10px;
        background-color: #ff5246;
      }
    }
  }
}
</style>
