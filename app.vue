<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import type { Customer } from '@/types/customer'

const store = useCounterStore()
const customer: Customer = {
  name: 'Lala',
  country: 'Russia'
}
</script>
<template>
  <div>
    <div class="mt-9 font-contentFont text-5xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repudiandae illo error
      recusandae necessitatibus mollitia maxime, perferendis et sequi distinctio.
    </div>
    <el-button @click="ElMessage('hello')">button</el-button>
    <button @click="store.increment" class="rounded-md bg-light-green p-2">Увеличить число</button>
    <div>Полученное число: {{ store.count }} {{ customer }}</div>
  </div>
</template>
