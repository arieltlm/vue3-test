<script setup lang="ts">
enum runStatusEnum{
    '等待中' = 0,
    '执行中',
    '完成'
}
const nowRunStatus:runStatusEnum = 1

const detailsDes = [
    {label:"政策文号",content:'深圳规划资源规（2019）1号'},
    {label:"发布机构",content:'深圳-市主管部门-归自局'},
    {label:"政策类型",content:'市职能部门规范性文件'},
    {label:"失效时间",content:'2090-12-31'},
]
</script>
<template>
    <el-card class="box-card" shadow="never" style="--el-card-padding:10px">
        <template #header>
            <div class="card-header">
                <div class="top">
                    <span>政策编码：sz-0000001</span>
                    <span :class="'run'+nowRunStatus"><span class="dot"></span>{{runStatusEnum[nowRunStatus]}} </span>
                </div>
                <div class="mid-title">
                    深规划资源规（2019）1号：深圳市拆除重建类城市更新单元规划容积率审查规定
                </div>
                <div class="time-block">
                    发布时间：2019-02-02
                </div>
                <div class="tags">
                    <el-tag effect="light">整体</el-tag>
                    <el-tag class="ml-5" effect="light">规划</el-tag>
                    <el-tag class="ml-5" effect="light">土地供应</el-tag>
                </div>
            </div>
        </template>
        <el-descriptions column="1">
            <Fragment v-for="item in detailsDes" :key="item.label">
                <el-descriptions-item :label="item.label+'：'" class-name="el-item" >{{item.content}}</el-descriptions-item>
            </Fragment>
        </el-descriptions>
    </el-card>
</template>
<style scoped lang="less"> 
    .box-card{
        .el-card_header{
            padding:1.2rem;
        }
        .card-header{
            .top{
                display: flex;
                justify-content: space-between;
                font-size: 0.8rem;
                span{
                    display: inline-block;
                }
                .dot{
                    width:5px;
                    height:5px;
                    margin-right:5px;
                    border-radius: 50%;
                    vertical-align: middle;
                }
                .run0{
                    color:orange ;
                    .dot{
                        background:orange;
                    }
                }
                .run1{
                    color:#67c23a;
                    .dot{
                        background:#67c23a;
                    }
                }
                .run2{
                    color:rgb(40, 40, 220);
                    .dot{
                        background:rgb(40, 40, 220);
                    }
                }
            }
            .mid-title{
                font-size:1rem;
                font-weight: 700;
                margin:0.5rem 0;
                line-height: 1.2;
            }
            .time-block{
                color:#ccc;
                font-size:0.8rem;
            }
        }
        
    }
</style>
