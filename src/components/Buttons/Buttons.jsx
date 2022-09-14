export const Buttons = () => (
    <button type="button"></button>
)

export const ButtonList = ({ options, onLeaveFeedback }) => {
    let buttonList = [];
    for (const i of options) {
        buttonList.push(<button key={i} type="button" onClick={(e) => onLeaveFeedback(e.target.textContent)}>{i}</button>)
    }
    return (<ul>{buttonList}</ul>)
}