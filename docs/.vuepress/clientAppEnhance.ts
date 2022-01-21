import {defineClientAppEnhance} from '@vuepress/client'
// import * as components from "@wovosoft/wovoui";
import * as components from "./../../../wovoui";

export default defineClientAppEnhance(({app, router, siteData}) => {
    for (let component of Object.entries(components)) {
        app.component('W' + component[0], component[1]);
    }
});