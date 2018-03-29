<template>
    <div class="v-hello">
        <ul><li class="v-hello__message">hello {{ message }}</li></ul>
    </div>
</template>

<script>
export default {
    name: 'v-hello',
    props: {
        message: String
    }
};
</script>