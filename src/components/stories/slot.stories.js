import React from "react";
import {storiesOf, action, linkTo} from "../../../.storybook/facade";
import Slot from "../Slot";


export const SLOT_WITH_NO_TALKS_SELECTED = getSlot('15h35-17h18',
  [{id: 2, text: 'This My Super Pitch', fondation: 'Back', selected: false},
    {id: 3, text: 'This my second xke', fondation: 'Craft', selected: false}],
    linkTo('Slots', 'Slot with one selected talks'));

export const SLOT_WITH_ONE_TALK_SELECTED = getSlot('15h35-17h18',
  [{id: 2, text: 'This My Super Pitch', fondation: 'Back', selected: true},
    {id: 3, text: 'This my second xke', fondation: 'Craft', selected: false}]);

storiesOf('Slots', module)
  .add('Slot with no selected talks', () => {
    return SLOT_WITH_NO_TALKS_SELECTED;
  })
  .add('Slot with one selected talks', () => {
    return SLOT_WITH_ONE_TALK_SELECTED;
  });

function getSlot(period, talks, onClick=action('onClick'), refreshSlot=('refreshSlot')) {
  return <Slot period={period} talks={talks} onClick={onClick} refreshSlot={refreshSlot}/>;
}
