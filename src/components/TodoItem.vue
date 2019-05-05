<template>
  <label>
      <input type="checkbox" 
        v-on:click="sendTaskStatus" 
        v-model="isDoneInData">{{ task }}
      <button v-on:click="deleteTask">delete</button>
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from 'vue-property-decorator';
import Todo from '../entities/Todo';

@Component
export default class TodoItem extends Vue {
    @Prop(Number) private id!: number;
    @Prop(String) private task!: string;
    @Prop(Boolean) private isDone!: boolean;

    private isDoneInData: boolean = false;

    @Emit('task-state-changed')
    private sendTaskStatus() {
      return new Todo(this.id, this.task, !this.isDoneInData);
    }

    @Emit('task-delete')
    private deleteTask() {
      return this.id;
    }

    private created() {
      this.isDoneInData = this.isDone;
    }
}
</script>