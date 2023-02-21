export const Display = ({ string }) => {

    console.log(string)
    return (
        <ul>
            {string.map((item) => {
                return <li>{item}</li>
            })}
        </ul>

    )
}