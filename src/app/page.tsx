// import { Button } from "@/components/ui/button";
import { Play, Sparkles, DollarSign, Users, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Img from "../../public/images/img.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent"
          >
            Geniflix
          </Link>
          <div className="space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-red-500 hover:bg-white/10"
            >
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
          poster="/placeholder.svg?height=1080&width=1920"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        <div className="container mx-auto px-4 relative z-10 space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold max-w-4xl mx-auto bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            The Future of Entertainment is Here
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Experience AI-generated content like never before. Create, watch,
            and earn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white hover:bg-gray-200 text-black text-lg group"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Start Watching
            </Button>
            <Button
              size="lg"
              className="border-2 hover:bg-white hover:text-black text-lg group"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Create Content
            </Button>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 flex items-center group cursor-pointer">
            Trending Now
            <ChevronRight className="h-6 w-6 ml-2 transition-transform group-hover:translate-x-1" />
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={Img}
                  alt={`Trending Content ${i + 1}`}
                  width={600}
                  height={400}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      AI Masterpiece {i + 1}
                    </h3>
                    <p className="text-sm text-gray-300 mb-2">
                      2024 • AI Generated • 4K
                    </p>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                    >
                      <Play className="h-4 w-4 mr-2" /> Watch Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Features */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20 blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Create the Future of Entertainment
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Monetize Your Creativity",
                description:
                  "Earn revenue from views, subscriptions, and AI content licensing",
              },
              {
                icon: Sparkles,
                title: "Advanced AI Tools",
                description:
                  "Access cutting-edge AI models for video, audio, and effects generation",
              },
              {
                icon: Users,
                title: "Global Distribution",
                description: "Reach millions of viewers worldwide instantly",
              },
            ].map((feature, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-purple-600/10 rounded-xl blur group-hover:blur-xl transition-all duration-300" />
                <div className="relative bg-black/50 backdrop-blur-sm p-8 rounded-xl border border-white/10 space-y-4 hover:border-white/20 transition-all duration-300">
                  <feature.icon className="h-12 w-12 text-white" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-purple-600/20 blur-3xl" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Start Creating Today
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the next generation of content creators and shape the future of
            entertainment
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-lg px-8"
          >
            Begin Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/80 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                title: "Platform",
                links: ["About", "Careers", "Press"],
              },
              {
                title: "Create",
                links: ["Get Started", "Guidelines", "Resources"],
              },
              {
                title: "Support",
                links: ["Help Center", "Contact", "Terms"],
              },
              {
                title: "Connect",
                links: ["Twitter", "Discord", "Instagram"],
              },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4 text-gray-300">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href="#"
                        className="text-gray-500 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Geniflix. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
