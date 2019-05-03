<template>
    <div>
        <ul>
            <TodoItem v-for="t in todos" 
                :id="t.id" :task="t.task" :isDone="t.isDone" />
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TodoItem from './TodoItem.vue';
import Todo from '../entities/Todo';

@Component({
    components: {
        TodoItem,
    },
})
export default class TodoList extends Vue {
    @Prop(Array) public todos!: Todo[];
}

</script>
