import { createFileRoute, redirect } from "@tanstack/react-router";

// French is the default language of the site.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/$lang", params: { lang: "fr" } });
  },
});