/**
 * @Author :墨抒颖
 * @Date :2020-02-12 19:33:36
 * @LastEditTime :2020-02-12 20:25:56
 * @LastEditors :墨抒颖
 * @Github :https://github.com/moshuying
 * @Gitee :https://gitee.com/moshuying
 * @Blogs :http://sfau.lt/bPbzVVJ
 * @Description :墨抒颖
 */
import Mock from 'mockjs'
function getkey (url) {
  if (!url.split('?')[1]) return {}
  const data = {}
  const query = url.split('?')[1].split('&')
  for (let i = 0; i < query.length; i++) {
    const key = query[i].split('=')
    data[key[0]] = key[1]
  }
  return data
}
const api = [
  {
    path: /\/getList[\s\S]*?/,
    type: 'get',
    fn: function (el) {
      const data = []
      const { type } = getkey(el.url)
      data.push({
        id: 1233121,
        url: '/img/viewsIcons/careertu.png',
        name: '职途官方',
        time: '2019/10/24 18:03:38',
        tag: ['其他'],
        stick: true,
        title: '【职图求职论坛】上线公告',
        text:
            '各位用户:\n大家好!\n职图作为北美专业的广告科技和数据分析的职业教育平台,致力于高效的学习课程和独家定制的求职方案,帮助学员迅速掌握行业知识和...',
        answer: 0,
        discuss: 0,
        agree: 10,
        userAgree: false
      })
      for (let i = 0; i < Mock.mock('@integer(15,20)'); i++) {
        data.push({
          id: Mock.mock('@integer(111111,897866)'),
          url: Mock.Random.pick(['/img/viewsIcons/careertu.png', '/img/viewsIcons/student.png']),
          name: Mock.mock('@cname'),
          time: Mock.Random.date('yyyy-MM-dd HH:mm:ss'),
          tag: type ? [type] : ['其他'],
          stick: true,
          title: Mock.mock('@cparagraph'),
          text: Mock.mock('@cparagraph'),
          answer: Mock.mock('@integer(1,999)'),
          discuss: Mock.mock('@integer(1,999)'),
          agree: Mock.mock('@integer(1,999)'),
          userAgree: false
        })
      }
      return {
        status: 200,
        message: 'ok',
        data
      }
    }
  },
  {
    path: /\/queryAnswer[\s\S]*?/,
    type: 'get',
    fn: function (el) {
      const len = Mock.mock('@integer(1,5)')
      const data = []
      for (let i = 0; i < len; i++) {
        data.push({
          name: Mock.mock('@cname'),
          text: Mock.mock('@cparagraph'),
          time: Mock.Random.date('yyyy-MM-dd HH:mm:ss')
        })
      }
      return {
        status: 200,
        message: 'ok',
        data,
        len
      }
    }
  },
  {
    path: /\/sendAnswer[\s\S]*?/,
    type: 'get',
    fn: {
      status: 200,
      message: 'ok'
    }
  }
]

api.forEach(el => {
  Mock.mock(el.path, el.type, el.fn)
})
Mock.setup({
  timeout: '200 - 400'
}) // Mock响应模板
