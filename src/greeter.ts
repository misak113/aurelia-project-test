export class Greeter {
	
	private name: { cs: string; pl: string; sk: string; }
	get Name() { return this.name; }

	constructor() {
		this.name = {};
	}
	
	save() {
		alert(this.name);
	}
}
