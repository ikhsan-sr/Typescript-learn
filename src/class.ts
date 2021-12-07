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

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static getRoleName: string = "Admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email salah";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

let admin = Admin.getRoleName;
console.log(admin);
