import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors'
import daisyui from 'daisyui'
import plugin from 'tailwindcss/plugin';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        primary: colors.zinc
      }
    }
  },


  plugins: [
    typography,
    containerQueries,
    aspectRatio,
    daisyui,
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.absolute-center': {
          top: "50%", left: "50%", transform: "translate(-50%, -50%)", position: "absolute"
        }
      })
    })

  ]
} satisfies Config;
