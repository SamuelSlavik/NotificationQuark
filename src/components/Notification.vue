<script setup lang="ts">
// @ts-ignore
import { useNotificationStore } from "@/stores/notification-store";
import { onMounted, ref, defineProps, watch } from "vue";

const notificationStore = useNotificationStore();

export type NotificationProps = {
  message: string;
  index: number;
  type: string;
  remove: boolean;
  infinite: boolean;
  timeout: number;
  identifier: string;
  background?: string;
  color?: string;
};
const props = defineProps<NotificationProps>();

onMounted(() => {
  const identifier = props.identifier;

  if (!props.infinite) {
    setTimeout(() => {
      notificationStore.removeNotification(identifier);
    }, props.timeout);
  }
});
</script>

<template>
  <div :style="'background-color: ' + props.background + '; color: ' + props.color + ';'"
    class="n-quark__notification"
   :class="'n-quark--' + props.type"
  >
    {{ props.message }}
    <div
        v-if="props.remove"
        class="n-quark__icon"
        @click="notificationStore.removeNotification(props.identifier)"
    >
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1rem" height="1rem" viewBox="0 0 256 256">
        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M7,4c-0.25587,0 -0.51203,0.09747 -0.70703,0.29297l-2,2c-0.391,0.391 -0.391,1.02406 0,1.41406l7.29297,7.29297l-7.29297,7.29297c-0.391,0.391 -0.391,1.02406 0,1.41406l2,2c0.391,0.391 1.02406,0.391 1.41406,0l7.29297,-7.29297l7.29297,7.29297c0.39,0.391 1.02406,0.391 1.41406,0l2,-2c0.391,-0.391 0.391,-1.02406 0,-1.41406l-7.29297,-7.29297l7.29297,-7.29297c0.391,-0.39 0.391,-1.02406 0,-1.41406l-2,-2c-0.391,-0.391 -1.02406,-0.391 -1.41406,0l-7.29297,7.29297l-7.29297,-7.29297c-0.1955,-0.1955 -0.45116,-0.29297 -0.70703,-0.29297z"></path></g></g>
      </svg>
    </div>
  </div>
</template>

<style>

</style>