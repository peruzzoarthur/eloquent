// function speak(this: { type: string }, line: string) {
//   const type: string = this.type;
//   console.log(`The ${type} rabbit says '${line}'`);
// }

// let whiteRabbit = { type: "white", speak };
// let highRabbit = { type: "high", speak };

// whiteRabbit.speak("Oh my fur and whiskers");
// highRabbit.speak("4:20?");

// speak.call(highRabbit, "F1?");

// let finder = {
//   find(array: number[]): boolean {
//     return array.some((v) => v === this.value);
//   },
//   value: 5,
// };

// console.log(finder.find([4, 6, 5]));

// let empty: Object = {};

// console.log(empty.toString);

// console.log(empty.toString());

// console.log(typeof empty);

// console.log(Object.getPrototypeOf(empty));

// console.log(Object.getPrototypeOf(empty) == Object.prototype);

// console.log(Object.getPrototypeOf(Object.prototype));

// console.log(Object.getPrototypeOf(Math.max) == Function.prototype);

// let protoRabbit = {
//   speak(this: { type: string }, line: string) {
//     const type: string = this.type;
//     console.log(`The ${type} rabbit says '${line}'`);
//   },
// };

// interface ProtoRabbit {
//   type: string;
//   speak: (line: string) => void;
// }

// let darkRabbit: ProtoRabbit = Object.create(protoRabbit);

// darkRabbit.type = "dark";
// darkRabbit.speak("I'm darkness");

// const makeRabbit = (type: string): ProtoRabbit => {
//   let rabbit: ProtoRabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   return rabbit;
// };

// class Rabbit implements ProtoRabbit {
//   constructor(public readonly type: string) {
//     this.type = type;
//   }

//   speak(line: string) {
//     console.log(`The ${this.type} rabbit says '${line}'`);
//   }
// }

// const greenRabbit = new Rabbit("green");

// greenRabbit.speak("I love green");

// console.log(Object.getPrototypeOf(greenRabbit) === Rabbit.prototype);

// console.log(Object.getPrototypeOf(Rabbit) === Function.prototype);

// class Particle {
//   speed: number = 0;
//   type: string = "GOD";
//   positionX: number;
//   constructor(positionX: number, public positionY: number) {
//     this.positionX = positionX;
//     // this.positionY = positionY;
//   }
// }

// const newGodParticle = new Particle(2, 4);
// console.log(newGodParticle.type);

class SecretiveObject {
  private password: number = 666;
  private getSecret() {
    return "something happened";
  }

  interrogate() {
    let shallISayIt = this.getSecret();
    console.log(shallISayIt);
    return "never ending struggle";
  }
}

const s3cret = new SecretiveObject();
console.log(s3cret.interrogate());
// s3cret.getSecret(); compile error in ts instead as using the #getSecret()
