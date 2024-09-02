import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import React from "react";

export default function RolesPage() {
  return (
    <>
      <div>RolesPage</div>

      <AuthenticatedTemplate>I am authenticated</AuthenticatedTemplate>
      <UnauthenticatedTemplate>NOT AUTHENTICATED</UnauthenticatedTemplate>
    </>
  );
}
