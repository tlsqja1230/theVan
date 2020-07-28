<template>
<v-app id="inspire">
    <!-- 사이드 네비게이션 영역 -->
    <!-- <v-navigation-drawer
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
    >
        <v-list dense>
            <template v-for="item in items">
                <v-row
                    v-if="item.heading"
                    :key="item.heading"
                    align="center"
                >
                    <v-col cols="6">
                        <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <a href="#!" class="body-2 black--text">EDIT</a>
                    </v-col>
                </v-row>
                <v-list-group
                    v-else-if="item.children"
                    :key="item.text"
                    v-model="item.model"
                    :prepend-icon="item.model ? item.icon : item['icon-alt']"
                    append-icon=""
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(child, i) in item.children"
                        :key="i"
                        link
                    >
                        <v-list-item-action v-if="child.icon">
                        <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                        <v-list-item-title>
                            {{ child.text }}
                        </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item
                v-else
                :key="item.text"
                link
                @click="clickSideMenu(item.name)"
                >
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                        {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer> -->
    <div
        class="d-flex pa-2"
        style="height:100px; margin: auto;"
    >
        <img src="@/assets/thevan.jpeg" style="width:200px">
    </div>
    <v-tabs show-arrows centered class="mb-1" color="dark" style="">
        <v-tab @click="routePage('Model','modelTitle')">모델</v-tab>
        <v-tab @click="routePage('Gallery')">갤러리</v-tab>
        <!-- <v-tab @click="routePage('Customizing')">커스터마이징</v-tab> -->
        <v-tab @click="routePage('Showroom')">전시장</v-tab>
        <v-tab @click="routePage('Model','boardApplyTitle')">시승신청</v-tab>
        <v-tab @click="routePage('Model','contactTitle')">문의</v-tab>
        <v-tab @click="routePage('Serivce')">서비스센터</v-tab>
        <v-tab @click="routePage('Company')">회사소개</v-tab>
    </v-tabs>
    <!-- 컨텐츠 영역 -->
    <v-main>
        <slot></slot>
    </v-main>

    <!-- footer영역 -->
    <v-footer
        dark
        padless
        class="mt-15"
    >
        <v-card
        flat
        tile
        class="lighten-1 white--text text-center"
         style="width:100%;"
        >
            <v-card-text class="white--text pt-5">
                대표자: 최영문 | 위치: 서울특별시 강남구 헌릉로570길32-2 아이디타워<br>
                전화번호: 1899-0260 | 사업자등록번호: 102-81-29767<br>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>copyright© TheVan</strong>
            </v-card-text>
        </v-card>
    </v-footer>       
</v-app>
</template>
<script>
  export default {
    name: 'DefaultLayout',
    components:{
    },
    props: {
    },
    data(){
      return {
        drawer: false,
        items: [
            { icon: 'mdi-contacts', text: 'Dashboard', name: 'Dashboard' },
            { icon: 'mdi-contacts', text: 'Main', name: 'Main' },
        //   { icon: 'mdi-content-copy', text: 'Duplicates' },
        //   {
        //     icon: 'mdi-chevron-up',
        //     'icon-alt': 'mdi-chevron-down',
        //     text: 'Labels',
        //     model: true,
        //     children: [
        //       { icon: 'mdi-plus', text: 'Create label' },
        //     ],
        //   },
        //   {
        //     icon: 'mdi-chevron-up',
        //     'icon-alt': 'mdi-chevron-down',
        //     text: 'More',
        //     model: false,
        //     children: [
        //       { text: 'Import' },
        //       { text: 'Export' },
        //       { text: 'Print' },
        //       { text: 'Undo changes' },
        //       { text: 'Other contacts' },
        //     ],
        //   },
        //   { icon: 'mdi-settings', text: 'Settings' },
        //   { icon: 'mdi-message', text: 'Send feedback' },
        //   { icon: 'mdi-help-circle', text: 'Help' },
        //   { icon: 'mdi-cellphone-link', text: 'App downloads' },
        //   { icon: 'mdi-keyboard', text: 'Go to the old version' },
        ],
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
      }
    },
    methods: {
        clickSideMenu(name){
            this.$router.push({name: name, params: {}})
        },
        routePage(pageName, moveId){
            let location = ""
            if(this.$route.name === 'Model' && moveId){
                location = document.querySelector(`#${moveId}`).offsetTop;
                window.scrollTo({top:location, behavior:'smooth'});
            }else{
                this.$router.push({name: pageName, params: {isMenu: true, moveId:moveId}})
            }
        }
    },
  }
</script>
