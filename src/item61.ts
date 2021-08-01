export {};

/**
 * 마이그레이션은 점진적으로 하는게 좋다.
 * 타입 체크의 강도를 높이는 설정 noImplicitAny => strictNullChecks => strict
 */
class Chart {
    indices: number[];

    getRanges() {
        for (const r of this.indices) {
            const low = r[0];
            const high = r[1];

            //    indeces의 타입은 number[][] or [number, number][]
        }
    }
}
