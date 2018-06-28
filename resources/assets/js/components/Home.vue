<template>
    <div class="home">
        <Navbar></Navbar>
        <router-view></router-view>
        <div class="container">
            
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    name: 'Home',
    components: {Navbar},
    data(){
        return{

        }
    }

}
</script>

<style>
.home{
    margin-bottom: 50px;
}

</style>
