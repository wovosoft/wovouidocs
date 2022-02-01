<script setup lang="ts">
import {useThemeLocaleData} from '../composables'

defineEmits(['toggle'])

const themeLocale = useThemeLocaleData()
</script>

<template>
    <div
        class="toggle-sidebar-button"
        :title="themeLocale.toggleSidebar"
        aria-expanded="false"
        role="button"
        tabindex="0"
        @click="$emit('toggle')">
        <span class="navbar-toggler-icon" aria-hidden="true"></span>
    </div>
</template>
