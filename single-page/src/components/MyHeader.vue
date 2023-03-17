<script lang="ts" setup>
import { ArrowLeft, MoreFilled } from '@element-plus/icons-vue'
</script>
<template>
    <el-page-header :icon="ArrowLeft" class="header">
        <template #title>
            <span> 政策详情 </span>
        </template>
        <template #extra>
            <el-icon class="more-icon"><MoreFilled /></el-icon>
        </template>
    </el-page-header>
</template>
<style scoped>
.more-icon {
    transform: rotate(90deg);
}
</style>
