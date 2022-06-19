const siteConfig = {
    pullDic: { 0: "/navDown.svg", 1: "navUp.svg" },
    navList: [{
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
            text: "归档",
            // text: "文章",
            link: "/archives",
            icon: "/article.svg",
            pull: "-1",
            pullSrc: "",
            children: [
                // { id: "21", text: "标签", link: "/archives", icon: "/tag.svg" },
                // { id: "22", text: "分类", link: "/tags", icon: "/tagBlack.svg" },
                // { id: "23", text: "归档", link: "/archives", icon: "/tagBlack.svg" },
            ],
        },
        {
            id: "3",
            text: "分类",
            link: "/tags",
            icon: "/tag.svg",
            pull: "-1",
            pilSrc: '',
            // pullSrc: "/navDown.svg",
            children: [],
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
    author: '七夜的许愿星'
}

export default siteConfig