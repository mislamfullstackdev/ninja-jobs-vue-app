<template>
    <div>
        <h1>Jobs</h1>
        <div class="job" v-for="job in jobs" :key="job.id">
            <router-link :to="{name: 'JobDetails', params: { id: job.id }}">
                <h1>{{  job.title }}</h1>
            </router-link>
        </div>
    </div>  
</template>

<script>
export default {
    data(){
        return{
            jobs: []
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => {
                this.jobs = data
            }
            )
            .catch(err => console.log(err.message));
    }
}
</script>

<style>
    .job h1{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job h1:hover{
        background: #ddd;
    }
    .job a{
        text-decoration: none;
    }
</style>