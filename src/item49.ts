export {};

class C {
    vals = [1, 2, 3];

    logSqures() {
        for (const val of this.vals) {
            console.log(val * val);
        }
    }
}

const c = new C();
c.logSqures();

const method = c.logSqures();
method.call(c);

document.querySelector("input")!.addEventListener("change", function (e) {
    console.log(this);
});

class ResetButton {
    constructor() {
        this.onClick = this.onClick.bind(this);
    }

    render() {
        return makeButton({ text: "Rest", onClick: this.onClick });
    }

    onClick() {
        alert(`Reset ${this}`);
    }
}

// or

class ResetButton {
    render() {
        return makeButton({ text: "Rest", onClick: this.onClick });
    }

    onClick = () => {
        alert(`Reset ${this}`);
    };
}

class ResetButton {
    constructor() {
        const _this = this;
        this.onClick = function () {
            alert(`Reset${_this}`);
        };
    }

    render() {
        return makeButton({ text: "Reset", onClick: this.onClick });
    }
}

function addKeyListener(
    el: HTMLElement,
    fn: (this: HTMLElement, e: KeyboardEvent) => void
) {
    el.addEventListener("keydown", e => {
        fn.call(el, e);
    });
}

function addKeyListener1(
    el: HTMLElement,
    fn: (this: HTMLElement, e: KeyboardEvent) => void
) {
    el.addEventListener("keydown", e => {
        fn(el, e);
    });
}

function addKeyListener2(
    el: HTMLElement,
    fn: (this: HTMLElement, e: KeyboardEvent) => void
) {
    el.addEventListener("keydown", e => {
        fn(e);
    });
}

declare let el: HTMLElement;
addKeyListener(el, function (e) {
    this.innerHTML;
});

class Foo {
    registerHandler(el: HTMLElement) {
        addKeyListener(el, e => {
            this.innerHTML;
        });
    }
}
