import Vue from  'https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js'

Vue.component('loader', {
    template: `
      <div style="display: flex;justify-content: center;align-items: center">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>`
  })

new Vue({
    el: "#app", 
    data(){
        return{
            loading: false,
            form:{
              title:	'',
              description:	'',
              importance: '',
              project:	'',
              expireAt:	''
              
            }, 
            users: []
        }
    },
    computed:{
        canCreate() { 
            return this.form.title.trim() && this.form.description.trim() && this.form.project.trim()  && this.form.expireAt.trim()
        }
    },
    methods:{
        async CreateTaskDto(){
            const{...user} = this.form

            const newUser = await request('https://tele2quiz.store/api/tasks', 'POST', user)

            this.users.push(newUser)
            
            this.form.title = this.form.description = this.form.importance = this.form.project = this.form.expireAt = ''
        }, 
        async removeUser(id){
            await request('https://tele2quiz.store/api/tasks/${id}', 'DELETE')
            this.users = this.users.filter(c => c.id !== id)
        }, 
    },
    async mounted() {
        this.loading = true 
        this.users = await request('https://tele2quiz.store/api/tasks/me')
        this.loading = false 
    }
})

