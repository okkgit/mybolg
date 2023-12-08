import * as Icons from '@element-plus/icons-vue';
import { defineClientConfig } from '@vuepress/client';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

declare const VERSION: string;

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus);
    for (const icon in Icons) {
      app.component('ElIcon' + icon, Icons[icon]);
    }
    // provide global variables in all markdown
    Object.defineProperties(app.config.globalProperties, {
      $version: { get: () => VERSION },
    });
  },
  setup() {
    // ...
  },
  rootComponents: [
    // ...
  ],
});
