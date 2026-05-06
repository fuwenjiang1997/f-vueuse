<template>
    <Layout title="节流">
        <button @click="throttleClick('大佬')">1s节流 - 点击我</button>
        <div>
            <p>点击了{{ list.length }} 次</p>
        </div>
    </Layout>
</template>
<script setup lang="ts">
import { useThrottleFn } from 'fj-vueuse-core'
import { ref } from 'vue'

import Layout from './Layout.vue'


const list = ref<number[]>([])
const throttleClick = useThrottleFn((name: string) => {
    list.value.push(1)
}, 1000)


</script>
