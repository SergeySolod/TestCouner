export const counterLenght = (state) => {
    return state.counters.length
}

export const counterMaxArray = (state) => {
    return state.counters.map(count => {
        const maxArray = 0
        if (count.number > 0) {
            return maxArray + count.number
        }
        return maxArray;
    })
}