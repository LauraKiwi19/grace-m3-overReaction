import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Landing from './Landing';
import Card from './Card';
import FooterPreview from './FooterPreview';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/card' component={Card} />
      </Switch>
      <FooterPreview />
    </div>
  );
};

export default App;
