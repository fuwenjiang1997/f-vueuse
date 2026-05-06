<template>
    <Layout title="历史记录">
        <textarea v-model="content" rows="5" cols="50"></textarea>
        <div>
            <button @click="undo" :disabled="!canUndo">撤销</button>
            <button @click="redo" :disabled="!canRedo">重做</button>
            <button @click="clear">清空历史</button>
        </div>
        <div>历史记录数：{{ history.length }}</div>
    </Layout>
</template>
<script setup lang="ts">
import { useRefHistory } from '@fj/vueuse-core'
import { ref } from 'vue'

import Layout from './Layout.vue'

const content = ref('999')
const { history, canUndo, canRedo, undo, redo, clear } = useRefHistory(content)
</script>
