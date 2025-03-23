export default function decorate(block) {
    const h1 = document.createElement('h1');
    h1.textContent = 'Hello World';
    block.appendChild(h1);
}
  