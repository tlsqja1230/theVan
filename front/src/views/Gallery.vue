<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap style="padding:0px 20px 20px 20px;">
            <div class="content-container">
                <div class="content-layout" v-for="(items, index) in itemArr" :key="index">
                    <v-carousel show-arrows-on-hover height="400">
                        <v-carousel-item
                        @click="openLayer(item)"
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                        ></v-carousel-item>
                    </v-carousel>
                </div>
            </div>
            <GalleryDialog @dialogResult="dialogResult" :isDialog="isDialog" :contents="selItem"></GalleryDialog>
        </v-layout>
    </v-container>
</template>
<script>
import GalleryDialog from '@/components/common/GalleryDialog.vue'
export default {
    name: 'Gallery',
    components: {
        GalleryDialog
    },
    props: {
    },
    watch: {
    },
    computed: {
    },
    data() {
        return {
            itemArr : [
                [
                    { src: require('@/assets/7.jpeg'), carModel: '319 short body'},
                    { src: require('@/assets/2468.jpg'), carModel: '319 short body'},
                    { src: require('@/assets/3524.jpg'), carModel: '319 short body'},
                    { src: require('@/assets/mainimg.png'), carModel: '319 short body'},
                ],
                [
                    { src: require('@/assets/8.jpeg'), carModel: '519 short body'},
                    { src: require('@/assets/ggg.jpg'), carModel: '519 short body'},
                    { src: require('@/assets/3524.jpg'), carModel: '519 short body'},
                    { src: require('@/assets/mainimg.png'), carModel: '519 short body'},
                ],
                [
                    { src: require('@/assets/9.jpeg'), carModel: '519 long body'},
                    { src: require('@/assets/ggg.jpg'), carModel: '519 long body'},
                    { src: require('@/assets/3524.jpg'), carModel: '519 long body'},
                    { src: require('@/assets/mainimg.png'), carModel: '519 long body'},
                ],
                [
                    { src: require('@/assets/3524.jpg'), carModel: '캠핑카'},
                    { src: require('@/assets/2468.jpg'), carModel: '캠핑카'},
                    { src: require('@/assets/7.jpeg'), carModel: '캠핑카'},
                    { src: require('@/assets/mainimg.png'), carModel: '캠핑카'},
                ],
                [
                    { src: require('@/assets/mainimg.png'), carModel: '장외차량'},
                    { src: require('@/assets/8.jpeg'), carModel: '장외차량'},
                    { src: require('@/assets/ggg.jpg'), carModel: '장외차량'},
                    { src: require('@/assets/3524.jpg'), carModel: '장외차량'},
                ],
                [
                    { src: require('@/assets/ggg.jpg'), carModel: '카니발 하이리무진'},
                    { src: require('@/assets/9.jpeg'), carModel: '카니발 하이리무진'},
                    { src: require('@/assets/3524.jpg'), carModel: '카니발 하이리무진'},
                    { src: require('@/assets/mainimg.png'), carModel: '카니발 하이리무진'},
                ]
            ],
            isDialog: false,
            selItem: {}
        }
    },
    beforeRouteEnter (to, from, next) {
        next()
    },
    created() {
    },
    mounted() {
    },
    updated() {
    },
    methods: {
        openLayer(item){
            this.isDialog = true
            this.selItem = item
        },
        dialogResult(){
            this.isDialog = false
        }
    },
}
</script>
<style scoped>
.content-container {
    width: 100%;
}
.content-layout {
    width: calc(100%/3);
    padding: 5px;
    float:left;
}
@media ( max-width: 1100px ) {
    .content-layout {
        width: auto;
        float: none;
    }
}
</style>