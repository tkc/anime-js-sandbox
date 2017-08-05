<template>
    <div id="app">
        <anime></anime>
    </div>
</template>

<script>
    import anime from './components/Anime.vue'
    export default {
        name: 'app',
        components: {
            anime,
        },
    }
</script>

<style>

    body {
        background-color: #1c1c2f;
    }

    .action {
        margin: 10px;
        display: flex;
        padding: 20px;
    }

    .action .preview {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
    }

    .action .setting {
        padding: 20px;
        width: 60%;
    }

    .el {
        width: 30px;
        background: #d61e77;
        height: 30px;
        margin: 0 auto;
    }

    .parameter {
        width: 100%;
        display: flex;
    }

    .param-name {
        padding: 20px;
        color: #fff;
        width: 10%;
    }

    .param-value {
        padding: 20px;
        color: #fff;
        width: 60%;
    }

    .referrer {
        width: 100%;
        display: flex;
    }

    .referrer-name {
        padding: 20px;
        color: #fff;
        width: 100%;
    }

</style>
