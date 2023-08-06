/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    yield 0
    yield 1
    let prev = 0,
        next = 1
    while (true) {
        const result = prev + next
        yield result
        prev = next
        next = result
    }

};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */