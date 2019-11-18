import React, { Component } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

class Seat extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    !this.props.isReserved && this.props.selectSeat();
  }

  render() {
    const { isSelected, isEnabled, isReserved, isPaid } = this.props;
    const className = cx(
      "Seat",
      { "Seat--selected": isSelected },
      { "Seat--enabled": !isSelected && isEnabled && !isReserved },
      { "Seat--reserved": isReserved },
      { "Seat--paid": isPaid }
    );
    return (
      <div className={className} onClick={this.handleClick} title={isPaid ? '€18.75' : 'Free of Charge'}>
        <span className="SeatNumber">{this.props.seatNumber}</span>
      </div>
    );
  }
}

Seat.propTypes = {
  isSelected: PropTypes.bool,
  isReserved: PropTypes.bool,
  isPaid: PropTypes.bool,
  seatNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  selectSeat: PropTypes.func.isRequired
};

Seat.defaultProps = {
  isSelected: false,
  isPaid: false,
};

export default Seat;
