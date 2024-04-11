console.log('Content script loaded');
// console.log("new commnet")

const elements = document.getElementsByClassName('view-line');
const elementsArray = Array.from(elements)
console.log("elements are",elements)
console.log("elemets array is", elementsArray)
console.log("elements lenghts is", elements.length)
console.log(elements[0])
const parser = new DOMParser();

console.log("loopings")
for (let i of elements){
  console.log(i.id)
}
[].forEach.call( document.getElementsByClassName('view-line'), function(el) {
  console.log(el);
});



let finalCode = []
for (let i = 0; i< elements.length;i++){
  const element = elements[i]
  // console.log(element)

  const textString = parser.parseFromString(element.innerHTML, 'text/html');
  const textContent = textString.body.textContent.trim();
  finalCode.push(textContent)
}


let copiedText = ""

for (let i = 0;i<finalCode.length; i++){
  copiedText += finalCode[i]
}

console.log("the final string  is ", finalCode)

for (let i = 0;i<elements.length;i++)[
  textArray.push(elements[i].innerHTML)
]