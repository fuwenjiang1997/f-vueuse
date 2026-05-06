<template>
    <Layout title="历史记录">
        <input v-model="form.name" placeholder="姓名" />
        <input v-model="form.age" type="number" placeholder="年龄" />

        <div v-for="(item, index) in history" :key="index">
            {{ item }} - {{ index === currentIndex ? '当前' : '' }} {{ index }}
        </div>
        <button @click="undo" :disabled="!canUndo">撤销</button>
        <button @click="redo" :disabled="!canRedo">重做</button>
    </Layout>
</template>
<script setup lang="ts">
import { useRefHistory } from '@f-vueuse/core'
import { reactive } from 'vue'

import Layout from './Layout.vue';

const form = reactive({
    name: '',
    age: 0
})

const { history, canUndo, canRedo, undo, redo, currentIndex } = useRefHistory<typeof form>(form, { deep: true })
</script>
