import {
    defineStore
} from 'pinia';
import { ref, computed } from 'vue';

export type NotificationItem = {
    id: string;
    message: string;
    type: NotificationType;
    remove: boolean;
    infinite: boolean;
    timeout: number;
    background: string;
    color: string;
}
enum NotificationType {
    information = "information",
    success = "success",
    warning = "warning",
    error = "error",
    accent = "accent",
    neutral = "neutral",
}

export type Options =  {
    message: string;
    type: NotificationType;
    timeout?: number;
    infinite?: boolean;
    remove?: boolean;
    background?: string;
    color?: string;
}

export const useNotificationStore = defineStore('notification', () => {
    const notifications = ref<NotificationItem[]>([]);
    const addNotification = (
      {
        message = "Lorem Ipsum",
        type = NotificationType.information,
        timeout = 5000,
        infinite = false,
        remove = false,
        background = "",
        color= "",
      }: Options
    ) => {
        let id: string = self.crypto.randomUUID()
        notifications.value.push({id, message, type, remove, infinite, timeout, background, color});
    };

    const removeNotification = (id: string) => {
        const foundNotification = notifications.value.find(notification => notification.id === id);

        if (foundNotification) {
            const index = notifications.value.indexOf(foundNotification);
            notifications.value.splice(index, 1);
        }
    };

    const currentNotifications = computed(() => notifications.value);

    return {
        notifications: currentNotifications,
        addNotification,
        removeNotification,
    };
});
