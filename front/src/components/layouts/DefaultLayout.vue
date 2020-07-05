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
    <v-card
        class="d-flex pa-2"
        style="height:100px; background: #121212; margin: auto;"
    >
        <p style="font-size:3em; font-weight:bolder; margin:auto;">The Van</p>
    </v-card>
    <v-card
        class="d-flex pa-1"
        style="width:100%; background: #121212;"
    >
        <v-tabs color="#FFFFFF">
            <v-tab>Model</v-tab>
            <v-tab>319 Short Body</v-tab>
            <v-tab>519 Short Body</v-tab>
            <v-tab>519 Extra Long</v-tab>
            <v-tab>Location</v-tab>
            <v-tab>Contact</v-tab>
        </v-tabs>
    </v-card>
    <!-- 컨텐츠 영역 -->
    <v-main>
        <slot></slot>
    </v-main>
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
      }
    },
    methods: {
        clickSideMenu(name){
            this.$router.push({name: name, params: {}})
        }
    },
  }
</script>
