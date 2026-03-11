<script setup>
import { ref, onMounted } from 'vue'

// Import images at the top
import reviewaiImg from '@/assets/images/projs/reviewai.jpg'
import crimsonfindImg from '@/assets/images/projs/crimsonfind.jpg'

const projects = [
  {
    id: 1,
    title:
      'ReviewAI: An ML-Based Fake Review Detection Using NLP, SVM, Random Forest, and Deep Learning',
    description:
      'A comprehensive solution for detecting fake reviews using advanced machine learning techniques.',
    technologies: ['Python', 'Django', 'MYSQL'],
    color: 'terracotta',
    codeUrl: 'https://github.com/JEJ07/2025-CP_ReviewAI',
    image: reviewaiImg, 
  },
  {
    id: 2,
    title: 'SaasCaterPro: Catering Management System',
    description:
      'A catering management system that handles online orders, menu management, and customer feedback.',
    technologies: ['PHP', 'LARAVEL', 'MYSQL'],
    color: 'sage',
    codeUrl: 'https://github.com/Heavenly-Potato-Cult/SaasCaterPro',
    image: null,
  },
  {
    id: 3,
    title: 'CrimsonFinds: A lost and found mobile app',
    description:
      'A mobile app that connects people who have lost items with those who have found them.',
    technologies: ['Python', 'KivyMD', 'MySQL'],
    color: 'navy',
    codeUrl: 'https://github.com/JEJ07/CrimsonFindsApp',
    image: crimsonfindImg,
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description:
      'Custom content management system for creative professionals with dynamic portfolio showcase.',
    technologies: ['PHP', 'LARAVEL', 'MYSQL'],
    color: 'navy',
    codeUrl: 'https://github.com/JEJ07/portfolioproj',
    image: null,
  },
]

const sectionRef = ref(null)
const isVisible = ref(false)

const handleImageError = (event, project) => {
  console.log(`Image failed to load for project ${project.id}`)
  event.target.style.display = 'none'
  project.image = null
}

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
  <section id="projects" ref="sectionRef" class="py-24 bg-cream-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-16">
        <div class="flex items-center gap-8 mb-8">
          <span class="text-terracotta-500 text-sm font-medium">03</span>
          <div class="h-px bg-cream-300 flex-1"></div>
          <span class="text-navy-400 text-sm font-medium tracking-widest">WORKS</span>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="space-y-24">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="grid lg:grid-cols-2 gap-16 items-center"
          :class="index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''"
        >
          <!-- Project Image/Visual -->
          <div
            class="relative transition-all duration-700"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${index * 0.2}s` }"
          >
            <div class="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream-200 shadow-lg">
              <!-- Project Image -->
              <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                @error="(event) => handleImageError(event, project)"
                class="w-full h-full object-cover"
                @load="() => console.log(`Image loaded successfully: ${project.image}`)"
              />

              <!-- Placeholder when no image -->
              <div
                v-if="!project.image"
                class="absolute inset-0 flex flex-col items-center justify-center"
                :class="{
                  'bg-terracotta-100': project.color === 'terracotta',
                  'bg-sage-100': project.color === 'sage',
                  'bg-navy-100': project.color === 'navy',
                }"
              >
                <!-- Project Number Circle -->
                <div
                  class="w-32 h-32 rounded-full flex items-center justify-center text-6xl font-bold mb-6"
                  :class="{
                    'bg-terracotta-500 text-white': project.color === 'terracotta',
                    'bg-sage-500 text-white': project.color === 'sage',
                    'bg-navy-500 text-white': project.color === 'navy',
                  }"
                >
                  {{ String(project.id).padStart(2, '0') }}
                </div>

                <!-- Placeholder Text -->
                <div class="text-center px-8">
                  <div
                    class="text-sm font-medium mb-2"
                    :class="{
                      'text-terracotta-600': project.color === 'terracotta',
                      'text-sage-600': project.color === 'sage',
                      'text-navy-600': project.color === 'navy',
                    }"
                  >
                    IMAGE CURRENTLY NOT AVAILABLE
                  </div>
                  <div class="text-xs text-navy-400">Project preview coming soon</div>
                </div>
              </div>

              <!-- Hover overlay -->
              <div
                class="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 cursor-pointer"
              ></div>
            </div>
          </div>

          <!-- Project Content -->
          <div
            class="transition-all duration-700 space-y-6"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${index * 0.2 + 0.1}s` }"
          >
            <!-- Project Title -->
            <h3 class="text-2xl lg:text-3xl font-heading font-medium text-navy-900 leading-tight">
              {{ project.title }}
            </h3>

            <!-- Project Description -->
            <p class="text-lg text-navy-600 leading-relaxed">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-3 py-1 bg-cream-200 text-navy-700 text-sm font-medium rounded-full tracking-wide"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-4 pt-4">
              <a
                target="_blank"
                :href="project.codeUrl"
                class="flex items-center gap-2 px-6 py-3 bg-terracotta-500 text-white rounded-lg hover:bg-terracotta-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md cursor-pointer"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
