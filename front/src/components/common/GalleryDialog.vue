<template>
  <v-row justify="center">
    <v-dialog v-model="isDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar>
          <v-btn icon @click="onClickClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{contents.carModel}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="pa-15">
           <v-carousel cycle height="1000" class="main_carousel1">
                <v-carousel-item
                v-for="(item,i) in contents.imageArr"
                :key="i"
                :src="item"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="600" class="main_carousel2">
                <v-carousel-item
                v-for="(item,i) in contents.imageArr"
                :key="i"
                :src="item"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="500" class="main_carousel3">
                <v-carousel-item
                v-for="(item,i) in contents.imageArr"
                :key="i"
                :src="item"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="400" class="main_carousel4">
                <v-carousel-item
                v-for="(item,i) in contents.imageArr"
                :key="i"
                :src="item"
                ></v-carousel-item>
            </v-carousel>
            <v-carousel cycle height="300" class="main_carousel5">
                <v-carousel-item
                v-for="(item,i) in contents.imageArr"
                :key="i"
                :src="item"
                ></v-carousel-item>
            </v-carousel>
        </div>
        <div style="padding: 0px 50px 100px 50px;">
          <v-card class="mx-auto pb-5" max-width="600">
            <v-card-title style="font-size:1.5rem; font-weight:bold;">{{contents.carModel}}</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="font-size:1.2rem;"><span style="float:left; font-weight:bold;">전장x전폭x전고(mm)</span><span style="float:right;">7367 x 2020 x 2705</span></v-card-text>
            <v-card-text style="font-size:1.2rem;"><span style="float:left; font-weight:bold;">축간거리(mm)</span><span style="float:right;">4325</span></v-card-text>
            <v-card-text style="font-size:1.2rem;"><span style="float:left; font-weight:bold;">차량 총 중량(kg)</span><span style="float:right;">5000</span></v-card-text>
            <v-card-text style="font-size:1.2rem;"><span style="float:left; font-weight:bold;">엔진 형식</span><span style="float:right;">OM642 V6</span></v-card-text>
            <v-card-text style="font-size:1.2rem;"><span style="float:left; font-weight:bold;">엔진 최고출력(ps)</span><span style="float:right;">190</span></v-card-text>
            <v-card-text style="font-size:1.2rem;"><span style="float:left; font-weight:bold;">엔진 최대토크(nm)</span><span style="float:right;">440</span></v-card-text>
            <v-card-text style="font-size:1.2rem;"><span style="float:left; font-weight:bold;">총 배기량(cc)</span><span style="float:right;">2987</span></v-card-text>
            <v-card-text style="font-size:1.2rem;"><span style="float:left; font-weight:bold;">구동방식</span><span style="float:right;">후륜</span></v-card-text>
            <v-card-text style="font-size:1.2rem;"><span style="float:left; font-weight:bold;">변속기</span><span style="float:right;">7G-TRONIC</span></v-card-text>
            <v-card-text style="font-size:1.2rem;"><span style="float:left; font-weight:bold;">연료탱크(L)</span><span style="float:right;">93</span></v-card-text>
          </v-card>
        </div>
      </v-card>
    </v-dialog>
  </v-row>





<!-- 

  <v-row justify="center">
    <v-dialog v-model="isDialog" persistent max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bolder">{{contents.carModel}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
                <div style="width: 50%; float:left; text-align:center;">
                        <v-card
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >
                            <v-img
                                :aspect-ratio="4/3"
                                :src="contents.src"
                                style="cursor:pointer;"
                            >
                            </v-img>
                        </v-card>
                </div>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onClickClose()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row> -->
</template>

<script>
  export default {
    props: {
      isDialog : {
        type: Boolean
      },
      contents : {
        type: Object,
      }
    },
    data () {
      return {
        items: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            sodium: 87,
            calcium: '14%',
            iron: '1%',
          }
        ]
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
      onClickClose(){
        this.$emit('dialogResult')
      }
    },
  }
</script>
<style scoped>
</style>