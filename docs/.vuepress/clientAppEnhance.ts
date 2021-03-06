import {defineClientAppEnhance} from '@vuepress/client'
import * as components from "@wovosoft/wovoui";
// import * as components from "./../../../wovoui/src/index";

import * as icons from "@wovosoft/wovoui-icons";


export default defineClientAppEnhance(async ({app, router, siteData}) => {
    for (let component of Object.entries(components)) {
        app.component('W' + component[0], component[1]);
    }
    for (let icon of Object.entries(icons)) {
        app.component('Icon' + icon[0], icon[1]);
    }
});