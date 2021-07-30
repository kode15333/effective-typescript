export {};
/**
 * 타입스크립트 키워드는 자바스크립트로 변환되면 접근할 수잇다....
 *
 * */
class Diaray {
    private secret = "cheated on my English test";
}

const diary = new Diaray();
(diary as any).secret;

declare function hash(text: string): number;

class PasswordChecker {
    checkPassword: (password: string) => boolean;

    constructor(passwordHash: number) {
        this.checkPassword = (password: string) => {
            return hash(password) === passwordHash;
        };
    }
}

const checker = new PasswordChecker(hash("s3cret"));
checker.checkPassword("s3cret");

class PasswordChecker1 {
    #passwordHash: number;

    constructor(passwordHash: number) {
        this.#passwordHash = passwordHash;
    }

    checkPassword(password: string) {
        return hash(password) === this.#passwordHash;
    }
}

const checker1 = new PasswordChecker1(hash("s3cret"));
checker1.checkPassword("s3cret");
checker1.checkPassword("eeee");
