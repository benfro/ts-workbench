import { Note, Accidental, Octave, Pitch } from "./music";

it("should be natural by default", () => {
  expect(new Pitch("C").isNatural()).toEqual(true);
});
