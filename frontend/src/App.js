  import { Route, Switch } from "react-router-dom";
  import React from "react";
  import Navigation from "./components/Navigation";
  import ListingIndex from "./components/Listings/ListingIndex";
  import ListingShowPage from "./components/Listings/ListingShowPage";

  function App() {
    return (
      <>
        <Navigation />
        <Switch>
          <Route exact path="/" component={ListingIndex} />
          <Route exact path="/listings/:listingId" component={ListingShowPage} />
        </Switch>
      </>
    );
  }

  export default App;
