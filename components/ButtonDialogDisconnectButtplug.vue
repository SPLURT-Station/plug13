<script lang="ts" setup>
import { X } from 'lucide-vue-next';
const { connected, disconnect } = useButtplug();
</script>

<template>
  <AlertDialog>
    <AlertDialogTrigger as-child>
      <Button variant="outline" size="sm" :disabled="!connected">
        <X class="w-4 h-4 mr-2" />
        <span>Disconnect</span>
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Disconnect from Intiface Central</AlertDialogTitle>
        <AlertDialogDescription>
          Disconnecting will stop all connected devices and the game will no longer be able to interact with them.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction @click="disconnect">Disconnect</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>

<style lang="scss" scoped>

</style>
