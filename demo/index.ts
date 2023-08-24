import "../src/index.less";
import MyLibrary from "../src";
const myLibraryInstance = new MyLibrary();

const main = document.querySelector(".main");
if (main) {
  main.innerHTML = `<h3>Hello World!</h3>`;
}

console.log("myLibraryInstance", myLibraryInstance);

myLibraryInstance.myMethod();
