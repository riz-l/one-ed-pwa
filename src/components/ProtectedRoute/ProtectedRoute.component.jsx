// Import: Dependencies
import React from "react";
import { Redirect, Route } from "react-router-dom";

// Import: Elements
import { Container } from "./ProtectedRoute.elements";

// Component: ProtectedRoute
export default function ProtectedRoute({
  component: Component,
  isLoggedIn,
  ...rest
}) {
  return (
    <Container>
      <Route
        {...rest}
        render={(props) => {
          if (isLoggedIn) {
            return <Component {...rest} {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/unauthorized",
                  state: {
                    from: props.location,
                  },
                }}
              />
            );
          }
        }}
      />
    </Container>
  );
}
