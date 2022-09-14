import { Component } from 'react';
import { FeedbackListStyled, FeedbackItem } from './FeedbackList.styled';
export class Feedback extends Component {
  render() {
    const { list, state, total = 0, positivePercentage = 0 } = this.props;
    let buttonList = [];
    for (const i of list) {
      buttonList.push(
        <FeedbackItem key={i}>
          {i}: {state[i]}{' '}
        </FeedbackItem>
      );
    }
    buttonList.push(
      <FeedbackItem key={'totalFeedback'}>Total Feedback: {total}</FeedbackItem>
    );
    buttonList.push(
      <FeedbackItem key={'positiveFeedback'}>
        Positive Feedback: {positivePercentage} %
      </FeedbackItem>
    );

    return <FeedbackListStyled>{buttonList}</FeedbackListStyled>;
  }
}
