jest.disableAutomock();

import React   from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import spy from 'expect';
import wrap from './wrapper'
import { ChooseSlots } from '../src/components/ChooseSlots';
import AppBar from 'material-ui/lib/app-bar';

describe('Slot component - the static output approach', () => {

  function setup() {
    let props = {route:{checkVote:true}, slots:[{
      period: 'period',
      talks: [{
        id: 2,
        text: 'description talk 2',
        fondation: 'Back',
        selected: false
      },
        {
          id: 3,
          text: 'description talk ',
          fondation: 'Craft',
          selected: false
        }],
      onClick: spy.createSpy()
    }]};

{/*
    let output = mount(<ChooseSlots {...props} />);
*/}
    let shallowOutput = shallow(<ChooseSlots {...props} />);

    return {
      props,
/*
      output,
*/
      shallowOutput
    };
  }

  it('Structure', () => {
    const {output, shallowOutput} = setup();

    let appBar = shallowOutput.find(AppBar);
    expect(appBar.first().prop('title')).to.equal('XKE Agenda');

   /* appBar = output.find(AppBar);
    expect(appBar.first().text()).to.contain('XKE Agenda');*/
  });

});
