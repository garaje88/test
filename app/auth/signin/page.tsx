"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { handleGithubSignin, handleGoogleSignin } from "@/app/actions/authActions";
import { Button } from "@/components/ui/button";

export default function SignIn() {
    
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#2b4162] p-4 relative overflow-hidden">
      {/* Decorative wave elements inspired by the social media layout */}
      <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-gradient-to-b from-purple-500/20 via-fuchsia-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-blue-600/20 via-violet-500/20 to-transparent rounded-full blur-3xl" />
      
      {/* Floating card elements */}
      <div className="absolute top-20 left-10 w-48 h-24 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transform -rotate-12 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-24 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transform rotate-12 animate-pulse delay-300" />
      
      {/* Star elements from the original design */}
      <div className="absolute bottom-32 left-1/4 text-white/20 text-2xl">✧</div>
      <div className="absolute top-24 right-1/3 text-white/20 text-xl">✦</div>
      <div className="absolute top-1/2 left-16 text-white/20 text-xl">✧</div>

      <Card className="w-full max-w-md mx-auto relative backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl">
        <CardHeader className="space-y-3 text-center pb-0">
          <div className="flex justify-center">
            {/* Logo container with enhanced styling */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm shadow-xl flex items-center justify-center p-5 border border-white/20">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center gap-1">
                  <span className="text-4xl font-bold text-slate-300">{'{'}</span>
                  <div className="w-2 h-2 bg-slate-300 rounded-sm absolute top-1/3 left-1/2 -translate-x-4" />
                  <div className="w-1 h-1 bg-slate-300 rounded-sm absolute top-1/2 left-1/2 -translate-x-6" />
                  <span className="text-4xl font-bold text-blue-400">{'}'}</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-sm absolute top-1/3 right-1/2 translate-x-4" />
                  <div className="w-1 h-1 bg-blue-400 rounded-sm absolute top-1/2 right-1/2 translate-x-6" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white mt-6">redde app</h2>
          <p className="text-slate-300 text-sm">
          Continue with your preferred account
          </p>
        </CardHeader>
        <CardContent className="space-y-4 pt-8">
            <form className="w-full" action={handleGoogleSignin}> 
                <Button
                    className="w-full h-12 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm transition-all duration-300 group relative overflow-hidden"
                    variant="outline"
                    type="submit"
                >
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <svg className="w-5 h-5 mr-2 relative z-10" viewBox="0 0 24 24">
                    <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                    />
                    <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                    />
                    <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                    />
                    <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                    />
                    </svg>
                    <span className="relative z-10">Continue with Google</span>
                </Button>
            </form>

            <form className="w-full" action={handleGithubSignin}> 
            <Button
                className="w-full h-12 bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm transition-all duration-300 group relative overflow-hidden"
                variant="outline"
                type="submit"
            >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <GitHubLogoIcon className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Continue with GitHub</span>
            </Button>
            </form>

          <div className="pt-6 text-center">
            <p className="text-sm text-slate-300">
            By continuing, you agree to our {' '}
              <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                Terms of Service
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
    );
}
