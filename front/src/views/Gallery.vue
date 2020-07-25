<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap style="padding:0px 20px 20px 20px;">
            <div class="content-container">
                <div class="content-layout" v-for="(item, index) in modelsItem" :key="index">
                        <v-card
                        color="grey lighten-4"
                        max-width="600"
                        @click="openLayer(item)"
                        >
                            <v-img
                                :aspect-ratio="16/9"
                                :src="item.image"
                            >
                                <div
                                    class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    <p style="font-size:3rem;">{{item.carModel}}</p>
                                </div>
                            </v-img>
                        </v-card>
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
            modelsItem : [
                {image: require('@/assets/2468.jpg'), carModel: '319 short body',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                },
                {image: require('@/assets/mainimg.png'), carModel: '519 short body',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                },
                {image: require('@/assets/ggg.jpg'), carModel: '519 long body',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                },
                {image: require('@/assets/2468.jpg'), carModel: '캠핑카',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                },
                {image: require('@/assets/3524.jpg'), carModel: '장외차량',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                },
                {image: require('@/assets/ggg.jpg'), carModel: '카니발 하이리무진',
                    imageArr: [
                        require('@/assets/2468.jpg'),
                        require('@/assets/mainimg.png'),
                        require('@/assets/ggg.jpg'),
                        require('@/assets/2468.jpg'),
                        require('@/assets/3524.jpg'),
                        require('@/assets/ggg.jpg')
                    ]
                }
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
</style>