import { getPosts, getPostLength } from "./theme/serverUtils";

async function config() {
  return {
    lang: "zh-CN",
    title: "ooo",
    description: "ooo blog",
    head: [
      [
        "link",
        {
          rel: "icon",
          type: "image/jpeg",
          href: "/avator.jpg",
        },
      ],
      [
        "meta",
        {
          name: "author",
          content: "ooo",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: "Home",
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content: "ooo •ᴗ• blog",
        },
      ],
    ],
    themeConfig: {
      // repo: "clark-cui/homeSite",
      logo: "/avator.jpg",
      docsDir: "/",
      // docsBranch: "master",
      lastUpdated: false,
      posts: await getPosts(),
      pageSize: 5, //几个为一页
      postLength: await getPostLength(), //博客有几篇
      // algolia: {
      //   apiKey: "90a0bae6ff7307fb76896cbe2f975b0c",
      //   indexName: "clark-cui-docs",
      // },
      nav: [
        {
          // logo: '/home.svg',
          text: '首页',
          link: "/",
        },
        {
          text: "文章",
          link: "/archives",
        },
        {
          text: "分类",
          link: "/tags",
        },
        {
          text: "关于",
          link: "/about",
        },
        {
          text: "搜索",
          link: "",
        },
      ],
      //这里插入的是Emoji图片
      //侧边栏
      // sidebar: {
      //   "./posts/": false,
      //   "/": false,
      // },
      sidebar: false,
    },
  };
}
export default config();
