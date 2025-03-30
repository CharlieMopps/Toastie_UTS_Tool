const fantasyNameGenerator = require("fantasy-name-generator");

for (let i = 0; i < 10; i++) {
  // Generate a name for the Dwarf race.
  const name = fantasyNameGenerator({ race: "Dwarf" });
  console.log(`Name ${i+1}: ${name}`);
}
