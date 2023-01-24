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

function themeToggle() {
  console.log('themeToggle');
  // if html tag has attribute theme-mode, remove it, else add it
  if (document.documentElement.hasAttribute('theme-mode')) {
    document.documentElement.removeAttribute('theme-mode');
  } else {
    document.documentElement.setAttribute('theme-mode', 'dark');
  }
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
          <img width="136" class="logo" src="src\assets\logos\logo450_160-nbg.png" alt="logo" @click="goToRoot"
            :style="{cursor:'pointer'}" />
        </template>
        <template #operations>
          <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="tips" @click="themeToggle" /></a>
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
            <!-- <t-submenu title="列表项" value="2-1">
              <template #icon>
                <t-icon name="server" />
              </template>
              <t-menu-item value="2-1-1">基础列表项</t-menu-item>
              <t-menu-item value="2-1-2">卡片列表项</t-menu-item>
              <t-menu-item value="2-1-3">筛选列表项</t-menu-item>
              <t-menu-item value="2-1-4">树状筛选列表项</t-menu-item>
            </t-submenu> -->
            <t-menu-item value="2-2">
              <template #icon>
                <t-icon name="root-list" />
              </template>
              Contacts
            </t-menu-item>
            <t-menu-item value="2-3">
              <template #icon>
                <t-icon name="code" />
              </template>
              Placement Code
            </t-menu-item>
            <t-menu-item value="2-4">
              <template #icon>
                <t-icon name="tools" />
              </template>
              APIs
            </t-menu-item>
          </t-menu-group>
          <t-menu-group title="Email">
            <!-- <t-submenu title="列表项" value="2-1">
              <template #icon>
                <t-icon name="server" />
              </template>
              <t-menu-item value="2-1-1">基础列表项</t-menu-item>
              <t-menu-item value="2-1-2">卡片列表项</t-menu-item>
              <t-menu-item value="2-1-3">筛选列表项</t-menu-item>
              <t-menu-item value="2-1-4">树状筛选列表项</t-menu-item>
            </t-submenu> -->
            <t-menu-item value="3-2">
              <template #icon>
                <t-icon name="server" />
              </template>
              Services
            </t-menu-item>
            <t-menu-item value="3-3">
              <template #icon>
                <t-icon name="queue" />
              </template>
              Templates
            </t-menu-item>
            <t-menu-item value="3-4">
              <template #icon>
                <t-icon name="history" />
              </template>
              History
            </t-menu-item>
          </t-menu-group>
          <t-menu-group title="More">
            <t-menu-item value="item3">
              <template #icon>
                <t-icon name="setting" />
              </template>
              Settings
            </t-menu-item>
            <t-menu-item value="item4">
              <template #icon>
                <t-icon name="user" />
              </template>
              Profile
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
        <t-footer class="footer">
          <a href="https://github.com/yuenci" target="_blank" class="footer-link">Copyright @ {{
            new Date().getFullYear()
          }} Yuenci. All
            Rights Reserved</a>
        </t-footer>
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

.footer {
  text-align: center;
  padding: 5px !important;
}

.footer-link {
  color: #999;
  font-size: 12px;
  text-decoration: none;
}
</style>