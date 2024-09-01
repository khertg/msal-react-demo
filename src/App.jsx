import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { loginRequest } from "./authConfig";
import { InteractionStatus } from "@azure/msal-browser";
import HomePage from "./pages/HomePage";

function App({ instance }) {
  return (
    <MsalProvider instance={instance}>
      <Pages />
    </MsalProvider>
  );
}

function Pages() {
  const { instance, inProgress } = useMsal();
  const authenticated = useIsAuthenticated();

  useEffect(() => {
    console.warn("authenticated ??", authenticated);
    console.warn("inProgress ??", inProgress);

    if (!authenticated && inProgress === InteractionStatus.None) {
      console.warn("EXECUTED!!");
      instance
        .loginRedirect({
          ...loginRequest,
          prompt: "create",
        })
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
