<template>
    <v-container grid-list-xl fluid>
        <v-layout row wrap style="padding:0px 20px 20px 20px;">
            <div class="company-layout" style="">
                <div class="company-intro-layout">
                    <v-img
                        :src="require('@/assets/company.jpg')"
                        height="400"
                    >
                    </v-img>
                    <div style="margin-top:50px;">
                        <h4>벤츠 스프린터 공식 바디빌더 더밴 입니다.</h4>
                        <h4>주식회사 더밴은 국내 최초 벤츠 스프린터 바디빌더로</h4>
                        <h4>더밴의 창의적인 기술을 적용 다양한 스프린터를</h4>
                        <h4>1:1 고객 맞춤형으로 100% 수제작 생산합니다.</h4>
                        <h4>국내 최대 판매량과 전시장을 보유 중이며 최고의 A/S 서비스를 제공해드립니다.</h4>
                    </div>
                </div>
                <div style="margin-top:100px;">
                    <h1>찾아오시는 길</h1>
                </div>
                <div id="map" class="kakao-map-layout">
                </div>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Company',
    components: {
    },
    props: {
    },
    watch: {
    },
    computed: {
    },
    data() {
        return {
        }
    },
    beforeRouteEnter (to, from, next) {
        next()
    },
    created() {
    },
    mounted() {
        window.kakao && window.kakao.maps ? this.initMap() : this.addScript(); 
    },
    updated() {
    },
    methods: {
        initMap() { 
            var container = document.getElementById('map');
            var options = {
                center: new kakao.maps.LatLng(37.462839,127.102867),
                level: 3
            };
            var map = new kakao.maps.Map(container, options);
            // 마커가 표시될 위치입니다 
            var markerPosition  = new kakao.maps.LatLng(37.462839,127.102867);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                position: markerPosition
            });

            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);

            var iwContent = '서울특별시 강남구</br>헌릉로570길 32-2'
            var iwPosition = new kakao.maps.LatLng(37.462839,127.102867); //인포윈도우 표시 위치입니다

            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                position : iwPosition, 
                content : iwContent 
            });
            
            // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
            infowindow.open(map, marker); 
        }, 
        addScript() { 
            const script = document.createElement('script'); 
            /* global kakao */ 
            script.onload = () => kakao.maps.load(this.initMap);
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=c827dc690f5c395979eaf6d1678a93a5&autoload=false';
            document.head.appendChild(script); 
        }

    },
}
</script>
<style scoped>
</style>