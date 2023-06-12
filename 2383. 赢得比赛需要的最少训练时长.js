/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function (initialEnergy, initialExperience, energy, experience) {
    let result = 0
    const energyNum = energy.reduce((a, b) => a + b)
    if (energyNum >= initialEnergy) {
        result += energyNum - initialEnergy + 1
    }
    for (let i = 0; i < experience.length; i++) {
        if (initialExperience > experience[i]) {
            initialExperience += experience[i]
        } else if (initialExperience <= experience[i]) {
            result += experience[i] - initialExperience + 1
            initialExperience = experience[i] * 2 + 1
        }
    }
    return result
};