//Date
export function hexToDate(hex: string) {
    let result = new Intl.DateTimeFormat('en-US',
        { month: '2-digit', day: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' })
        .format(parseInt(hex) * 1000)
    return (
        result
    )
}

//Text
export function firstLetterToUpper(text: string) {
    return text.charAt(1).toUpperCase() + text.slice(2)
}
