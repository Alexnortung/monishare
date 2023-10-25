import { defineConfig, presetUno, presetIcons } from 'unocss';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@unocss/transformer-directives';

export default defineConfig({
    presets: [presetUno(), presetIcons()],

    transformers: [transformerVariantGroup(), transformerDirectives()],

    theme: {
        borderRadius: {
            DEFAULT: '0.5rem',
        },
    },
});
