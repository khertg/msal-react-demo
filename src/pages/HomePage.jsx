import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import React from "react";

export default function HomePage() {
  return <>
  <AuthenticatedTemplate>
    I am authenticated
  </AuthenticatedTemplate>
  <UnauthenticatedTemplate>
    NOT AUTHENTICATED
  </UnauthenticatedTemplate>
  </>;
}
