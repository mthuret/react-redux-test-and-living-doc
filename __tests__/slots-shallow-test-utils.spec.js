jest.disableAutomock();

import React from 'react';
import TestUtils   from 'react-addons-test-utils';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import spy from 'expect';
import wrap from './wrapper'
import { Slot } from '../src/components/Slot';
import List from 'material-ui/lib/lists/list';
import styles from 'material-ui/lib/styles';

import expect2 from 'expect';

import expectJSX from 'expect-jsx';

expect2.extend(expectJSX);

const colors = styles.Colors;

import util from 'util';


var Wrapper = React.createClass({
  render: function () {
    return (
      <div>{this.props.children}</div>
    );
  }
});

describe('Slot component the test utils shallow output approach', () => {

  const Greeting = ({name}) => {
    return <div>Hello {name}</div>
  };

  function setup() {
    let props = {
      period: 'period',
      talks: [{
        id: 2,
        text: 'description talk 2',
        fondation: 'Back',
        selected: false
      },
        {
          id: 3,
          text: 'description talk 3',
          fondation: 'Craft',
          selected: false
        }],
      onClick: spy.createSpy()
    };

    const renderer = TestUtils.createRenderer();
    renderer.render(<Slot {...props} />);
    const output = renderer.getRenderOutput();

    return {
      props,
      renderer,
      output
    };
  }

  it('Structure', () => {
    const {output} = setup();


    expect(output.props.children.props.children.props.className).to.equal('talks');
    expect(output.props.children.props.children.key).to.equal('period');
    expect(output.props.children.props.children.type).to.equal(List);


   /* expect2(output).toEqualJSX(
      <div>
        <Paper>
          <List className='talks' key='period' subheader={<HeaderSlot period='period' />}
                ref='period'>
            <div key='2'>
              <ListItem />
            </div>
            <div key=''>
              <ListItem />
            </div>
          </List>
        </Paper>
      </div>);*/

  });

  it('Easy', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Greeting name='Marie'/>);
    const output = renderer.getRenderOutput();

    expect2(output).toEqualJSX(<div>Hello Marie</div>);
  });

});


