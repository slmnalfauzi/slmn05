const div = document.getElementById("container1")
const div2 = document.getElementById("container2")
const header1 = document.getElementById("h1")
const link = document.getElementById("link")
const list = document.querySelectorAll("li")

header1.style.backgroundColor = "grey"
div.style.backgroundColor = "pink"
div2.style.backgroundColor = "pink"
link.setAttribute('href', 'https://www.google.com')
list.forEach((item, index) => {
    item.textContent = 'List baru ${index + 1}'
    item.style.fontStyle = 'italic'
    item.style.fontWeight = 'bold'
    item.style.fontSize = '16px'
    item.style.backgroundColor = index % 2 === 0 ? 'ligtblue' : 'lightgreen'
})