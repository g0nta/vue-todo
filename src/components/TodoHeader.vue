<template>
    <div>
        <h1>My Todo List({{done}} / {{all}})</h1>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Todo from '../entities/Todo';

@Component
export default class TodoHeader extends Vue {
    @Prop(Array) public todos!: Todo[];
    private done: number = 0;
    private all: number = 0;

    public created() {
        this.done = this.todos.filter((e) => e.isDone === true).length;
        this.all = this.todos.length;
    }
}
</script>