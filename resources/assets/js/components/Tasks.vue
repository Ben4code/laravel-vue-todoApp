<template>
    <div class="container gap">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default ">
                    <div class="card-header text-white bg-success">My Tasks</div>

                    <div class="card-body">
                        <div class="input-group">
                            <input type="text" 
                            class="form-control" 
                            v-model="task.name" 
                            @keypress.enter="createTask(task.name)">
                            <span class="input-group-append">
                                <button class="btn btn-success" @click="createTask">Add</button>
                            </span>
                        </div>
                        <br>
                        <div class="alert alert-danger" v-if="tasks.length <= 0">
                            <p class="text-center">Task list is empty, add new task!</p>
                        </div>

                        <div class="tasks-list">
                            <ul class="list-unstyled">
                                <li v-for="task in tasks" :key="task.id" :class="{done: task.completed}">
                                    <div class="checkbox">
                                        <label >
                                            <input type="checkbox" name="task.id" v-model="task.completed" @click="done(task)"> 
                                            {{task.name}}
                                        </label> 
                                        <div class="pull-right">
                                            <a href="#" @click="remove(task)">
                                                <i class="fa fa-trash makeGreen"></i>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> 
                    
                    
                    </div>
                    <div class="card-footer">
                        <span class="badge badge-primary">Total tasks: {{tasks.length}}</span>
                        <span class="badge badge-warning">Uncompleted tasks: {{ tasks.length - comTasks}}</span>
                        <span class="badge badge-success">Tasks completed: {{comTasks}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Tasks',
        data(){
            return {
                tasks: [],
                task: {
                    name: '',
                    completed: null
                }
            }
        },
        computed:{
            comTasks(){
               let val = this.tasks.filter(element => {
                 return element.completed == 1;
               });
               return val.length;
            },
            
        },
        mounted() {
            this.fetchData();
        },
        methods:{
            fetchData(){
                axios.get('/api/tasks').then((res)=>{
                    this.tasks = res.data;
                }).catch((err)=>{
                    console.log(err);
                })
            },
            createTask(){
                axios.post('api/tasks', this.task).then((res)=>{
                    this.tasks.unshift(res.data);
                    this.task.name = '';
                }).catch((err)=>{
                    console.log(err);
                })
            },
            done(task){
                axios.put(`api/tasks/${task.id}`, {
                    completed: !task.completed
                }).then((res)=>{
                    console.log("Task Updated successfully."); 
                }).catch((err)=>{
                    console.log(err);
                })
            },
            remove(task){
                axios.delete(`api/tasks/${task.id}`)
                .then((res)=>{
                    let theIndex = this.tasks.indexOf(task);
                    this.tasks.splice( theIndex, 1);
                    console.log("Task deleted successfully."); 
                }).catch((err)=>{
                    console.log(err);
                })
            }
        }
    }
</script>

<style>
    .gap, .tasks-list{
        margin-top: 30px;
    }
    .done label{
        text-decoration: line-through;
        color: tomato;
    }
    .makeGreen{
        color: red;
    }
</style>

