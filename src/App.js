/* eslint-disable react/jsx-props-no-spreading */
import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Loading from "./components/loading"
import ErrorBoundary from "./components/external/errorBoundary"
import Page404 from "./pages/404/404"

const MerchantLayout = lazy(() => import("./components/layouts/MerchantLayout"))

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Router>
          <Switch>
            {/* <Route exact path="/" component={AuthenticationPage} /> */}
            <Route
              path="/merchant"
              // eslint-disable-next-line react/jsx-props-no-spreading
              render={(props) => (
                <MerchantLayout
                  {...props}
                  // user={state.user}
                />
              )}
            />
            {/* <Route path="/signin" component={Signup} /> */}
            <Route component={Page404} />
            {/* <Route exact path="*" component={Page404} /> */}
          </Switch>
        </Router>
        {/* <Header />
      <Footer /> */}
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
