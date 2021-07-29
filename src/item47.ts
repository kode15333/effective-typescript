export {};

interface SecretName {
    first: string;
    last: string;
}

interface SecretSanta {
    name: SecretName;
    gift: string;
}

export function getGift(name: SecretName, gift: string): SecretSanta {
    //
}

type MySanta = ReturnType<typeof getGift>;
type MaName = Parameters<typeof getGift>;

// 공개메서드에 등장한 어떤 형태의 타입이든 익스포트하자!
// 어차피 라이브러 사용자가 추출할 수 있으므로, 익스포트하기 쉽게 만드는것이 좋다
