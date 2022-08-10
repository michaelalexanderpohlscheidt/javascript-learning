const camelCase = "thisIsMyCamelCaseExampleThatWillBeTransformedToSnakeCase";

console.log(
    camelCase.replace(/[A-Z]/g, (letter) => `_${letter.toLocaleLowerCase()}`)
)