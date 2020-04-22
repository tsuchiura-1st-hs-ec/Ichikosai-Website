<template>
  <div class="body">
    <div id="header">
      <Header />
    </div>
    <div class="index">
      <div class="eye-catch">
        <div class="eye-catch-items">
          <img
            src="~/assets/73/Ichikosai_73_Logo_Formal_Cliped.svg"
            alt="Ichikosai_73_Logo_Formal_Cliped"
            class="Ichikosai_73_Logo_Formal_Cliped"
          />
          <div>
            <p id="date" class="time-and-date">
              新型コロナウィルスの感染拡大を受け<br>本年度の一高祭は中止となりました｡
            </p>
            <div class="school-link">
              <a href="http://www.tsuchiura1-h.ibk.ed.jp/">
                茨城県立土浦第一高等学校ウェブサイト ＞
              </a>
            </div>
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
        </div>
      </div>
      <div class="about">
        <h2>
          <span class="text-seiran">
            <span class="text-sei">青</span>
            <br>
            <span class="text-ran">嵐</span>
          </span>
        </h2>
        <p>
          茨城県立土浦第一高等学校の文化祭である一高祭は、今年73回目を迎えます。テーマには爽やかな青春を象徴する「青嵐」を採用し、一高祭当日を迎えるために委員一同が準備に勤しんでいます｡
        </p>
        <a href="http://www.tsuchiura1-h.ibk.ed.jp/">
          茨城県立土浦第一高等学校ウェブサイト ＞
        </a>
      </div>
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
import '@/assets/fonts/Ro_Shino_Std_M.js'

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
.eye-catch {
  height: 100vh;
  width: 100vw;
}
.eye-catch-items {
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  text-align: center;
}
.school-link {
  padding-top: 10px;
}
.Ichikosai_73_Logo_Formal_Cliped {
  width: 303px;
  margin: 0 auto;
  display: block;
  margin-bottom: 54px;
}
.time-and-date {
  text-align: center;
  font-feature-settings: "palt";
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
.about {
  text-align: center;
  background-color: #83A749;
  padding: 50px;
  color: white;
  background: linear-gradient(124deg, #83A749, #479F17, #179F7F, #239B68, #4EB297);
  background-size: 1800% 1800%;
  animation: rainbow 18s ease infinite;
}
.about h2 {
  color: inherit;
  text-align: center;
  font-size: 60px;
  font-family: ro-shino-std,serif;
  font-weight: 400;
  font-style: normal;
  font-feature-settings: palt;
  text-shadow: 0 0 10px white;
  letter-spacing: 5rem;
  padding-left: 5rem;
  padding-bottom: 50px;
  line-height: 50px;
  mix-blend-mode: luminosity;
}
.text-sei {
  padding-right: 50px;
}
.text-ran {
  padding-left: 50px;
}
.about p {
  font-feature-settings: "palt";
  text-align: justify;
  text-justify: inter-ideograph;
  margin-bottom: 30px;
}
.about a {
  color: white;
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
  position: sticky;
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
@keyframes rainbow {
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
</style>
