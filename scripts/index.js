
const addresses = [
    "https://google.com",
    "https://bing.com",
    "https://duckduckgo.com"
];

const navLinks = document.createElement('ul');
const navContainer = document.querySelector('.js-link-container');

addresses.forEach(address => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', address);
    link.setAttribute('target', '_blank');
    link.textContent = address;
    listItem.appendChild(link);
    navLinks.appendChild(listItem);
});

navContainer.appendChild(navLinks);