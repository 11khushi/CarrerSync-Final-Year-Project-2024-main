module.exports = ({ env }) => ({
  plugins: [
    require('tailwindcss')({
      config: './src/css/tailwind.config.js',
     
    }),
    require('autoprefixer')(),
    require('flowbite/plugin')
   
    ,
  
  ],
  content: [
    "./node_modules/flowbite/**/*.js"
]
})