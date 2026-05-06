<template>
    <div style="display: flex;gap: 20px; flex-direction: column;">
        <TestUseRefHistory />
        <TestUseRefHistory2 />
        <TestThrottleFn />
        <TestUseDebounceFn />
    </div>
</template>
<script setup lang="ts">
import TestThrottleFn from './components/TestThrottleFn.vue'
import TestUseDebounceFn from './components/TestUseDebounceFn.vue'
import TestUseRefHistory from './components/TestUseRefHistory.vue'
import TestUseRefHistory2 from './components/TestUseRefHistory2.vue'
</script>
