import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagesPromotionForm from "./Promotion/Form/Form";
import PagesPromotionSearch from "./Promotion/Search/Search";
import PagesSearchMakeup from "./Makeup/Search/SearchMakeup";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PagesPromotionSearch} exact />
        <Route path="/create" component={PagesPromotionForm} />
        <Route path="/edit/:id" component={PagesPromotionForm} />
        <Route path="/makeup" component={PagesSearchMakeup} />
      </Switch>
    </Router>
  );
};

export default Root;
