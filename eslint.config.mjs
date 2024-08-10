import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: globals.browser, $: "readonly",
    jQuery: "readonly", }},
  pluginJs.configs.recommended,
];

