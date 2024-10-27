"use client";
import { Button } from "apps/admin/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "apps/admin/src/components/ui/card";
import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import { Loader2Icon, User2Icon } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="grid w-full grow items-center px-4 sm:justify-center">
      <SignIn.Root>
        <Clerk.Loading>
          {(isGlobalLoading) => (
            <>
              <SignIn.Step name="start">
                <Card className="border-0 shadow-none w-full sm:w-96 flex flex-col">
                  <CardHeader className="flex flex-col items-center space-y-4">
                    <CardTitle>Sign in</CardTitle>
                    <CardDescription>
                      Welcome back! Please sign in to continue
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-y-4">
                    <Clerk.Connection name="google" asChild>
                      <Button
                        size="sm"
                        variant="outline"
                        type="button"
                        disabled={isGlobalLoading}
                      >
                        <Clerk.Loading scope="provider:google">
                          {(isLoading) =>
                            isLoading ? (
                              <Loader2Icon className="size-4 animate-spin" />
                            ) : (
                              <span className="flex items-center gap-2">
                                <User2Icon className="size-4" />
                                <p>Google</p>
                              </span>
                            )
                          }
                        </Clerk.Loading>
                      </Button>
                    </Clerk.Connection>
                  </CardContent>
                  <CardFooter>
                    <div className="grid w-full gap-y-4">
                      <Button variant="link" size="sm" asChild>
                        <Link href="/sign-up">
                          Don&apos;t have an account? Sign up
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </SignIn.Step>
            </>
          )}
        </Clerk.Loading>
      </SignIn.Root>
    </div>
  );
}
