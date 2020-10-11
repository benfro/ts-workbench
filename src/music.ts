import { notEqual } from "assert";

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

  nextNote(): Note {
    const nNote: Record<Note, Note> = {
      C: "D",
      D: "E",
      E: "F",
      F: "G",
      G: "A",
      A: "B",
      B: "C"
    };
    return nNote[this.note];
  }
}

export type Pitch2 = {
  note: Note;
  acc: Accidental;
  oct: Octave;
};

// ERROR:  error TS7022: 'Pitch2' implicitly has type 'any' because it does not have a type annotation and is referenced directly or indirectly in its own initializer.
// Programming TypeScript, p.140 - is it really working?
// Pitch2 = {
//  DEFAULT_NOTE: "C",
//  DEFAULT_ACC: "!",
//  from(oct: Octave, acc = Pitch2.DEFAULT_ACC, note = Pitch2.DEFAULT_NOTE): Pitch2 {
//    return {note, acc, oct};
//  }
// }
