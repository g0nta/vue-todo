<template>
  <div id="app">
    <TodoHeader v-bind:todos="mockTodos" />
    <hr>
    <TodoList v-bind:todos="mockTodos" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './components/TodoList.vue';
import TodoHeader from './components/TodoHeader.vue';
import Todo from './entities/Todo';

@Component({
  components: {
    TodoList,
    TodoHeader,
  },
})
export default class App extends Vue {
  private mockTodos: Todo[] = [
    new Todo(0, 'Task 0', false),
    new Todo(1, 'Task 1', true),
    new Todo(2, 'Task 2', true),
  ];
}
</script>

