import { ClerkProvider } from '@clerk/clerk-react';

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!publishableKey || typeof publishableKey !== 'string') {
  throw new Error('Missing or invalid Clerk Publishable Key');
}

export { publishableKey };