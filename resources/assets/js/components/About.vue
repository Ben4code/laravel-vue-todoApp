<template>
    <div class="about container">
        <br><br>
        <div class="card mx-auto" style="width: 25rem;">
            <img class="card-img-top" src="../../img/photo.png" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Developer Bio</h5>
                <p class="card-text">This project was brought to you with love from the developer Ben Obioha</p>
                <a :href="git" class="btn btn-success">Get source code! <i class="fa fa-github"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
    data(){
        return{
            git: 'http://github.com/ben4code'
        }
    }
}
</script>

<style>
.about{
    text-align: center;
    
    margin-bottom: 50px;
}
</style>
