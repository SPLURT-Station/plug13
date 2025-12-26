<script lang="ts" setup>
import { Loader2 } from 'lucide-vue-next';
</script>

<template>
  <Card class="max-w-sm">
    <CardHeader>
      <CardTitle class="flex flex-row items-center gap-2"><Loader2 class="animate-spin h-4 w-4" /> Please wait...</CardTitle>
      <CardDescription>Loading account information</CardDescription>
    </CardHeader>
  </Card>
</template>

<style lang="scss" scoped></style>
