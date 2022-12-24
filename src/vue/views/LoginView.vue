<template>
  <div class="login">
    <el-input v-model="name" placeholder="账号" clearable />
    <el-input v-model="password" type="password" placeholder="密码" show-password />
    <el-alert :style="{display: elAlert.display}" :title='`${elAlert.title}, ${count} ${elAlert.suffix}`' :type='elAlert.type' />
    <el-button @click="doLogin" type="primary">登陆</el-button>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login {
  width: 60%;
}
.el-input:nth-child(2) {
  margin-top: 20px;
}
.el-alert {
  margin-top: 20px;
}
.el-button {
  width: 100%;
  margin-top: 20px;
}
</style>

<script lang="ts">
import { ref, defineComponent, reactive } from "vue"
import { join } from "path"

interface AlertType {
  display: string
  title: string
  type: string
  suffix: string
}

export default defineComponent({

  setup () {
    const count = ref(3)
    const name = ref("")
    const password = ref("")
    const elAlert = reactive<AlertType>({
      display: "none",
      title: "",
      type: "",
      suffix: ""
    })

    function updateAlert (display: string, title: string, type: string, suffix: string) {
      elAlert.display = display
      elAlert.title = title
      elAlert.type = type
      elAlert.suffix = suffix
    }

    function sleep (seconds: number) {
      return new Promise(resolve => setTimeout(resolve, seconds * 1000))
    }

    async function countDown () {
      while (count.value > 0) {
        await sleep(1)
        count.value--
      }
    }

    async function doLogin () {
      if (name.value === "admin" && password.value === "123456") {
        updateAlert("block", "登陆成功", "success", " 秒后跳转至软件界面.")
        await countDown()
        window.electronAPI.setSize(1440, 900)
        window.electronAPI.setTitle("Settings Page")
        window.location.hash = "#/settings"
      } else {
        updateAlert("block", "登陆失败", "error", " 秒后关闭软件.")
        await countDown()
        window.close()
      }
    }

    return { name, password, count, elAlert, doLogin }
  }

})

</script>
