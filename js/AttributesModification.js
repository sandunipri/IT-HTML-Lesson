console.log("Content Modification");

const link = document.querySelector("a");
console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.facebook.com");
console.log(link.getAttribute("href"));

link.setAttribute("target",'_blank');
link.removeAttribute("target");
