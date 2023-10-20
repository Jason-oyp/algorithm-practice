var halfQuestions = function (questions) {
    const m = {}
    for (const i of questions) {
        if (!m[i]) m[i] = 0
        m[i]++
    }

    const sortValues = Object.values(m).sort((a, b) => b - a)
    for (let sum = 0, i = 0; i < sortValues.length; i++) {
        sum += sortValues[i]
        if (sum >= questions.length / 2) return i + 1
    }
}