# Notification Quark

This quark is a simple vue plugin with notification component and added sparkles in the form of a store 
that handles the behaviour. <br/> It is a simple notification system that can be used
to display messages to the user on plethora events happening in your app.

## Installation

```sh
npm install notification-quark --save
```

## Setup
main.js
```js
//...
import Notifications from "notification-quark"
import "notification-quark/dist/style.css"

//...
const app = createApp(App)
//...

app.use(Notifications)
```
First step is to import the quark and its styles in the main javascript file
and use it as a plugin in your app.

<br/>


App.vue
```vue
<script setup>
//...

</script>

<template>
  <!-- ... -->
  <Notifications />
</template>
```
Next step is to place the component whereever you want to display the
notifications in your app, for example in the top most container, in your App.vue

## Basic Usage

Component.vue
```vue
<script setup>
  //...
  import { inject } from 'vue'
  
  const notificationStore = inject('notificationStore') // Inject the store from the plugin

  // For example load success notification when the component is mounted
  onMounted(() => {
    notificationStore.addNotification({
      type: 'success', // type of notification, can be success, error, warning, information(default value)
      message: 'Component mounted successfully', // your message displayed to the user
      timeout: 3000 // optional custom lifespan of one notification, default is 5000ms
    })
  })
  
</script>

<template>
  <!-- ... -->
</template>
```
This will display success(greenish) notification with the message "Component mounted successfully" 
where you put the Notifications component in your app.

# Docs
Full docs at [https://www.quarksjs.com/library/notification-quark](https://www.quarksjs.com/library/notification-quark)

## 



