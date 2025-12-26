<script lang="ts" setup>
const { openOauth2Page } = useAccount();
</script>

<template>
  <Card class="max-w-sm">
    <CardHeader>
      <CardTitle>Account Login</CardTitle>
      <CardDescription>To continue, you need to log in to your account</CardDescription>
    </CardHeader>
    <CardContent>
      <Button @click="openOauth2Page()" class="w-full">Login with Discord</Button>
    </CardContent>
  </Card>
</template>

<style lang="scss" scoped></style>
