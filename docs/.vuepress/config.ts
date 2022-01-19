import {defineUserConfig} from 'vuepress'
import type {DefaultThemeOptions} from 'vuepress'
// @ts-ignore
import sidebar from "./sidebar";

const {path} = require('@vuepress/utils')

export default defineUserConfig<DefaultThemeOptions>({
    // site config
    lang: 'en-US',
    title: 'wovoui',
    description: 'Bootstrap 5 & Vue 3 UI Components',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://github.com/wovosoft/wovouidocs',
        sidebar
    },
    plugins: [],
});