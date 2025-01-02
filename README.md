# this is restaurant website link
https://pramyagit.github.io/restaurant-website/

step1:
   Install tailwindcss and its peer dependencies via npm, and create your tailwind.config.js file.
   > npm install -D tailwindcss postcss autoprefixer
   > npx tailwindcss init
step2:
   Add tailwindcss and autoprefixer to your postcss.config.js file, or wherever PostCSS is configured in your project.
     module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
} 
step3:
   Add the paths to all of your template files in your tailwind.config.js file.
     content: ["./src/**/*.{html,js}"],
step4:
   Add the @tailwind directives for each of Tailwind’s layers to your main/style CSS file
   @tailwind base;
@tailwind components;
@tailwind utilities;

step5:
Make sure your compiled CSS is included in the <head> (your framework might handle this for you), then start using Tailwind’s utility classes to style your content.
  <link href="/dist/main.css" rel="stylesheet">

sample like tailwind css (class:text-3xl font-bold underline):
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
  
