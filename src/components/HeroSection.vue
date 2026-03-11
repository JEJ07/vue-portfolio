<script setup>
import { ref, onMounted } from 'vue'

const heroRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  })

  if (heroRef.value) {
    observer.observe(heroRef.value)
  }
})

const scrollTo = (id) => {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section
    ref="heroRef"
    class="min-h-screen bg-cream-50 flex items-center justify-center relative overflow-hidden"
  >
    <!-- Background Decorative Shapes -->
    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-20">
      <!-- Subtle background shapes for visual interest -->
      <div class="w-96 h-32 bg-sage-200 absolute right-32 bottom-16 rounded-lg"></div>
      <div class="w-48 h-48 bg-terracotta-200 rounded-full absolute right-10 top-10"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        
        <!-- Left Column - Text Content -->
        <div class="order-2 lg:order-1">
          <!-- Portfolio Label -->
          <div
            :class="[
              'text-sm tracking-widest text-navy-600 mb-8 transition-all duration-800 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ]"
          >
            PORTFOLIO / 2026
          </div>

          <!-- Main Title -->
          <h1
            :class="[
              'text-5xl lg:text-7xl font-heading font-bold mb-8 transition-all duration-800 delay-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
            ]"
          >
            <span class="text-navy-900 block">John Emman</span>
            <span class="text-terracotta-500 block">Juaquera</span>
          </h1>

          <!-- Description -->
          <p
            :class="[
              'text-lg text-navy-600 mb-12 leading-relaxed transition-all duration-800 delay-600',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ]"
          >
            Software developer crafting clean, purposeful digital experiences with modern web
            technologies.
          </p>

          <!-- CTA Buttons -->
          <div
            :class="[
              'flex flex-col sm:flex-row gap-4 transition-all duration-800 delay-800',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
            ]"
          >
            <button
              @click="scrollTo('#projects')"
              class="px-8 py-4 bg-navy-900 text-white rounded-lg font-medium hover:bg-navy-800 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              View Projects
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </button>

            <button
              @click="scrollTo('#contact')"
              class="px-8 py-4 border-2 border-navy-300 text-navy-700 rounded-lg font-medium hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>
        </div>

        <!-- Right Column - Profile Image -->
        <div 
          :class="[
            'order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
        >
          <div class="relative">
            <!-- Main profile image -->
            <div class="relative w-80 h-80 lg:w-96 lg:h-96">
              <img
                src="/src/assets/images/profile.jpg"
                alt="John Emman Juaquera"
                class="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              
              <!-- Decorative border -->
              <div class="absolute -inset-4 bg-gradient-to-br from-terracotta-200 to-sage-200 rounded-2xl -z-10 opacity-50"></div>
            </div>

            <!-- Floating decorative elements -->
            <div class="absolute -top-6 -right-6 w-12 h-12 bg-terracotta-400 rounded-full animate-float opacity-80"></div>
            <div class="absolute -bottom-4 -left-4 w-8 h-8 bg-sage-400 rounded-full animate-float animation-delay-1000 opacity-70"></div>
            <div class="absolute top-1/2 -left-8 w-6 h-6 bg-sand-400 rounded-full animate-float animation-delay-500 opacity-60"></div>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
      <div class="animate-bounce">
        <svg class="w-6 h-6 text-navy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </div>
  </section>
</template>
