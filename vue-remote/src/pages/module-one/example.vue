<script setup lang="ts">
import { ref } from 'vue'
import { monoProvide, monoCookie } from 'mono-utils/runtime'
import {monoOdataFetch } from 'mono-utils/fetching'

definePage({
  meta: {
    layout: 'home',
    title: 'Example'
  }
})
const user = ref<any[]>([])

monoProvide({
  key: 'user:send',
  syncRef: user,
  immediate: false,
  resetOnUnmount: false,
})

const kirimDataKeHost = () => {
  user.value = [
    {
      name: 'User 1',
    },
  ]
}

const cookie = monoCookie().get('ESW_token', true)

const dataBrand = ref<any[]>([])

const dataPost = ref<any[]>([])

let fetchingBrand = async () => {
  const {data: getBrand } = await monoOdataFetch({
    configBaseUrl: 'myOdata',
    url: '/DTO_Brand', 
    type: 'data',
    options: {
      key: 'Id',
      select: ['Id', 'Nama'],
      sort: [
        {
          selector: 'Id',
          desc: true,
        }
      ]
    }
  })

  dataBrand.value = getBrand

}

// let fetchingPost = async () => {
//   const response = await monoFetch('/posts',  {
//     baseUrl: 'https://jsonplaceholder.typicode.com',
//     method: 'GET',
//   })

//   dataPost.value = response.all

// }

</script>
<template>
  <div>

    <button @click="fetchingBrand()">
      Fetching Brand
    </button>

     <!-- <button @click="fetchingPost()">
      Fetching Post
    </button> -->

    {{ dataBrand }}

    {{ dataPost }}


  {{ cookie }}

    Ini di dalam kamar, update


    <button @click="kirimDataKeHost()">
      Tombolll
    </button>

  </div>
</template>