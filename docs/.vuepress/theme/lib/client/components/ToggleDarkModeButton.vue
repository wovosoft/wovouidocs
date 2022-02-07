<script setup lang="ts">
import {useDarkMode, useThemeLocaleData} from '../composables'
import { BrightnessHigh ,BrightnessHighFill } from "@wovosoft/wovoui-icons";
const themeLocale = useThemeLocaleData()
const isDarkMode = useDarkMode()

const toggleDarkMode = (): void => {
    isDarkMode.value = !isDarkMode.value
}
</script>

<template>
    <button
        class="toggle-dark-button"
        :title="themeLocale.toggleDarkMode"
        @click="toggleDarkMode">
        <BrightnessHighFill v-if="!isDarkMode"/>
        <BrightnessHigh v-else/>
    </button>
</template>
