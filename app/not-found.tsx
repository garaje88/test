import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#2b4162] p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-2/3 h-1/2 bg-gradient-to-b from-purple-500/20 via-fuchsia-500/20 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-gradient-to-t from-blue-600/20 via-violet-500/20 to-transparent rounded-full blur-3xl" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-48 h-24 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transform -rotate-12 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-24 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 transform rotate-12 animate-pulse delay-300" />
      
      {/* Star elements */}
      <div className="absolute bottom-32 left-1/4 text-white/20 text-2xl">✧</div>
      <div className="absolute top-24 right-1/3 text-white/20 text-xl">✦</div>
      <div className="absolute top-1/2 left-16 text-white/20 text-xl">✧</div>

      <div className="relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-7xl font-bold text-white">404</h1>
          <h2 className="text-3xl font-semibold text-slate-200">Página no encontrada</h2>
          <p className="text-slate-300 max-w-md mx-auto">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            asChild
            className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm transition-all duration-300 group relative overflow-hidden"
          >
            <Link href="/">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <Home className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Ir al inicio</span>
            </Link>
          </Button>
        </div>

        {/* Animated 404 element */}
        <div className="relative w-64 h-64 mx-auto mt-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <span className="text-9xl font-bold text-slate-300 opacity-20 animate-pulse">{'{'}</span>
              <span className="text-6xl font-bold text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">404</span>
              <span className="text-9xl font-bold text-blue-400 opacity-20 animate-pulse">{'}'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}