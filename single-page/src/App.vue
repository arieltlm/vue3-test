<script setup lang="ts">
import MyHeader from './components/MyHeader.vue'
import SummaryContent from './components/SummaryContent.vue'
import DownloadHref from './components/DownloadHref.vue'
import FooterBox from './components/FooterBox.vue'
import ContentCard from './components/ContentCard.vue'
import type { contentItem, levelType } from './interface.d'
import { ref } from 'vue'

const href: string = 'http://www.baidu.com'
const hrefName: string = 'SGTG201902深规划资源规划[2019].docx'

const levelTypes = {
    高: 'danger',
    中: 'warning',
    低: 'success'
}

const contInit: contentItem[] = [
    {
        id: 1,
        paramTitle: '第1条(S3001)',
        level: '高',
        value: '为进一步规范我市拆除阶段假设公司计划开发一套全新的面向制造企业车间执行层的生产信息管理系统。为企业提供包括制造数据管理、计划与调度管理、生产调度管理、库存管理、质量管理、人力资源管理、工作中心/设备管理、工夹具管理、采购管理、成本管理、项目看板管理、生产过程控制、底层数据集成分析等功能'
    },
    {
        id: 2,
        paramTitle: '第2条(S3002)',
        level: '低',
        value: '为进一步规范我市拆除阶段假设公司计划开发一套全新的面向制造企业车间执行层的生产信息管理系统。为企业提供包括制造数据管理、计划与调度管理、生产调度管理、库存管理、质量管理、人力资源管理、工作中心/设备管理、工夹具管理、采购管理、成本管理、项目看板管理、生产过程控制、底层数据集成分析等功能'
    }
]
const content = ref(contInit)

const load = () => {
    const len = content.value.length
    if (len < 10) {
        content.value.push({
            id: len + 1,
            paramTitle: `第${len + 1}条(S3003)`,
            level: ['高', '中', '低'][Math.floor(Math.random() * 3)] as levelType,
            value: '为进一步规范我市拆除阶段假设公司计划开发一套全新的面向制造企业车间执行层的生产信息管理系统。为企业提供包括制造数据管理、计划与调度管理、生产调度管理、库存管理、质量管理、人力资源管理、工作中心/设备管理、工夹具管理、采购管理、成本管理、项目看板管理、生产过程控制、底层数据集成分析等功能'
        })
    }
}
</script>

<template>
    <header>
        <MyHeader />
    </header>
    <main v-infinite-scroll="load">
        <SummaryContent />
        <DownloadHref :href="href" :hrefName="hrefName" />
        <ContentCard :levelTypes="levelTypes" :content="content" :load="load" />
    </main>
    <footer>
        <FooterBox />
    </footer>
</template>
<style scoped>
header {
    padding: 16px;
    height: 3rem;
}
main {
    padding: 10px;
    height: calc(100% - 6rem);
    overflow: auto;
}
footer {
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    position: fixed;
    bottom: 0;
    background: white;
}
</style>
