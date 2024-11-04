import { SignUp as ClerkSignUp } from '@clerk/clerk-react';

export default function SignUp() {
  return (
    <ClerkSignUp 
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-none"
        }
      }}
      routing="path"
      path="/sign-up"
      signInUrl="/sign-in"
    />
  );
}