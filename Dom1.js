console.log('======= DOM API getElementById() ===========');
const elementTitle = document.getElementById('title');
console.log(elementTitle.innerHTML);

console.log('======= DOM API getElementsByTagName() ===========');
const elementH2 = document.getElementsByTagName('h2');
console.log(elementH2);
console.log(elementH2[0].innerHTML);
console.log(elementH2[1].innerHTML);

console.log('======= DOM API getElementsByClassName() ===========');
const elementsTechStack=document.getElementsByClassName('techStack');
console.log(elementsTechStack);
console.log(elementsTechStack[0].innerHTML);
console.log(elementsTechStack[1].innerHTML);





console.log('querySelectorAll() with class');
const elementAll = document.querySelectorAll('.techStack');
console.log(elementAll[0].innerHTML);
console.log(elementAll[1].innerHTML);





console.log(`========== Update or change the text of an element ==================`);
const titleElement = document.querySelector('#title');
titleElement.innerHTML = 'Learning API - Document Object Model';