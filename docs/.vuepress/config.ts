import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
// @ts-ignore
import sidebar from "./sidebar";

const path = require('path');

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'en-US',
    title: 'wovoui',
    description: 'Bootstrap 5 & Vue 3 UI Components',
    // theme and its config
    theme: path.resolve(__dirname, './theme/lib/node/index.js'),
    // theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://github.com/wovosoft/wovouidocs',
        docsDir:"docs",
        docsBranch:"master",
        editLink:true,
        mainRepoBranch: 'master',
        sidebar,
        navbar: [
            // NavbarItem
            {
                text: 'WovoSoft',
                link: 'https://wovosoft.com',
            },
            // NavbarGroup
            // {
            //     text: 'Group',
            //     children: ['/group/foo.md', '/group/bar.md'],
            // },
            // // string - page file path
            // '/bar/README.md',
        ],
    },
    plugins: [],
});