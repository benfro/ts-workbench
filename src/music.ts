type Note = "A" | "B" | "C" | "D" | "E" | "F" | "G";
type Accidental = "#" | "b";
type Octave = 1 | 2 | 3 | 4 | 5 | 6 | 7;

class Pitch {
  constructor(note: Note, acc?: Accidental, oct?: Octave);
}
