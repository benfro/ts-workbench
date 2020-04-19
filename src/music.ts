export type Note = "A" | "B" | "C" | "D" | "E" | "F" | "G";
export type Accidental = "!" | "#" | "b";
export type Octave = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export class Pitch {
  note: Note;
  acc: Accidental;
  oct: Octave;

  constructor(n: Note, acc: Accidental = "!", oct: Octave = 4) {
    this.note = n;
    this.acc = acc;
    this.oct = oct;
  }

  sharpen(): Pitch {
    return new Pitch(this.note, "#", this.oct);
  }

  flatten(): Pitch {
    return new Pitch(this.note, "b", this.oct);
  }

  isNatural(): boolean {
    return this.acc === "!";
  }

  isFlat(): boolean {
    return this.acc === "b";
  }
}
