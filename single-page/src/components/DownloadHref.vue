<script setup lang="ts">
import { Download } from '@element-plus/icons-vue'
defineProps<{
    href: string
    hrefName: string
}>()
</script>
<template>
    <el-card class="href-card" shadow="never" style="--el-card-padding: 10px">
        <el-link :href="href" target="_blank" type="primary">
            {{ hrefName }}
            <el-icon class="el-icon--right"><Download /></el-icon>
        </el-link>
    </el-card>
</template>
<style scoped>
.href-card {
    margin: 0.5rem 0;
}
</style>
