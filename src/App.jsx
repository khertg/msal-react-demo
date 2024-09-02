import {
  MsalAuthenticationTemplate,
  MsalProvider,
  useIsAuthenticated,
  useMsal,
} from "@azure/msal-react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { loginRequest } from "./authConfig";
import { InteractionStatus, InteractionType } from "@azure/msal-browser";
import HomePage from "./pages/HomePage";
import RolesPage from "./pages/RolesPage";
import UsersPage from "./pages/UsersPage";
import PageLayout from "./pages/PageLayout";

function App({ instance }) {
  return (
    <MsalProvider instance={instance}>
      <Pages />
    </MsalProvider>
  );
}

function ErrorComponent({ error }) {
  return <div>An Error Occured : {error}</div>;
}

function LoadingComponent({ error }) {
  return <div>Authenticating ...</div>;
}

function Pages() {
  const { instance, inProgress } = useMsal();
  const authenticated = useIsAuthenticated();

  useEffect(() => {
    console.warn("authenticated ??", authenticated);
    console.warn("inProgress ??", inProgress);

    // if (!authenticated) {
    //   console.warn("EXECUTED!!");
    //   instance
    //     .loginRedirect({
    //       ...loginRequest,
    //       prompt: "create",
    //     })
    //     .catch((error) => console.error(error));
    // }
  }, []);

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={loginRequest}
      errorComponent={ErrorComponent}
      loadingComponent={LoadingComponent}
    >
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/roles" element={<RolesPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </PageLayout>
    </MsalAuthenticationTemplate>
  );
}

export default App;
