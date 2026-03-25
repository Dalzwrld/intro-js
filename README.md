# Introduction to JavaScript

The <script> element is placed directly above the </body> for faster page rendering to allow the html content to be loaded into memory, thus allowing the js code to recognize and manipulate the html content.

console.log allows you to view your execution on your browser.

JS executes EVERYTHING from top to bottom.


<!-- Definitions -->

Value - A piece of data that can be stored in a variable or used in an expression. It represents a specific piece of info that your program works with.

Variable - A named storage place for data. Giving variables names makes it easier to access your data.

Data type - A kind of value that can be held in a variable that determines how data is stored in the memory and how operations are performed on it.


<!-- Variables -->

There are 3 techniques with 3 keywords:

const - short for constant, the value/piece of data is permanently stored in memory, thus cannot be changed.

let - the values in this variable are temporary, thus can be modified.

var - outdated technique and should not be used since it has scoping issues.

Variables are essential in knowing and sorting out various types of data, which makes it more efficient in manipulating information within the code. It helps in managing info wih much more ease too.


<!-- Common convention -->

Always use const unless you need to have data that changes, then you can use let.

<!-- Naming convention -->

We use camelCase for easier and better readability. It also matches the standard of JavaScript since it's also in camelCase.

<!-- Rules for working with variables -->

1. Use camelCase for defining variables, unless your variables repeat themselves.
2. Don't use spaces.
3. Avoid using reserved/keywords as variable names.
4. Use all uppercase for defining variables as costants in a project scope.
5. Don't start variables with numbers.
6. They are case-sensitive.
7. Use proper and meaningful names.
8. Names can contain numbers, digits, underscores & symbols like $
9. Always initialize to avoid undefined variables.

typeof allows us to know the data type.