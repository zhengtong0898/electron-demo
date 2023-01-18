<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWebSocket } from '@vueuse/core'

export default defineComponent({
  setup() {
    const useWebsocketOptions = {
      onConnected: (ws: WebSocket) => {
        console.log("ws 连接成功")
      },
      onDisconnected: (ws: WebSocket, event: CloseEvent) => {
        console.log("ws 连接断开")
      },
      onMessage: (ws: WebSocket, event: MessageEvent) => {
        console.log("ws 收到数据: ", event.data)
      },
      autoReconnect: {
          retries: 4800,
          delay: 3000,
          onFailed() {
            alert('Failed to connect WebSocket after 4800 retries')
          },
      },
    }

    const { status, data, send, open, close } = useWebSocket('ws://127.0.0.1:8081/ws', useWebsocketOptions)
    
    return { status }
  },
})
</script>
