import { createMiddleware } from "@tanstack/react-start";
import { redirect } from "@tanstack/react-router";
import { getWebRequest } from "@tanstack/react-start/server";
import { auth } from "./auth";

export const isAuthenticated = createMiddleware({
  type: "function",
}).server(async ({ next }) => {
  try {
    const request = await getWebRequest();
    if (!request?.headers) {
      throw redirect({ to: "/login" });
    }

    const session = await auth.api.getSession({ headers: request.headers });

    if (!session) {
      throw redirect({ to: "/login" });
    }

    return next({
      context: {
        userId: session.user.id,
        user: session.user,
      },
    });
  } catch (error) {
    if (error && typeof error === "object" && "href" in error) {
      throw error;
    }

    console.error("Auth middleware error:", error);
    throw redirect({ to: "/login" });
  }
});
