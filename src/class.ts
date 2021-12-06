// public = bisa di akses semua class / dari luar class.
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya.
// private = hanya bisa di akses dari class itu sendiri.

export class User {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  setName(value: string): void {
    this.name = value;
  }

  setAge(value: number): void {
    this.age = value;
  }

  getAge = (): number => {
    return this.age;
  };

  getName = (): string => {
    return this.name;
  };
}

let user = new User("Muhammad Ikhsan", 23);

// console.log(user);

// Inheritance
class Admin extends User {
  read: boolean = true;
  write: boolean = true;

  getRole(): { read: boolean; write: boolean } {
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
