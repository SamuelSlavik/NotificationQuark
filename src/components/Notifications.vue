<script setup lang="ts">
// @ts-ignore
import { useNotificationStore } from "@/stores/notification-store";
// @ts-ignore
import Notification from "@/components/Notification.vue";

const notificationStore = useNotificationStore();

export type NotificationsProps = {
  position?: "bottom-right",
};
const props = defineProps<NotificationsProps>()

</script>

<template>
  <div
    v-if="notificationStore.notifications.length"
    class="n-quark "
    :class="'n-quark--' + props.position"
  >
    <Notification
      v-for="(notification, index) in notificationStore.notifications"
      :key="index"
      :identifier="notification.id"
      :type="notification.type"
      :message="notification.message"
      :index="index"
      :remove="notification.remove"
      :infinite="notification.infinite"
      :background="notification.background || ''"
      :color="notification.color || ''"
      :timeout="notification.timeout"
    >
    </Notification>
    <slot></slot>
  </div>
</template>

<style scoped>
.n-quark {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 1000;
}

.n-quark__notification {
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  background-color: black;
  color: #fff;

  display: flex;
  justify-content: space-between;
  gap: 1rem;

  > * {
    margin-top: auto;
    margin-bottom: auto;
  }
  > .n-quark__icon {
    height: 1rem;
    display: flex;
  }
}

.n-quark--top {
  top: 1rem;
  bottom: auto;
  left: 50%;
  transform: translateX(-50%);
  right: auto;
}
.n-quark--top-right {
  top: 1rem;
  bottom: auto;
  right: 1rem;
  left: auto;
}
.n-quark--top-left {
  top: 1rem;
  bottom: auto;
  left: 1rem;
  right: auto;
}
.n-quark--bottom {
  bottom: 1rem;
  top: auto;
  left: 50%;
  transform: translateX(-50%);
  right: auto;
}
.n-quark--bottom-right {
  bottom: 1rem;
  top: auto;
  right: 1rem;
  left: auto;
}
.n-quark--bottom-left {
  bottom: 1rem;
  top: auto;
  left: 1rem;
  right: auto;
}
.n-quark--left {
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  right: auto;
}
.n-quark--right {
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  left: auto;
}


.n-quark--information {
  background-color: #3498db;
}
.n-quark--success {
  background-color: #2ecc71;
}
.n-quark--error {
  background-color: #e74c3c;
}
.n-quark--warning {
  background-color: #f1c40f;
}
.n-quark--accent {
  background-color: #9b59b6;
}
.n-quark--neutral {
  background-color: #34495e;
}

</style>