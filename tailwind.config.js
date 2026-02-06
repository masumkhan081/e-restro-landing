/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./content/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        "surface-2": "hsl(var(--surface-2))",
        fg: "hsl(var(--fg))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",

        brand: "hsl(var(--brand))",
        "brand-fg": "hsl(var(--brand-fg))",

        accent: "hsl(var(--accent))",
        "accent-2": "hsl(var(--accent-2))",

        success: "hsl(var(--success))",
        danger: "hsl(var(--danger))",
      },

      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
      },

      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },

      /* Typography scale as named tokens (so you don't invent sizes) */
      fontSize: {
        h1: ["3rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h3: ["1.5rem", { lineHeight: "1.2" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
};
