import { Note, Accidental, Octave, Pitch } from "./music";

it("should be natural by default", () => {
  expect(new Pitch("C").isNatural()).toEqual(true);
});

it("should not be sharpened by default", () => {
  expect(new Pitch("C").isFlat()).toEqual(false);
});

it("should give the next note", () => {
  expect(new Pitch("C").nextNote()).toEqual("D");
});
