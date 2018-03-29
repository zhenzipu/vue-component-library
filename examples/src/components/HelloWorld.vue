
<template>
  <div class="hello">
    <Hello></Hello>
  </div>
</template>

<script>
import vui from '../../../src/index.js';
const { Hello } = vui;
export default {
    name: 'HelloWorld',
    components: {
        Hello
    }
};
</script>
