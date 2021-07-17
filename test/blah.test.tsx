import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as Introduction} from '../stories/Introduction.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Introduction />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
