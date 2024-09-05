import { clerkMiddleware } from "@clerk/nextjs/server";
const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default clerkMiddleware(async (req, res, next) => {
  // Your Clerk logic here

  });

