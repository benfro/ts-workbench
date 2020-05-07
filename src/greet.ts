export function greet(who: string): string {
  return `Hello, ${who}!`;
}

export function adder(one: number, two: number) {
  const res = one + two;
  return `${one} plus ${two} is ${res}!`;
}

// let e: true = true;
// let f: false = false;

const g: 100n = 100n;

const obj: {
  familyName: string;
  dysfunctional: boolean;
} = {
  familyName: "Fröberg",
  dysfunctional: true
};

export class Family {
  constructor(familyName: string, public dysfunctional: boolean) {}
}

const instance = new Family("Norman", true);

function tuple<T extends unknown[]>(...ts: T): T {
  return ts;
}

const t1 = tuple(1, "apa", true);
