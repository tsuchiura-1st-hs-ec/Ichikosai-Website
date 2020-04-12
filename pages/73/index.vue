<template>
  <div class="body">
    <div id="header">
      <Header />
    </div>
    <div class="index">
      <img
        src="~/assets/73/Ichikosai_73_Logo_Formal_Cliped.svg"
        alt="Ichikosai_73_Logo_Formal_Cliped"
        class="Ichikosai_73_Logo_Formal_Cliped"
      />
      <div>
        <p id="date" class="time-and-date">
          2020.5.30 - 31
        </p>
        <p id="time" class="time-and-date">
          9:00 - 15:00
        </p>
      </div>
      <div class="sns-links">
        <a href="https://twitter.com/ichikosai">
          <img
            src="~/assets/73/Icon awesome-twitter@2x.png"
            alt="一高祭公式ツイッターアカウント"
            style="height: 26px; width: 32px;"
          />
        </a>
        <a href="https://www.facebook.com/IchikosaiOfficial">
          <img
            src="~/assets/73/Icon awesome-facebook@2x.png"
            alt="一高祭公式フェイスブックページ"
            style="height: 31px; width: 31px;"
          />
        </a>
        <a href="https://www.instagram.com/ichikosaiofficial/">
          <img
            src="~/assets/73/Icon awesome-instagram@2x.png"
            alt="一高祭公式インスタグラムアカウント"
            style="height: 28px; width: 28px;"
          />
        </a>
        <a href="https://lin.ee/a4YaDxe">
          <img
            src="~/assets/73/Icon awesome-line@2x.png"
            alt="一高祭ライン公式アカウント"
            style="height: 28px; width: 28px;"
          />
        </a>
      </div>
      <!-- <div>
        <h2>お知らせ</h2>
        <Post :posts="posts"></Post>
      </div> -->
    </div>
    <div>
      <img
        id="background-path-1"
        src="~/assets/73/path_1@2x.png"
        alt="背景の図形"
        class="background"
      />
      <img
        id="background-path-2"
        src="~/assets/73/path_2@2x.png"
        alt="背景の図形"
        class="background"
      />
    </div>
  </div>
</template>

<script>
// import Post from '~/components/73/Post.vue'
import Header from '~/components/73/header.vue'
// import { createClient } from '~/plugins/contentful.js'

// const client = createClient()

export default {
  components: {
    // Post,
    Header
  },
  // asyncData ({ env }) {
  //   return Promise.all([
  //     client.getEntries({
  //       'sys.id': env.CTF_PERSON_ID
  //     }),
  //     client.getEntries({
  //       content_type: env.CTF_BLOG_POST_TYPE_ID,
  //       order: '-sys.createdAt'
  //     })
  //   ])
  //     .then(([entries, posts]) => {
  //       return {
  //         person: entries.items[0],
  //         posts: posts.items
  //       }
  //     })
  //     .catch(console.error)
  // },
  head () {
    return {
      title: '一高祭 - 第73回茨城県立土浦第一高等学校文化祭',
      meta: [
        {
          name: '一高祭 - 第73回茨城県立土浦第一高等学校文化祭',
          content:
            '土浦一高の文化祭「一高祭」の公式ウェブサイトです。第73回のテーマは「青嵐」です。'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.body {
  height: 100vh;
}
.index {
  width: 100vw;
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}
.Ichikosai_73_Logo_Formal_Cliped {
  width: 303px;
  margin: 0 auto;
  display: block;
  margin-bottom: 54px;
}
.time-and-date {
  text-align: center;
  color: #85aa49;
}
.sns-links {
  margin-top: 54px;
  text-align: center;
}
.sns-links img {
  height: 28px;
  margin: 0 8px;
}
.background {
  position: fixed;
  background: 0% 0% no-repeat padding-box;
  z-index: -1;
  transform: translate(-50%, -50%);
}
#date {
  font-size: 26px;
  font: Regular 26px/30px SF Pro Display;
  padding-bottom: 3px;
}
#time {
  font-size: 22px;
  font: Regular 22px/30px SF Pro Display;
}
#header {
  position: absolute;
  top: 0px;
  z-index: 1;
}
#background-path-1 {
  top: 67%;
  left: 20%;
  width: 275px;
  height: 290px;
}
#background-path-2 {
  top: 40%;
  left: 80%;
  width: 202px;
  height: 232px;
}
</style>
