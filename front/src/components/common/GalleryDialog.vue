<template>
  <v-row justify="center">
    <v-dialog v-model="isDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark>
          <v-btn icon dark @click="onClickClose()">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{contents.carModel}}</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <div class="image-layout">
          <v-card
          class="mx-auto"
          color="grey lighten-4"
          >
              <v-img
                  :aspect-ratio="4/3"
                  :src="contents.src"
                  style="cursor:pointer;"
              >
              </v-img>
          </v-card>
        </div>
        <div class="text-layout">
          <h2>{{contents.carModel}}</h2>
          <div style="margin-top: 30px">
            <p>독일 다임러 AG 산하의 메르세데스-벤츠에서 1995년부터 생산 중인 세미보닛 타입 LCV 제품군. 차량총중량(GVW) 3 ~ 5톤 사이를 담당하는 라인업으로 투어러 모델부터 패널밴, 크류밴, 카고트럭, 기타특장 모델 등 다양한 분야에서 광범위하게 운용하고 있다. 차량의 세부 모델 구분은 세자리 숫자로 이루어지는데 앞의 한자리는 차량총중량(단위/톤), 뒤의 두자리는 엔진출력(단위/10마력[1])을 뜻한다(예: 스프린터 319 → 차량총중량 3톤, 190마력 모델).</p>
          </div>
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
.image-layout {
    width: 50%;
    float:left;
    padding: 100px;
}
.text-layout {
    width: 50%;
    float: right;
    padding: 100px;
}
</style>