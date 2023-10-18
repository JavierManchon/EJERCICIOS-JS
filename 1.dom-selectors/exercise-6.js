let list = document.querySelectorAll("span[data-function='testMe'");
for (let i = 0; i < list.length; i++) {
    if (i === 2) {
        console.log(list[i].textContent);
    }
}