export {}:

function handleDrag(eDown: Event) {
  const targetEl = eDown.currentTarget;
  targetEl.classList.add('dragging');
  const dragStart = [eDown.clientX, eDown.clienY];
  const handleUp = (eUp: Event) => {
    targetEl.classList.remove('dragging');
    targetEl.removeEventListener('mouseup', handleUp);
    const dragEnd = [eUp.clientX, eUp.clientY];
    console.log('dx, dy = ', [0, 1].map(i => dragEnd[i] - dragStart[i]));
  }

  targetEl.addEventListener('mouseup', handleUp)
}

const div= document.getElementById('surface');
div.addEventListener('mousedown', handleDrag)

document.getElementsByTagName('p')[0]; // HTMLParagraphElement
document.createElement('button'); //HTMLButtonElement
document.querySelector('div') //HTMLDivElement

document.getElementById('my-div') // HTMLElement

document.getElementById('my-div') as HTMLDivElement




/**
 * 인라인 함수로 만들면 타입스크립트가 문맥정보를 더 쉽게 접근해서 에러를 줄일 수 있다.
 * */
function handleDrag (el:HTMLElement){
  el.addEventListener('mousedown', (eDown) => {
  const dragStart = [eDown.clientX, eDown.clientY];
  const handleUp = (eUp: MouseEvent) => {
    el.classList.remove('dragging');
    el.removeEventListener('mouseup', handleUp);
    const dragEnd = [eUp.clientX, eUp.clientY];
    console.log('dx, dy = ', [0, 1].map(i => dragEnd[i] - dragStart[i]));
  }
  el.addEventListener('mouseup', handleUp)
  })

}
