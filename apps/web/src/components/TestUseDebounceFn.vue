<template>
    <Layout title="防抖">
        <input type="text" v-model="inputValue" @input="debouncedSearch" placeholder="防抖搜索" />
        <div>
            <p>搜索内容：{{ inputValue }}</p>
            <p>防抖触发：{{ debounceCount }} 次</p>
        </div>
    </Layout>
</template>
<script setup lang="ts">
import { useDebounceFn } from '@f-vueuse/core'
import { ref } from 'vue'

import Layout from './Layout.vue'

const inputValue = ref('')
const debounceCount = ref(0)

const debouncedSearch = useDebounceFn((value: string) => {
    debounceCount.value++
}, 500)
</script>
