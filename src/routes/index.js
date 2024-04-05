import { createRouter, createWebHistory } from 'vue-router'

// 연결할 각 컴포넌트 import (src/views폴더 아래 컴포넌트들 생성해둠)
import MainPage from '../components/MainPage.vue'
import LoginPage from '../components/LoginPage.vue'

// 라우터 설계
const routes = [
    { path: '/main', component:MainPage},
    { path: '/login', component:LoginPage},
]

// 라우터 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}