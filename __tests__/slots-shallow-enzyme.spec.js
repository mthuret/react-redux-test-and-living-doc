jest.disableAutomock();

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import spy from 'expect';

import { Slot } from '../src/components/Slot';
import ListItem from 'material-ui/lib/lists/list-item';
import styles from 'material-ui/lib/styles';

const colors = styles.Colors;

function setup() {
  let props = {
    period: 'period',
    talks: [{
      id: 2,
      text: 'text',
      fondation: 'Back',
      selected: false
    },
      {
        id: 3,
        text: 'text',
        fondation: 'Craft',
        selected: false
      }],
    onClick: spy.createSpy()
  };

  let output = shallow(<Slot {...props} />);

  return {
    props,
    output
  };
}

describe('lot component - the enzyme dom output approach', () => {
  it('Should include an <ul> containing slots and talks', function () {
    const { output } = setup();

    let talk = output.find(ListItem);

    expect(talk).to.have.length(2);
    expect(talk.first().prop('primaryText')).to.equal('text');

    let avatar = talk.first().prop('leftAvatar');

    expect(avatar.props.backgroundColor).to.equal(colors.red400);
    expect(avatar.props.children).to.equal('Back');
  });

  it('should send choosen talks', function () {
    const { output, props } = setup();

    let submitTalk = output.find(ListItem).first();

    expect(props.onClick.calls.length).to.equal(0);

    submitTalk.simulate('click');

    expect(props.onClick.calls.length).to.equal(1);
  });

});

