import DefaultTheme from "vitepress/theme";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import About from "./components/About.vue";
import MyLayout from "./components/MyLayout.vue";
import Type from './components/Type.vue'
import "./custom.scss";
import "./variable.scss"
export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp ({ app, router, siteData }) {
    // register global components
    app.component("Archives", Archives);
    app.component("Tags", Tags);
    app.component("About", About);
    app.component("Type", Type);
    // app is the Vue 3 app instance from createApp()
    // router is VitePress' custom router (see `lib/app/router.js`)
    // siteData is a ref of current site-level metadata.
  },
};