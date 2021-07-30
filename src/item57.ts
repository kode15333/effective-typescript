export {};

/**
 * 소스맵을 통해서 디버깅을 하면 더욱 좋다
 * 단, 개발환경에서만 사용하고 상용으로 소스맵이 나가지 않도록 한다.
 * */

function addCounter(el: HTMLElement) {
    let clickCount = 0;
    const triviaEl = document.createElement("p");
    const button = document.createElement("button");
    button.textContent = "Click me";
    button.addEventListener("click", async () => {
        clickCount += 1;
        const response = await fetch(`http://numbersapi.com/${clickCount}`);
        const trivia = await response.text();
        triviaEl.textContent = trivia;
        button.textContent = `Click me ${clickCount}`;
    });
    el.appendChild(triviaEl);
    el.appendChild(button);
}

addCounter(document.body);
