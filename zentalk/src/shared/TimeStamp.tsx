import * as React from 'react';
import * as moment from 'moment';

export type TimeStampProps = {
  date: string;
  className?: string;
};

export default class TimeStamp extends React.PureComponent<TimeStampProps> {
  public render () {
    return(
      <span className={`text-danger ` + this.props.className}>{moment(this.props.date).format('dddd, MMMM Do YYYY, h:mm:ss')}</span>
    );
  }
}
