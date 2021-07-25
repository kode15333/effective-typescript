export {};
const page1Promise = fetch(url1);
page1Promise
    .then(response1 => {
        return fetch(url2);
    })
    .then(response2 => {
        return fetch(url3);
    })
    .cache(error => {});

async function fetchPages() {
    try {
        const response1 = await fetch(url1);
        const response2 = await fetch(url2);
        const response3 = await fetch(url3);
    } catch (e) {}
}

async function fetchPages() {
    const [response1, response2, response3] = await Promise.all([
        fetch(url1),
        fetch(url2),
        fetch(url3),
    ]);
}

function fetchPagesCB() {
    const numDone = 0;
    const responses: string[] = [];
    const done = () => {
        const [response1, response2, response3] = responses;
    };
    const urls = [url1, url2, url3];
    urls.forEach((url, i) => {
        fetchURL(url, r => {
            responses[i] = url;
            numDone++;
            if (numDone === urls.length) done();
        });
    });
}

function timeout(mills: number): Promise<never> {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("timeout"), mills);
    });
}

async function fetchWithTimeout(url: string, ms: number) {
    return Promise.race([fetch(url), timeout(ms)]);
}

async function getNumber() {
    return 42;
}
const getNumber2 = async () => 42;

const getNumber3 = () => Promise.resolve(42);

// dont do

const _cache: { [url: string]: string } = {};
function fetchWithCache(url: string, callback: (text: string) => void) {
    if (url in _cache) {
        callback(_cache[url]);
    } else {
        fetchURL(url, text => {
            _cache[url] = text;
            callback(text);
        });
    }
}

let requestStatus = "loading" | "success" | "error";
function getUser(userId: string) {
    fetchWithCache(`/user/${userId}`, profile => {
        requestStatus = "success";
    });

    requestStatus = "loading";
}

const _cache: { [url: string]: string } = {};
async function fetchWithCache(url: string) {
    if (url in _cache) {
        return _cache[url];
    }
    const respose = await fetch(url);
    const text = await respose.text();
    _cache[url] = text;
    return text;
}
let requestStatus = "loading" | "success" | "error";
async function getUSer(userId: string) {
    requestStatus = "loading";
    const profile = await fetchWithCache(`user/${userId}`);
    requestStatus = "success";
}

async function getJSON(url: string) {
    const response = await fetch(url);
    const jsonPromise = response.json();
    return jsonPromise;
}
