<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/hello">hello</router-link>
        </li>
        <li>
          <router-link to="/button">button</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
};
</script>
