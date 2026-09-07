import * as React from "react";
import { Button, buttonVariants } from "./components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Laptop, Cpu, Battery, Zap, ChevronRight } from "lucide-react";

export default function LaptopPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30">
      {/* --- Header / Navigation --- */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Laptop className="size-6 text-blue-500" />
            <span className="text-xl font-bold tracking-tight">ZENITH PRO</span>
          </div>

          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-slate-400 hover:text-white">
                  Specs
                </NavigationMenuTrigger>
                <NavigationMenuContent className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <NavigationMenuLink className="flex flex-col gap-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-muted">
                    <div className="text-sm font-medium">M3 Ultra Chip</div>
                    <p className="text-xs text-slate-500">
                      Unprecedented processing power.
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="flex flex-col gap-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-muted">
                    <div className="text-sm font-medium">Retina XDR</div>
                    <p className="text-xs text-slate-500">
                      1600 nits of peak brightness.
                    </p>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent text-slate-400",
                  )}
                >
                  Reviews
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-400 hover:text-white"
            >
              Support
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-500 text-white"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </header>

      {/* --- Hero Section --- */}
      <main className="relative flex flex-col items-center">
        {/* Decorative Glow */}
        <div className="absolute top-0 -z-10 h-[500px] w-full bg-[radial-gradient(circle_farthest-side_at_center,#1e3a8a33,transparent)]" />

        <section className="container flex flex-col items-center pt-24 pb-12 text-center md:pt-32">
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 mb-6">
            New Zenith M3 Chip is here
          </div>
          <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl">
            Power. In a <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Whole New Light.
            </span>
          </h1>
          <p className="mt-6 max-w-[600px] text-lg text-slate-400 md:text-xl">
            The thinnest, lightest laptop in its class, now supercharged by the
            M3 chip. Built for creators, engineered for speed.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="h-12 px-8 text-base bg-blue-600 hover:bg-blue-500"
            >
              Order Zenith Pro
              <ChevronRight className="ml-2 size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base border-slate-700 hover:bg-slate-800"
            >
              Watch the Film
            </Button>
          </div>
        </section>

        {/* --- Specs Grid --- */}
        <section className="container grid gap-6 px-4 py-24 md:grid-cols-3">
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-colors hover:border-blue-500/50">
            <Cpu className="mb-4 size-8 text-blue-500" />
            <h3 className="text-xl font-semibold text-white">M3 Processor</h3>
            <p className="mt-2 text-slate-400">
              8-core CPU and up to 10-core GPU for seamless multitasking.
            </p>
          </div>
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-colors hover:border-blue-500/50">
            <Battery className="mb-4 size-8 text-emerald-500" />
            <h3 className="text-xl font-semibold text-white">22h Battery</h3>
            <p className="mt-2 text-slate-400">
              Go all day and night with the most efficient chip ever built.
            </p>
          </div>
          <div className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-colors hover:border-blue-500/50">
            <Zap className="mb-4 size-8 text-amber-500" />
            <h3 className="text-xl font-semibold text-white">Thunderbolt 5</h3>
            <p className="mt-2 text-slate-400">
              Transfer data at speeds up to 80Gb/s across all your devices.
            </p>
          </div>
        </section>
      </main>

      {/* --- Footer / CTA --- */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 Zenith Electronics. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
