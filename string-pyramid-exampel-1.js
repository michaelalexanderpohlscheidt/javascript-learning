const space = ' ';
const block = '#';
let numberOfSpaces = 0;
let numberOfBlocks = 7;

while(numberOfBlocks > 0) {
    console.log(
        space.repeat(numberOfSpaces) + block.repeat(numberOfBlocks)
    );

    numberOfSpaces += 1;
    numberOfBlocks -= 2;
}
