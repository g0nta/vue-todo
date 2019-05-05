<template>
  <div id="app">
    <div>
      <h1>My Todo List ( {{done}} / {{all}} )</h1>
    </div>
    <hr>
    <TodoList v-bind:todos="todos" 
      v-on:task-state-changed="updateTasks"
      v-on:task-delete="updateTasks"
      v-on:task-add="updateTasks" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './components/TodoList.vue';
import Todo from './entities/Todo';

@Component({
  components: {
    TodoList,
  },
})
export default class App extends Vue {
  private todos: Todo[] = [
    new Todo(0, 'Task 0', false),
    new Todo(1, 'Task 1', true),
    new Todo(2, 'Task 2', true),
  ];
  private all: number = 0;
  private done: number = 0;

  private updateTasks(todos: Todo[]): void {
    this.todos = todos;
    this.updateDoneAndAll();
  }

  private updateDoneAndAll(): void {
    this.done = this.todos.filter((e) => e.isDone).length;
    this.all = this.todos.length;
  }
  private created() {
    this.updateDoneAndAll();
  }
}
</script>

