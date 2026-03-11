<script setup>
import { ref, onMounted } from 'vue'

const skillCategories = [
  {
    title: 'FRONTEND',
    color: 'sage',
    skills: [
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'TailwindCSS', icon: 'tailwindcss' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Vue.js', icon: 'vue' },
    ],
  },
  {
    title: 'BACKEND',
    color: 'navy',
    skills: [
      { name: 'Laravel', icon: 'laravel' },
      { name: 'PHP', icon: 'php' },
      { name: 'Django', icon: 'django' },
      { name: 'Python', icon: 'python' },
      { name: 'REST APIs', icon: 'api' },
    ],
  },
  {
    title: 'TOOLS',
    color: 'terracotta',
    skills: [
      { name: 'Git', icon: 'git' },
      { name: 'WordPress', icon: 'wordpress' },
      { name: 'Figma', icon: 'figma' },
    ],
  },
]

// Create infinite scroll data by repeating skills
const infiniteSkills = [
  'LARAVEL',
  'GIT',
  'WORDPRESS',
  'FIGMA',
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'VUE.JS',
  'LARAVEL',
  'PHP',
  'REST APIS',
  'GIT',
  'WORDPRESS',
  'FIGMA',
  'HTML',
  'CSS',
  'JAVASCRIPT',
  'VUE.JS',
  'LARAVEL',
  'GIT',
  'WORDPRESS',
  'FIGMA',
  'HTML',
  'CSS',
]

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
  <section id="skills" ref="sectionRef" class="py-24 bg-cream-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-16">
        <div class="flex items-center gap-8 mb-8">
          <span class="text-terracotta-500 text-sm font-medium">02</span>
          <div class="h-px bg-cream-300 flex-1"></div>
          <span class="text-navy-400 text-sm font-medium tracking-widest">TECHNOLOGIES</span>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left content -->
        <div
          class="transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <h2 class="text-4xl lg:text-5xl font-heading font-medium leading-tight mb-8">
            <span class="text-navy-900">Full-stack capabilities with a focus on modern, </span>
            <span class="text-sage-500">maintainable</span>
            <span class="text-navy-900"> solutions.</span>
          </h2>
        </div>

        <!-- Right content - Skill categories -->
        <div
          class="space-y-8 transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <div
            v-for="(category, catIndex) in skillCategories"
            :key="category.title"
            class="transition-all duration-300"
            :style="{ transitionDelay: `${catIndex * 0.1}s` }"
          >
            <!-- Category title -->
            <div class="mb-3">
              <span
                class="text-sm font-medium tracking-wider"
                :class="{
                  'text-sage-600': category.color === 'sage',
                  'text-navy-600': category.color === 'navy',
                  'text-terracotta-600': category.color === 'terracotta',
                }"
              >
                {{ category.title }}
              </span>
            </div>

            <!-- Skills tags -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="skill in category.skills"
                :key="skill.name"
                class="px-4 py-2 bg-cream-200 text-navy-700 text-sm font-medium rounded-full hover:bg-cream-300 transition-colors cursor-default"
              >
                {{ skill.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Infinite scrolling skills marquee -->
    <div class="mt-24 overflow-hidden bg-cream-100 py-4">
      <div class="flex animate-scroll-left whitespace-nowrap">
        <div
          v-for="(skill, index) in infiniteSkills"
          :key="`left-${skill}-${index}`"
          class="flex-shrink-0 mx-8 text-cream-400 font-heading font-bold text-2xl lg:text-3xl tracking-wider select-none"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll-left {
  animation: scroll-left 60s linear infinite;
  display: flex;
}

/* Pause animation on hover */
.animate-scroll-left:hover {
  animation-play-state: paused;
}
</style>
