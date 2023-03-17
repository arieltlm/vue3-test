<script setup lang="ts">
import type { contentItem } from '../interface.d'

defineProps<{
    content: contentItem[]
    levelTypes: any
    load: () => void
}>()
</script>

<template>
    <el-card class="content-box">
        <template #header>
            <h2 class="title">第一章 总则</h2>
        </template>
        <div v-for="item in content" :key="item.id" class="para">
            <div class="top">
                <h3>{{ item.paramTitle }}</h3>
                <el-tag effect="light" :type="levelTypes[item.level]"
                    >优先级：{{ item.level }}</el-tag
                >
            </div>
            <div class="cont">{{ item.value }}</div>
        </div>
    </el-card>
</template>
<style lang="less" scoped>
.title {
    text-align: center;
    font-weight: 800;
    font-size: 14px;
}
.para {
    margin-bottom: 1rem;
    .top {
        display: flex;
        justify-content: space-between;
        h3 {
            font-size: 1rem;
        }
    }
    .cont {
        margin: 0.5rem 0;
        color: #ccc;
        font-size: 0.8rem;
    }
}
</style>
