import React from 'react';
import './App.scss';
import Hero from 'components/Hero/Hero';

import Icon from 'components/elements/Icon/Icon';
import 'components/elements/Icon/Icon.scss';

import jQuery from 'assets/icons/jquery.svg';
import Angular from 'assets/icons/angular.svg';
import JavaScript from 'assets/icons/javascript.svg';
import ReactIcon from 'assets/icons/react.svg';

function App() {
  const JQueryIcon = () => <img src={jQuery} alt="jQuery" />;
  const AngularIcon = () => <img src={Angular} alt="Angular" />;
  const JavaScriptIcon = () => <img src={JavaScript} alt="JavaScript" />;
  const ReactJsIcon = () => <img src={ReactIcon} alt="React.js" />;

  return (
    <div className="App">
      <Hero />
      <div className="About">
        <Icon
          size="large"
          icon={JQueryIcon()}
        />
        <Icon
          size="large"
          icon={AngularIcon()}
        />
        <Icon
          size="large"
          icon={JavaScriptIcon()}
        />
        <Icon
          size="large"
          icon={ReactJsIcon()}
        />
      </div>
    </div>
  );
}

export default App;