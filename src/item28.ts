export {};
interface State {
    pageText: string;
    isLoading: boolean;
    error?: string;
}
function renderPAge(state: State) {
    if (state.error) {
        return `Error! Unable to load ${currentPage}: ${state.error}`;
    }
    if (state.isLoading) {
        return `Loading ${currentPage}...`;
    }

    return `<h1>${currentPage}</h1>\n${state.pageText}`;
}

async function changePage(state: State, newPage: string) {
    state.isLoading = true;
    try {
        const response = await fetch(getUrlForPage(newPage));
        if (!response.ok) {
            throw new Error(
                `Unable to load ${newPage}: ${response.statusText}`
            );
        }

        const text = await response.text();
        state.isLoading = false;
        state.pageText = text;
    } catch (e) {
        state.error = `${e}`;
    }
}

interface RequestPending {
    state: "pending";
}
interface RequestError {
    state: "error";
    error: string;
}

interface RequestSuccess {
    state: "ok";
    pageText: string;
}

type RequestState = RequestPending | RequestError | RequestSuccess;

interface State {
    currentPage: string;
    requests: { [page: string]: RequestState };
}

function renderPage(state: State) {
    const { currentPage } = state;
    const requestState = state.requests[currentPage];
    switch (requestState.state) {
        case "pending":
            return `Loading ${currentPage}...`;
        case "error":
            return `Error! Unable to load ${currentPage}: ${state.error}`;
        case "ok":
            return `<h1>${currentPage}</h1>\n${state.pageText}`;
    }
}

async function changePage(state: State, newPage: string) {
    state.requests[newPage] = { state: "pending" };
    state.currentPage = newPage;
    try {
        const response = await fetch(getUrlForPage(newPage));
        if (!response.ok) {
            throw new Error(
                `Unable to load ${newPage}: ${response.statusText}`
            );
        }

        const pageText = await response.text();
        state.requests[newPage] = { state: "ok", pageText };
    } catch (e) {
        state.requests[newPage] = { state: "error", error: `${e}` };
    }
}

interface CockpitControls {
    leftSideStick: number;
    rightSideStick: number;
}

function getStickSetting(controls: CockpitControls) {
    return controls.leftSideStick;
}

function getStickSetting(controls: CockpitControls) {
    const { leftSideStick, rightSideStick } = controls;
    if (leftSideStick === 0) {
        return rightSideStick;
    }
    if (rightSideStick === 0) {
        return leftSideStick;
    }

    if (Math.abs(leftSideStick - rightSideStick) < 5) {
        return (leftSideStick + rightSideStick) / 2;
    }
}

interface CockpitControls {
    stickAngle: number;
}
