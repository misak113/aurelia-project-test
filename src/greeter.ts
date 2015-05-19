export class Greeter {
	
	private name: { cs?: string; pl?: string; sk?: string; } = {};
	get Name() { return this.name; }
	private title: string = 'Greeting';
	get Title() { return this.title; }
	private names: string[] = [];
	get Names() { return this.names; }
	set Names(names: string[]) { this.names = names; }

	public rows: number[] = [];

	constructor() {
		for (var i = 0;i < 1000;i++) {
			this.names.push(Math.round(Math.random() * 10000) + '');
		}
	}
	
	save() {
		alert(JSON.stringify(this.names));
	}
}
