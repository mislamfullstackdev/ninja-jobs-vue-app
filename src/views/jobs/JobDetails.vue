<template>
    <div class="job" v-if="job">
        <h1>Job Title:  {{ job.title }} </h1>
        <p class="skill">Required skills:  </p>
        <p>{{job.details[0].skills}}</p>
        <p class="education">Qualification :  </p>
        <p>{{job.details[0].education}}</p>
        <p class="salary">Salary :  </p>
        <p>{{job.details[0].salary}}</p>
    </div>
    <div v-else>
        <p>Job is loading... </p>
    </div>

</template>

<script>
export default {
    props: ['id'],
    data(){
        return{
            job: null,
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => {
            this.job = data
        })
        .catch(err => console.log(err.message))
    },
}
</script>

<style>
    .job{
        text-align: center;
    }
    .skill,.education,.salary{
        font-weight: bold;
        font-size: 1rem;
    }
</style>