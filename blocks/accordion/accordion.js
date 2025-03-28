export default async function decorate(block) {
  const h1 = document.createElement('h1');
  h1.textContent = 'Hello World123';
  block.innerHTML = '';
  block.append(h1);
}
