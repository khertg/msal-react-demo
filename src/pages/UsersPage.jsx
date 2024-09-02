import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import React from "react";

export default function UsersPage() {
  return (
    <>
      <div>UsersPage</div>

      <AuthenticatedTemplate>I am authenticated</AuthenticatedTemplate>
      <UnauthenticatedTemplate>NOT AUTHENTICATED</UnauthenticatedTemplate>
    </>
  );
}
