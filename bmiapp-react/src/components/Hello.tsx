interface HelloProps{
    name: string
    answer: number
}

export function Hello({name, answer}: HelloProps) {
    return (
        <p>Hello {name}. A resposta universal é {answer}!</p>
    )
}