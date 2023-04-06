import React from 'react';
import './style.css';

// Задание
// Допишите код так, чтобы DatePicker был контролируемым компонентом.
// При выборе даты в input'е, текст на ним должен обновляться и показывать выбранную дату
// При нажатии на кнопку Reset date, input должен очищаться, а надпись становаиться 'Select date'
// Документация по JQuery UI
// https://jqueryui.com/datepicker
// https://api.jqueryui.com/datepicker

class DatePicker extends React.Component {
  inputRef = null;

  componentDidMount() {
    $(this.inputRef).datepicker({
      dateFormat: 'dd/mm/yy',
      onSelect: (date) => {
        this.props.onSelect(date);
      },
    });
    $(this.inputRef).datepicker('setDate', this.props.value || '');
  }

  render() {
    return (
      <input
        value={this.props.value || ''}
        onChange={() => {}}
        ref={(domElement) => {
          this.inputRef = domElement;
        }}
      />
    );
  }
}

export default class App extends React.Component {
  state = {
    date: '1/4/2023',
  };

  onDateSelect = (date) => {
    this.setState({ date });
  };

  onResetDate = () => {
    this.setState({ date: null });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          {this.state.date ? `Date: ${this.state.date}` : 'Select date'}{' '}
        </div>
        <div>
          <DatePicker value={this.state.date} onSelect={this.onDateSelect} />
        </div>
        <div>
          <button onClick={this.onResetDate}>Reset date</button>
        </div>
      </React.Fragment>
    );
  }
}
