let ulElem = document.createElement("ul");
document.body.appendChild(ulElem);

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
for (let i = 0; i < apps.length; i++) {
    let liElem = document.createElement("li");
    ulElem.appendChild(liElem);
    liElem.textContent = apps[i];
}