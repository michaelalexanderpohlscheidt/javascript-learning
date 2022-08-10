const space = ' ';
const block = '#';
let numberOfSpaces = 3;
let numberOfBlocks = 1;

while(numberOfSpaces >= 0) {
    console.log(
        space.repeat(numberOfSpaces) + block.repeat(numberOfBlocks)
    );

    numberOfSpaces -= 1;
    numberOfBlocks += 2;
}