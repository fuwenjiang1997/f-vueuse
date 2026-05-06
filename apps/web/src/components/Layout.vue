<template>
    <div class="layout">
        <h2>{{ title }}</h2>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>

<style scoped>
.layout {
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;
}
</style>
