import Slot from './Slot';
import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';

export const ChooseSlots = React.createClass({
  render: function () {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <AppBar title='XKE Agenda'
                  showMenuIconButton={false}
                  style={{position: 'fixed', backgroundColor: '#6B205F'}}
                  id='appBar'
          />
        </div>
        <div className='row' style={{paddingTop: 60}}>
          {this.props.slots.map(slot =>
              <div className='col-md-4'>
                <Slot
                    key={slot.period}
                    {...slot}
                    id='slots'
                />
              </div>
          )}
        </div>
      </div>
    );
  }
});

