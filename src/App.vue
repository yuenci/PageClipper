<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue';

const router = useRouter()

function goToDashboard() {
  console.log('goToDashboard');
  router.push('/dashboard')
}

function goToHome() {
  console.log('goToHome');
  router.push('/home')
}

function goToRoot() {
  console.log('goToFirstPage');
  router.push('/')
}



const collapsed = ref(true);

const changeCollapsed = () => {
  collapsed.value = !collapsed.value;
};

const changeHandler = (active) => {
  console.log('change', active);
};

</script>

<!-- cursor: pointer; -->


<template>
  <t-layout>
    <t-header>
      <t-head-menu value="item1" height="120px">
        <template #logo>
          <img width="136" class="logo" src="src\assets\logos\logo450×160.png" alt="logo" @click="goToRoot"
            :style="{cursor:'pointer'}" />
        </template>
        <template #operations>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="home" /></a>
        </template>
      </t-head-menu>
    </t-header>
    <t-layout>
      <t-aside style="border-top: 1px solid var(--component-border)">
        <t-menu theme="light" default-value="item2" :collapsed="collapsed" height="550px" @change="changeHandler">
          <t-menu-group title="Main">
            <t-menu-item value="item1">
              <template #icon>
                <t-icon name="app" />
              </template>
              Dashboard
            </t-menu-item>
          </t-menu-group>
          <t-menu-group title="Form">
            <t-submenu title="列表项" value="2-1">
              <template #icon>
                <t-icon name="server" />
              </template>
              <t-menu-item value="2-1-1">基础列表项</t-menu-item>
              <t-menu-item value="2-1-2">卡片列表项</t-menu-item>
              <t-menu-item value="2-1-3">筛选列表项</t-menu-item>
              <t-menu-item value="2-1-4">树状筛选列表项</t-menu-item>
            </t-submenu>
            <t-menu-item value="2-2">
              <template #icon>
                <t-icon name="edit-1" />
              </template>
              表单项
            </t-menu-item>
            <t-menu-item value="2-3">
              <template #icon>
                <t-icon name="root-list" />
              </template>
              详情页
            </t-menu-item>
            <t-menu-item value="2-4">
              <template #icon>
                <t-icon name="check" />
              </template>
              结果页
            </t-menu-item>
          </t-menu-group>
          <t-menu-group title="Email">
            <t-submenu title="列表项" value="2-1">
              <template #icon>
                <t-icon name="server" />
              </template>
              <t-menu-item value="2-1-1">基础列表项</t-menu-item>
              <t-menu-item value="2-1-2">卡片列表项</t-menu-item>
              <t-menu-item value="2-1-3">筛选列表项</t-menu-item>
              <t-menu-item value="2-1-4">树状筛选列表项</t-menu-item>
            </t-submenu>
            <t-menu-item value="2-2">
              <template #icon>
                <t-icon name="edit-1" />
              </template>
              表单项
            </t-menu-item>
            <t-menu-item value="2-3">
              <template #icon>
                <t-icon name="root-list" />
              </template>
              详情页
            </t-menu-item>
            <t-menu-item value="2-4">
              <template #icon>
                <t-icon name="check" />
              </template>
              结果页
            </t-menu-item>
          </t-menu-group>
          <t-menu-group title="More">
            <t-menu-item value="item3">
              <template #icon>
                <t-icon name="user" />
              </template>
              个人页
            </t-menu-item>
            <t-menu-item value="item4">
              <template #icon>
                <t-icon name="login" />
              </template>
              登录页
            </t-menu-item>
          </t-menu-group>
          <template #operations>
            <t-button class="t-demo-collapse-btn" variant="text" shape="square" @click="changeCollapsed">
              <template #icon><t-icon name="view-list" /></template>
            </t-button>
          </template>
        </t-menu>
      </t-aside>
      <t-layout>
        <t-content>
          <router-view />
        </t-content>
        <t-footer>Copyright @ 2019-{{ new Date().getFullYear() }} Tencent. All Rights Reserved</t-footer>
      </t-layout>
    </t-layout>
  </t-layout>
</template>


<style scoped>
.logo {
  margin-left: 20px;
  width: 200px;
  height: 60px;
  position: relative;
  bottom: 2px;
}
</style>