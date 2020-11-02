import React from 'react';
import FashionPresenter from './fashion/FashionPresenter';
import GoodsPresenter from './goods/GoodsPresenter';
import LocationPresenter from './location/LocationPresenter';
import MainPresenter from './main/MainPresenter';
import WeatherPresenter from './weather/WeatherPresenter';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MainPresenter} />
        <Route exact path="/goods" component={GoodsPresenter} />
        <Route exact path="/location" component={LocationPresenter} />
        <Route exact path="/fashion" component={FashionPresenter} />
        <Route exact path="/weather" component={WeatherPresenter} />
      </Switch>
    </>
  );
}

export default App;
