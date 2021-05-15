<template>
    <div>
        <h3>Todos</h3>

        <div class="legend">
            <span>Double click to mark as complete</span>

            <span><div class="incomplete-box"></div> = Incomplete</span>
            <span><div class="complete-box"></div> = Complete</span>
        </div>

        <div class="todos">
            <div 
                v-for="todo in allTodos" 
                class="todo" 
                :class="{'is-complete': todo.completed}"
                :key="todo.id" 
                @dblclick="onDblClick(todo)">
                {{ todo.title }}
                <span @click="deleteTodo(todo.id)">Trash</span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Todos',
    created() {
        this.fetchTodos()
    },
    methods: {
        ...mapActions([
            'fetchTodos',
            'deleteTodo',
            'updateTodo'
        ]),
        onDblClick(todo) {
            const updTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }

            this.updateTodo(updTodo)
        }
    },
    computed: mapGetters(['allTodos'])
}
</script>

<style scoped>
.todos{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
}

.todo{
    border: 1px solid #CCC;
    background: #41B883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
    min-height: 50px;
}

.todo span{
    font-size: 10px;
    position: absolute;
    bottom: 5px;
    right: 5px;
    color: #FFF;
    cursor: pointer;
}

.legend{
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}

.complete-box, .incomplete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
}

.complete-box{
    background: #35495E;
}

.incomplete-box{
    background: #41B883;
}

.is-complete{
    background: #35495E;
    color: #FFF;
}
</style>