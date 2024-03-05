import  withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
 content: [
  "./src/**/*.{js,jsx,ts,tsx}",
   './components/**/*.{js,ts,jsx,tsx}',
 ],
 theme: {
  
   screens: {
     xs: '400px',
     sm: '600px',
     md: '900px',
     lg: '1200px',
     xl: '1536px',
   },
 },
 plugins: [
  require('tailwindcss-no-scrollbar')
 ],
});

