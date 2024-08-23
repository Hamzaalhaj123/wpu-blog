import plugin from "tailwindcss/plugin";

export default plugin(({ matchUtilities, theme }) => {
  matchUtilities(
    {
      "translate-s": (value) => ({
        "[dir='rtl'] &": {
          "--tw-translate-x": `calc(-1 * ${value})`,
          transform:
            "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        },
        "[dir='ltr'] &": {
          "--tw-translate-x": value,
          transform:
            "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        },
      }),
      "translate-e": (value) => ({
        "[dir='rtl'] &": {
          "--tw-translate-x": value,
          transform:
            "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        },
        "[dir='ltr'] &": {
          "--tw-translate-x": `calc(-1 * ${value})`,
          transform:
            "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
        },
      }),
    },
    { supportsNegativeValues: true, values: theme("inset") },
  );
});
