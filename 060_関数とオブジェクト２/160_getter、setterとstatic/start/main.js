// function Person1(name, age) {
// 	this.name = name;
// 	this.age = age;
// }

class Person2 {
	constructor(name,age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		console.log('hello')
		return this._name;
	}

	set name() {
		this._name = val;
	}

	static hello() {
		console.log('hello')
	}
}

Person2.hello();