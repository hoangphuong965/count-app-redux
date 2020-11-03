import React from 'react';
import { connect } from 'react-redux';
import { decrement, reset, increment } from '../actions/index';

const InDeCre = (props) => {
  return (
    <div>
      <div
        className='container'
        style={{ textAlign: 'center', padding: '5em', fontSize: '2em' }}
      >
        Current Redux Count: <span>{props.count}</span>
        <br />
        <br />
        <button onClick={props.increment} className='increment'>
          Increment
        </button>
        <button onClick={props.reset} className='reset'>
          Reset
        </button>
        <button onClick={props.decrement} className='decrement'>
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps, { increment, reset, decrement })(
  InDeCre
);
