"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@base-ui/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex min-h-[cal(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md border-gray-200 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-black">
            Sign in
          </CardTitle>
          <CardDescription className="text-gray-600">
            Sign into your account to start tracking your job applications.
          </CardDescription>
        </CardHeader>
        <form className="space-y-4">
          <CardContent className="space-y-4">
            {/* <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary w-full p-1 rounded-sm"
              />
            </div> */}
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
                className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary w-full p-1 rounded-sm"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                minLength={8}
                className="border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary w-full p-1 rounded-sm"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign In"}
            </Button>
            <p className="text-sm text-gray-600 text-center">
              <span>{"Don't have an account"}</span> ? {" "}
              <Link
                href="/sign-up"
                className="font-medium text-primary hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
