export class Greeter {
	
	private name: { cs?: string; pl?: string; sk?: string; } = {};
	get Name() { return this.name; }
	private title: string = 'Greeting';
	get Title() { return this.title; }

	public rows: number[] = [];

	constructor() {
		for (var i = 0;i < 10000;i++) {
			this.rows.push(i);
		}
	}
	
	save() {
		alert(JSON.stringify(this.name));
	}
}
