import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors'
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: colors.zinc
      }
    }
  },


  plugins: [typography, containerQueries, aspectRatio, daisyui]
} satisfies Config;
