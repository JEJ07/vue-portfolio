<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const navItems = [
  { label: 'About', to: '#about' },
  { label: 'Skills', to: '#skills' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' },
]

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('')

const updateActiveSection = () => {
  const sections = ['about', 'skills', 'projects', 'contact']
  const scrollPosition = window.scrollY + 100 // Offset for navbar height

  // Check if we're at the top of the page
  if (scrollPosition < 200) {
    activeSection.value = ''
    return
  }

  // Find which section is currently in view
  for (let i = sections.length - 1; i >= 0; i--) {
    const element = document.getElementById(sections[i])
    if (element) {
      const rect = element.getBoundingClientRect()
      const elementTop = window.scrollY + rect.top

      if (scrollPosition >= elementTop - 200) {
        activeSection.value = `#${sections[i]}`
        break
      }
    }
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  updateActiveSection()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateActiveSection() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scrollTo = (id) => {
  mobileMenuOpen.value = false
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const isActive = (to) => {
  return activeSection.value === to
}
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200'
        : 'bg-cream-50/80 backdrop-blur-sm',
    ]"
  >
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <button
          @click="scrollToTop"
          class="text-xl font-heading font-bold text-navy-900 hover:text-terracotta-500 transition-colors duration-300 cursor-pointer"
        >
          JE.
        </button>

        <!-- Desktop Nav -->
        <div class="hidden md:flex gap-8">
          <button
            v-for="item in navItems"
            :key="item.to"
            @click="scrollTo(item.to)"
            class="font-medium transition-colors duration-300 relative group cursor-pointer"
            :class="
              isActive(item.to) ? 'text-terracotta-500' : 'text-navy-700 hover:text-terracotta-500'
            "
          >
            {{ item.label }}
            <span
              class="absolute -bottom-1 left-0 h-0.5 bg-terracotta-500 transition-all duration-300"
              :class="isActive(item.to) ? 'w-full' : 'w-0 group-hover:w-full'"
            ></span>
          </button>
        </div>

        <!-- Resume Button (Desktop) -->
        <!-- <div class="hidden md:block">
          <button
            class="px-6 py-2 bg-terracotta-500 text-white rounded-lg hover:bg-terracotta-600 transition-all duration-300 font-medium shadow-sm hover:shadow-md cursor-pointer"
          >
            Resume
          </button>
        </div> -->

        <!-- Mobile btn-->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-navy-700 hover:text-terracotta-500 transition-colors duration-300 cursor-pointer"
        >
          <Menu v-if="!mobileMenuOpen" size="24" />
          <X v-else size="24" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden py-4 border-t border-cream-200 bg-cream-50/95 backdrop-blur-md"
      >
        <div class="flex flex-col gap-4">
          <button
            v-for="item in navItems"
            :key="item.to"
            @click="scrollTo(item.to)"
            class="text-left py-2 transition-colors duration-300 font-medium cursor-pointer"
            :class="
              isActive(item.to) ? 'text-terracotta-500' : 'text-navy-700 hover:text-terracotta-500'
            "
          >
            {{ item.label }}
          </button>

          <button
            class="px-6 py-3 bg-terracotta-500 text-white rounded-lg hover:bg-terracotta-600 transition-all duration-300 font-medium text-left cursor-pointer"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
