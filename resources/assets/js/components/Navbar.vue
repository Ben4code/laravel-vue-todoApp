<template>
    <div class="main-nav">

        <nav class="navbar navbar-expand-lg navbar-light bg-success white-text">
        <a class="navbar-brand" href="#">Todo App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav pull-right">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Welcome'}">Welcome</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'Tasks'}">Todos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name: 'About'}">About</router-link>
                </li>
            </ul>
            
        </div>
        </nav>

    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return {

        }
    }
}
</script>

<style>
    .navbar-light .navbar-nav .nav-link .nav-link a{
        color: #fff;

    }
    .router-link-exact-active{
        border: 1px solid #fff;
        border-radius: 20px;
        color: #fff;

    }
</style>
