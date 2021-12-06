"use strict";
// public = bisa di akses semua class / dari luar class.
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya.
// private = hanya bisa di akses dari class itu sendiri.
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.getAge = () => {
            return this.age;
        };
        this.getName = () => {
            return this.name;
        };
        this.name = name;
        this.age = age;
    }
    setName(value) {
        this.name = value;
    }
    setAge(value) {
        this.age = value;
    }
}
exports.User = User;
let user = new User("Muhammad Ikhsan", 23);
// console.log(user);
// Inheritance
class Admin extends User {
    constructor() {
        super(...arguments);
        this.read = true;
        this.write = true;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
}
let admin = new Admin("Ikhsan Admin", 23);
admin.getName();
admin.getRole();
admin.setAge(99);
console.log(admin);
