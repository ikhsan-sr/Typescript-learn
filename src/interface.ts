interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGaming: boolean;

  constructor(name: string, isGaming: boolean) {
    this.name = name;
    this.isGaming = isGaming;
  }

  on(): void {
    console.log("Turn On");
  }
  off(): void {
    console.log("Turn Off");
  }
}

class MacBook implements Laptop {
  name: string;
  keyboardLigth: boolean;

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLigth = keyboardLight;
  }

  on(): void {
    console.log("Turn On");
  }
  off(): void {
    console.log("Turn Off");
  }
}

let asus = new Asus("Asus", true);
asus.on();
asus.off();

let mb = new MacBook("MBP", true);
mb.on();
mb.off();
