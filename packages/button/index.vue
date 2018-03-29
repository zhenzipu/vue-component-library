<template>
    <div class="v-hello">
        button {{ message }}
    </div>
</template>

<script>
export default {
    name: 'v-button',
    props: {
        message: String
    }
};
</script>