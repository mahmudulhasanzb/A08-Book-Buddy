import { createAuthClient } from 'better-auth/react';
export const authClient = createAuthClient({
  // Omitting baseURL auto detects the domain in both dev and prod
});

export const { signIn, signUp, useSession } = authClient;
