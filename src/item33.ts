export {};

// 객체의 속성 이름을 함수 매개변수로 받을 떄는 string보다 keyof T를 사용하는 것이 좋습니다.

// worst
interface Album {
    artist: string;
    title: string;
    releaseDate: string; // YYYY-MM-DD
    recordingType: string; // "live or studtio"
}

// call stringly typed
const kindOfBlue: Album = {
    artist: "Miles Davis",
    title: "Kind of Blue",
    releaseDate: "August 17th, 1959", // << 여기서 부터 잘못된 형식(설계와 다른 값)
    recordingType: "Studio", // same
};

function recordRelease(title: string, date: string) {}
recordRelease(kindOfBlue.title, kindOfBlue.releaseDate);

// Best
type RecordingType = "studio" | "live";
interface Album1 {
    artist: string;
    title: string;
    releaseDate: Date;
    recordingType: RecordingType;
}
;

const kindOfBlue1: Album1 = {
    artist: "Miles Davis",
    title: "Kind of Blue",
    releaseDate: "August 17th, 1959", // << 여기서 부터 잘못된 형식(설계와 다른 값)
    recordingType: "Studio", // same
};

// reason 1
// worst
// 단순히 string으로 recordingType을 구분할 수 없다.

function getAlbumsOfType(recordingType: string): Album1[] {}

// best
function getAlbumsOfType(recordingType: RecordingType): Album1[] {}

// worst
function pluck(records, key) {
    return records.map(r => r[key]);
}

// transfer type
function pluck(records: any[], key: string): any[] {
    return records.map(r => r[key]);
}

function pluck<T>(records: T[], key: string): any[] {}

// type K = keyof Album;

// function pluck<T>(records: T[], key: keyof T): T[keyof T][] {}
function pluck1<T, K extends keyof T>(records: T[], key: K): T[K][] {
    return records.map(r => r[key]);
}
pluck1(albums, "title");
