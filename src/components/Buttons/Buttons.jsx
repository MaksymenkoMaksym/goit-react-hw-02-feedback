import { ButtonStyled, ButtonListStyled } from './Buttons.styled';
export const Buttons = () => <button type="button"></button>;

export const ButtonList = ({ options, onLeaveFeedback }) => {
  let buttonList = [];
  for (const i of options) {
    buttonList.push(
      <ButtonStyled
        key={i}
        type="button"
        onClick={e => onLeaveFeedback(e.target.textContent)}
      >
        {i}
      </ButtonStyled>
    );
  }
  return <ButtonListStyled>{buttonList}</ButtonListStyled>;
};
