<template>
  <li><input type="checkbox" :checked="isDone">{{ task }}[x]</li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TodoItem extends Vue {
    @Prop(String) public task!: string;
    @Prop(Boolean) public isDone!: boolean;
}
</script>