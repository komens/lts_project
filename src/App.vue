<template>
  <div id="app" class="flyout">
    <my-modal />
    <tool-list/>
    <div class="main-menu">
      <transition name="fade" mode="out-in"><router-view></router-view></transition>
    </div>
    <WorkContainer />
    <div class="bottom">
      <BottomMenu />
      <DataConsole />
      <bottom-message />
    </div>
  </div>
</template>

<script>
import MyModal from './Pages/MyModal';
import ToolList from './Pages/ToolList';
import WorkContainer from './Pages/WorkContainer';
import BottomMenu from './Pages/BottomContent/BottomMenu'
import DataConsole from './Pages/BottomContent/DataConsole'
import BottomMessage from './Pages/BottomContent/BottomMessage'
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter } from 'mdbvue';

export default {
  name: 'app',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter,
    ToolList,
    WorkContainer,
    BottomMenu,
    DataConsole,
    BottomMessage,
    MyModal
  }
};

</script>

<style lang="less">
h1 {
  color:#fff;
}
* {
  margin: 0;
  padding: 0;
  user-select: none;
}
#app {
  width: 100%;
  height: 100%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.main-menu {
  background: #2e2e2e;
  min-height: 110px;
  transition: all .3s;
}
.bottom {
  background: #2e2e2e;
  position: fixed;
  width: 100%;
  left:0;
  bottom:0;
  min-height: 5rem;
}
</style>
