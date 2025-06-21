import Link from "next/link"
import { ArrowRight, Gem, Star, Shield, Award, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen pastel-gradient-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pastel-gradient-2 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Gem className="h-16 w-16 text-soft-pink animate-bounce-soft" />
                <Sparkles className="h-6 w-6 text-soft-lavender absolute -top-2 -right-2 animate-pulse" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-soft-pink via-soft-purple to-soft-blue bg-clip-text text-transparent mb-6">
              Luxury Jewelry Collection
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Discover our exquisite collection of diamonds, pearls, and precious stones. Each piece is carefully
              crafted to perfection for the most discerning taste.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center pastel-button text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 pastel-gradient-3 opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose LuxuryGems</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We pride ourselves on offering the finest jewelry with exceptional service and craftsmanship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="pastel-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-soft-coral to-soft-pink rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-soft">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Premium Quality</h3>
                <p className="text-gray-600">Handpicked diamonds and precious stones with certified authenticity</p>
              </div>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="pastel-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-soft-blue to-soft-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-soft">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Lifetime Warranty</h3>
                <p className="text-gray-600">Comprehensive warranty and professional maintenance services</p>
              </div>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="pastel-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-soft-mint to-soft-sage rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-soft">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Craftsmanship</h3>
                <p className="text-gray-600">Created by master jewelers with decades of experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-soft-pink via-soft-lavender to-soft-blue opacity-90"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="pastel-card rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Ready to Find Your Perfect Piece?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Browse our exclusive collection and discover jewelry that tells your unique story
            </p>
            <Link
              href="/register"
              className="inline-flex items-center bg-gradient-to-r from-soft-coral to-soft-pink text-white px-8 py-4 rounded-full font-medium hover:from-soft-pink hover:to-soft-coral transition-all duration-300 shadow-lg hover:shadow-xl hover:transform hover:scale-105"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
