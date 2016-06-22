import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/votes.stories');
  require('../src/components/stories/slot.stories');
}

configure(loadStories, module);
