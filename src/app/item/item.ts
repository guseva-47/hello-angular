export class Item {
  id: number;
  name: string;
  isComplete: boolean;

  constructor(id: number, name: string, isComplete: boolean) {
    this.id = id;
    this.name = name;
    this.isComplete = isComplete;
  }

  sayHello(person?: string): string {
    return "Hello, " + (person ?? 'anonym');
  }
}
