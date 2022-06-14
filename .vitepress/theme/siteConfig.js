const siteConfig = {
   pullDic: { 0: "/navDown.svg", 1: "navUp.svg" },
   navList: [
    {
      id: "1",
      text: "首页",
      link: "/",
      icon: "/home.svg",
      pull: "-1",
      pullSrc: "",
      children: [],
    },
    {
      id: "2",
      text: "文章",
      link: "/archives",
      icon: "/article.svg",
      pull: "0",
      pullSrc: "/navDown.svg",
      children: [
        { id: "21", text: "标签", link: "/archives", icon: "/tag.svg" },
        { id: "22", text: "分类", link: "/archives", icon: "/tag.svg" },
        { id: "23", text: "归档", link: "/archives", icon: "/tag.svg" },
      ],
    },
    {
      id: "3",
      text: "分类",
      link: "/tags",
      icon: "/tag.svg",
      pull: "0",
      pullSrc: "/navDown.svg",
      children: [
        { id: "31", text: "标签x", link: "/archives", icon: "/tag.svg" },
        { id: "32", text: "分类x", link: "/archives", icon: "/tag.svg" },
        { id: "33", text: "归档x", link: "/archives", icon: "/tag.svg" },
      ],
    },
    {
      id: "4",
      text: "关于",
      link: "/about",
      icon: "/about.svg",
      pull: "-1",
      pullSrc: "",
      children: [],
    },
    //   { text: "", link: "", icon: "/search.svg", child: [] },
  ],
  author: ''
}

export default siteConfig