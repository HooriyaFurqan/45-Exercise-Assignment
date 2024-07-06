let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];


function show_magicians(magicians: string[]) {
  for (let magician of magicians) {
    console.log(magician);
  }
}


function make_great(magicians: string[]) {
  let greatMagicians: string[] = [];
  for (let magician of magicians) {
    greatMagicians.push(`the Great ${magician}`);
  }
  return greatMagicians;
}


console.log("Original list:");
show_magicians(magicians);


magicians = make_great(magicians);


console.log("\nUpdated list with 'the Great' added:");
show_magicians(magicians);

let unchangedMagicians: string[] = [...magicians];

console.log("\nUnchanged list:");
show_magicians(unchangedMagicians);