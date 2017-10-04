export class Todo {
  id: number;
  title: string;
  text: string;

  constructor(id: number, text: string, title: string = "no title") {
    this.id = id;
    this.text = text;
    this.title = title;
  }
}
