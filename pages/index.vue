<template>
  <div>
    <p>Home Page</p>

    <NuxtLink to="/Other">
      Other page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  middleware: 'pageMiddleware',
  fetch() {
    console.log("fetching in index");
  },
}
</script>
