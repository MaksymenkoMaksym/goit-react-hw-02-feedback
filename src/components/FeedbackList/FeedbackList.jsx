import React, { Component } from 'react';

export class Feedback extends Component {
  render() {
    const { list, state, total = 0, positivePercentage = 0 } = this.props;
    let buttonList = [];
    for (const i of list) {
      buttonList.push(
        <li key={i}>
          {i}: {state[i]}{' '}
        </li>
      );
    }
    buttonList.push(<li key={'totalFeedback'}>Total Feedback: {total}</li>);
    buttonList.push(
      <li key={'positiveFeedback'}>
        Positive Feedback: {positivePercentage} %
      </li>
    );

    return <ul>{buttonList}</ul>;
  }
}
