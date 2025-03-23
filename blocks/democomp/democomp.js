export default function decorate(block) {
    const cols = [...block.firstElementChild.children];
     
    // setup image columns
    [...block.children].forEach((row) => {
      [...row.children].forEach((col) => {
        const pic = col.querySelector('picture');
       
      });
    });
  }