<template>
  <v-row justify="center">
    <v-dialog v-model="emailDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline" style="font-weight:bold;">{{emailType === 'board'? '시승신청' : '문의하기'}}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row v-if="emailType === 'board'">
                <v-col cols="12" sm="6">
                    <v-text-field v-model="name1" label="이름" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="phoneNum1" label="연락처" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-menu
                    v-model="calendar"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="시승일자"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @input="calendar = false"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12">
                    <v-textarea v-model="message1" label="메시지를 입력하세요." required></v-textarea>
                </v-col>
            </v-row>
            <v-row v-if="emailType==='contact'">
                <v-col cols="12" sm="6">
                    <v-text-field v-model="name2" label="이름" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="email2" label="이메일" required></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field v-model="phoneNum2" label="연락처" required></v-text-field>
                </v-col>
                <v-col cols="12">
                    <v-textarea v-model="message2" label="메시지를 입력하세요." required></v-textarea>
                </v-col>
              </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onClickClose()">닫기</v-btn>
          <v-btn color="blue darken-1" text @click="onClickEmail()">제출하기</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: {
      emailDialog : {
        type: Boolean
      },
      emailType: {
        type: String
      }
    },
    data () {
      return {
            name1: "",
            email1: "",
            phoneNum1: "",
            carModel1: "",
            message1: "",
            name2: "",
            email2: "",
            phoneNum2: "",
            message2: "",

            date: new Date().toISOString().substr(0, 10),
            calendar: false,
      }
    },
    computed: {
    },
    watch: {
    },
    methods: {
      onClickClose(){
        this.$emit('closeEmailDialog')
      },
      onClickEmail(){

      }
    },
  }
</script>
<style scoped>
</style>