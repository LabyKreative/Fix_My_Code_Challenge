#!/usr/bin/node
/*print a square of size 10...*/

if (process.argv.length <= 2) {
  process.stderr.write("Missing argument\n");
  process.stderr.write("Usage: ./1-print_square.js <size>\n");
  process.stderr.write("Example: ./1-print_square.js 8\n");
  process.exit(1);
}

// change to base 10 from hexadecimal in parser
const size = parseInt(process.argv[2], 10);

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    process.stdout.write("#");
  }
  process.stdout.write("\n");
}
