import { SignIn as ClerkSignIn } from '@clerk/clerk-react';

export default function SignIn() {
  return (
    <ClerkSignIn 
      appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-none"
        }
      }}
      routing="path"
      path="/sign-in"
      signUpUrl="/sign-up"
    />
  );
}