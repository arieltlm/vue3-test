<script setup lang="ts">
import { ChatLineSquare, Star, Stopwatch } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref('')
</script>
<template>
    <div class="footer-box">
        <div class="input-box">
            <el-input
                v-model="input"
                style="--el-input-border-radius: 1.5rem"
                placeholder="留下你的经验总结"
            />
        </div>
        <el-icon class="el-icon--right" :size="20"><ChatLineSquare /></el-icon>
        <el-icon class="el-icon--right" :size="20"><Star /></el-icon>
        <el-icon class="el-icon--right" :size="20"><Stopwatch /></el-icon>
    </div>
</template>
<style lang="less" scoped>
.footer-box {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px -1px 2px 0px #ebe7e7;

    .input-box {
        input {
            border-radius: 20px;
        }
    }
}
</style>
