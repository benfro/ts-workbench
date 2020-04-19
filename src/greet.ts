export function greet(who: string): string {
  return `Hello, ${who}!`;
}

export function adder(one: number, two: number) {
  let res = one + two;
  return `${one} plus ${two} is ${res}!`;
}

//let e: true = true;
//let f: false = false;

let g: 100n = 100n;

let obj: {
  familyName: string;
  dysfunctional: boolean;
} = {
  familyName: "Fröberg",
  dysfunctional: true
};

export class Family {
  constructor(public familyName: string, public dysfunctional: boolean) {}
}

let instance = new Family("Fröberg", true);
