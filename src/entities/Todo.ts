export default class Todo {
    public id: number;
    public task: string;
    public isDone: boolean;
    constructor(id: number, task: string, isDone: boolean) {
        this.id = id;
        this.task = task;
        this.isDone = isDone;
    }
}
