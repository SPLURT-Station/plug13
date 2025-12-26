<script lang="ts" setup>
import { Ban } from 'lucide-vue-next';
const { pending, resetSessions } = useAccount();
</script>

<template>
  <Tooltip>
    <AlertDialog>
      <TooltipTrigger as-child>
        <AlertDialogTrigger as-child>
          <Button variant="outline" size="icon" :disabled="pending"><Ban class="w-4 h-4" /></Button>
        </AlertDialogTrigger>
      </TooltipTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. You will be logged out of your account on all devices, including this one. All sessions will become invalid.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction @click="resetSessions">End all sessions</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    <TooltipContent>End all sessions</TooltipContent>
  </Tooltip>
</template>

<style lang="scss" scoped>

</style>
