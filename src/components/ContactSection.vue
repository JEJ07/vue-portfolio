<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const sectionRef = ref(null)
const isVisible = ref(false)

const socialLinks = [
  {
    name: 'Email',
    icon: 'mail',
    url: 'mailto:jjohnemman@gmail.com',
    label: 'Email',
  },
  {
    name: 'GitHub',
    icon: 'github',
    url: 'https://github.com/JEJ07',
    label: 'GitHub',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/john-emman-juaquera-79a09b3b1/',
    label: 'LinkedIn',
  },
  {
    name: 'Resume',
    icon: 'file-text',
    url: '/resume.pdf',
    label: 'Resume',
  },
]

const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Please fill in all fields')
    return
  }

  isSubmitting.value = true

  try {
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${form.value.name}`)
    const body = encodeURIComponent(
      `Name: ${form.value.name}\n` +
        `Email: ${form.value.email}\n\n` +
        `Message:\n${form.value.message}`,
    )

    const mailtoLink = `mailto:jjohnemman@gmail.com?subject=${subject}&body=${body}`
    window.location.href = mailtoLink

    // Reset form after a short delay
    setTimeout(() => {
      form.value = { name: '', email: '', message: '' }
      isSubmitting.value = false
    }, 1000)
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('There was an error sending your message. Please try again.')
    isSubmitting.value = false
  }
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
  <section id="contact" ref="sectionRef" class="py-24 bg-cream-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section header -->
      <div class="mb-16">
        <div class="flex items-center gap-8 mb-8">
          <span class="text-terracotta-500 text-sm font-medium">04</span>
          <div class="h-px bg-cream-300 flex-1"></div>
          <span class="text-navy-400 text-sm font-medium tracking-widest">CONTACT</span>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Left Content -->
        <div
          class="transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <h2 class="text-4xl lg:text-5xl font-heading font-medium leading-tight mb-8">
            <span class="text-navy-900">Let's build something </span>
            <span class="text-terracotta-500">together.</span>
          </h2>

          <p class="text-lg text-navy-600 leading-relaxed mb-12">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>

          <!-- Social Links -->
          <div class="flex flex-wrap gap-4">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              target="_blank"
              class="flex items-center gap-2 px-4 py-3 bg-cream-200 text-navy-700 rounded-lg hover:bg-cream-300 transition-all duration-300 font-medium"
            >
              <!-- Email Icon -->
              <svg
                v-if="link.icon === 'mail'"
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

              <!-- GitHub Icon -->
              <svg
                v-else-if="link.icon === 'github'"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>

              <!-- LinkedIn Icon -->
              <svg
                v-else-if="link.icon === 'linkedin'"
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>

              <!-- Resume/File Icon -->
              <svg
                v-else-if="link.icon === 'file-text'"
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>

              {{ link.label }}
            </a>
          </div>
        </div>

        <!-- Contact Form -->
        <div
          class="transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label for="name" class="block text-sm font-medium text-navy-400 tracking-wider mb-2">
                NAME
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="Your name"
                required
                class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-cream-300 text-navy-900 placeholder-navy-400 focus:border-terracotta-500 focus:outline-none transition-colors text-lg"
              />
            </div>

            <!-- Email Field -->
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-navy-400 tracking-wider mb-2"
              >
                EMAIL
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="your@email.com"
                required
                class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-cream-300 text-navy-900 placeholder-navy-400 focus:border-terracotta-500 focus:outline-none transition-colors text-lg"
              />
            </div>

            <!-- Message Field -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-navy-400 tracking-wider mb-2"
              >
                MESSAGE
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                placeholder="Tell me about your project..."
                required
                class="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-cream-300 text-navy-900 placeholder-navy-400 focus:border-terracotta-500 focus:outline-none transition-colors text-lg resize-none"
              />
            </div>

            <!-- Submit Button -->
            <div class="pt-6">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full flex items-center justify-center gap-2 px-8 py-4 hover:cursor-pointer bg-navy-700 text-white rounded-lg hover:bg-navy-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium text-lg"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else>Sending...</span>

                <svg
                  v-if="!isSubmitting"
                  class="w-5 h-5 transform transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
