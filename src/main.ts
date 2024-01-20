import Notifications from './components/Notifications.vue';
import { useNotificationStore } from './stores/notification-store';
import { createPinia } from "pinia"; // Import the store using useNotificationStore

export default {
    install: (app: any, options: any) => {
        // Use Pinia
        const pinia = createPinia();
        app.use(pinia);

        // Create the store instance within the app's context
        const notificationStore = useNotificationStore();

        // Expose the Pinia store instance globally
        app.provide('notificationStore', notificationStore);

        app.component('Notifications', Notifications);
    }
};