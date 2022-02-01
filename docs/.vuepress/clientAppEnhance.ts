import {defineClientAppEnhance} from '@vuepress/client'
import * as components from "@wovosoft/wovoui";

// import * as components from "./../../../wovoui/src/index.js";

import * as icons from "@wovosoft/wovoui-icons";

export default defineClientAppEnhance(({app, router, siteData}) => {
    for (let component of Object.entries(components)) {
        app.component('W' + component[0], component[1]);
    }
    for (let icon of Object.entries(icons)) {
        app.component('Icon' + icon[0], icon[1]);
    }
});