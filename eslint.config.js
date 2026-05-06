import js from "@eslint/js";
import importSort from "eslint-plugin-simple-import-sort";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import vueEslintParser from "vue-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                computed: "readonly",
                defineEmits: "readonly",
                defineExpose: "readonly",
                defineProps: "readonly",
                onMounted: "readonly",
                onUnmounted: "readonly",
                reactive: "readonly",
                ref: "readonly",
                shallowReactive: "readonly",
                shallowRef: "readonly",
                toRef: "readonly",
                toRefs: "readonly",
                watch: "readonly",
                watchEffect: "readonly",
            },
        },
        name: "my/vue/setup",
        plugins: {
            vue: pluginVue,
        },
    },
    {
        files: ["**/*.{ts,tsx,vue}" /* '*.js' */],
        rules: {
            ...js.configs.recommended.rules,
            ...pluginVue.configs["flat/recommended"].rules,
            "no-unused-vars": "off",
            "no-undef": "warn",
            "no-console": "error",
            "simple-import-sort/imports": "error",
            "simple-import-sort/exports": "error",
            "vue/valid-define-emits": "error",
        },
        languageOptions: {
            parser: vueEslintParser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: {
                    jsx: true,
                },
                extraFileExtensions: [".vue"],
                parser: tsParser,
            },
        },
        plugins: { vue: pluginVue, "simple-import-sort": importSort },
    },
    {
        ignores: ["**/node_modules/**", "apps/docs-website/.vitepress/cache/"],
    }
];
