<template>
  <div>
    <div>
      <ul>
        <li v-for="item in todos" v-bind:key="item.id">
          <TodoItem :id="item.id" :task="item.task" :isDone="item.isDone" 
            v-on:task-state-changed="changeTaskState"
            v-on:task-delete="deleteTask" />
        </li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="newTask"><button v-on:click="addTask">add task</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import TodoItem from './TodoItem.vue';
import Todo from '../entities/Todo';

@Component({
    components: {
        TodoItem,
    },
})
export default class TodoList extends Vue {
    @Prop(Array) private todos!: Todo[];

    private newTask: string = '';

    @Emit('task-state-changed')
    private changeTaskState(todo: Todo) {
        this.todos.forEach( (item) => {
            if (item.id === todo.id) {
                item.isDone = todo.isDone;
            }
        });
        return this.todos;
    }

    @Emit('task-delete')
    private deleteTask(id: number) {
        let i = 0;
        for (i; i < this.todos.length; i++) {
            if (this.todos[i].id === id) {
              break;
            }
        }
        this.todos.splice(i, 1);
        return this.todos;
    }

    @Emit('task-add')
    private addTask() {
        const newId = this.todos[this.todos.length - 1].id + 1;
        this.todos.push(new Todo(newId, this.newTask, false));
        this.newTask = '';
        return this.todos;
    }
}

</script>
