<template>
    <div class="welcome container">
        <br><br>
        <div class="jumbotron bg-success white-text">
            <h1 class="display-4">Welcome to this Laravel and Vue SPA</h1>
            <p class="lead">This is a simple Vuejs SPA support by a laravel api backend.</p>
            <hr class="my-4 ">
            <p>- It uses Laravel's awesome resource api.</p>
            <p>- It functions as a single page application.</p>
            <p>- It uses Axios library to fetch api endpoint.</p>
            <p class="lead">
                <router-link class="btn btn-danger btn-lg" :to="{name: 'Tasks'}">Explore the application</router-link>
                
            </p>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>
.welcome{
    color: #fff;
    text-align: center;
}

</style>
