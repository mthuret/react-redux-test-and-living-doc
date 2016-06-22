jest.disableAutomock();
jest.mock('../.storybook/facade');

import React from "react";
import {shallow} from "enzyme";
import {expect} from "chai";
import ListItem from "material-ui/lib/lists/list-item";
import styles from 'material-ui/lib/styles';
const colors = styles.Colors;

import {SLOT_WITH_NO_TALKS_SELECTED} from "../src/components/stories/slot.stories";

function setup() {
  let output = shallow(SLOT_WITH_NO_TALKS_SELECTED);
  return {
    output
  };
}

describe('Slot component - the living documentation approach', () => {
  it('Living documentation Storybook', function () {
    const {output} = setup();

    let talk = output.find(ListItem);

    expect(talk).to.have.length(2);
    expect(talk.first().prop('primaryText')).to.equal('This My Super Pitch');

    let avatar = talk.first().prop('leftAvatar');

    expect(avatar.props.children).to.equal('Back');
    expect(avatar.props.backgroundColor).to.equal(colors.red400);
  });
});

