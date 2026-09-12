<script setup lang="ts">
import 'mono-helper/ui/select'
import 'mono-helper/ui/tag-input'
import { monoCreateFetcher } from 'mono-utils/fetching'
import type { DataSource } from 'mono-devextreme'


definePageMeta({
  layout: 'home',
  title: 'Home',
})


const ds = ref<DataSource | null>(null)
let fetch = async () => {

  const { dataSource } = await monoCreateFetcher({
    configBaseUrl: 'monoHostOData',
    url: '/DTO_Departmen'

  }).response({
    options: {
      paginate: true,
      pageSize: 5
    }
  })

  ds.value = dataSource

  console.log(dataSource)
}


onMounted(async () => {
  await fetch()
})


let reload = async () => {

  ds.value?.filter([
    ['Id', '=', 1],
    'or',
    ['Id', '=', 2]
  ])

  await ds.value?.load()
}

const current = ref()

let change = (e: any) => {
  current.value = e.detail.currentValue
}
</script>

<template>
  <div>

    home, update layout baru


    <button @click="reload()">fetch</button>


    {{ current }}
    <mono-select @mno-change="change" :data-source.prop="ds" load-more="scroll" key-value="Code"
      display-value="Nama"></mono-select>


  

  </div>
</template>
