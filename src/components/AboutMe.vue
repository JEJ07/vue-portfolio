<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true
      }
    },
    { threshold: 0.2 },
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section id="about" ref="sectionRef" class="py-24 bg-cream-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section number and title -->
      <div class="mb-16">
        <div class="flex items-center gap-8 mb-8">
          <span class="text-terracotta-500 text-sm font-medium">01</span>
          <div class="h-px  bg-cream-300 flex-1"></div>
          <span class="text-navy-400 text-sm font-medium tracking-widest">ABOUT</span>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left content -->
        <div
          class="transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <!-- img prof -->
          <div class="mb-12">
            <div class="w-76 h-88 bg-cream-200 rounded-lg overflow-hidden">
              <img
                src="/src/assets/images/about.jpg"
                alt="Profile"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Main heading -->
          <h2 class="text-4xl lg:text-5xl font-heading font-medium leading-tight mb-8">
            <span class="text-navy-900">I build digital products at the intersection of </span>
            <span class="text-terracotta-500">design</span>
            <span class="text-navy-900"> and </span>
            <span class="text-sage-500">engineering</span>
            <span class="text-navy-900">, where craft meets utility.</span>
          </h2>
        </div>

        <!-- Right content -->
        <div
          class="space-y-8 transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <!-- Description paragraphs -->
          <div class="space-y-6 text-navy-600 text-lg leading-relaxed">
            <p>
              An aspiring web developer with a passion for clean, optimized web applications. Every line
              of code should serve a purpose, every interaction should feel natural.
            </p>
            <p>
              When I'm not coding, I explore new technologies, watch anime, play video games, and refine
              my understanding of user-centered design.
            </p>
          </div>

          <!-- Stats -->
          <div class="flex gap-16 pt-8">
            <div>
              <div class="text-3xl font-heading font-bold text-navy-900 mb-1">3+</div>
              <div class="text-navy-500 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div class="text-3xl font-heading font-bold text-navy-900 mb-1">10+</div>
              <div class="text-navy-500 text-sm uppercase tracking-wider">Projects Built</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
