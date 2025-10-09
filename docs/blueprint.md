# **App Name**: DevPortfolio

## Core Features:

- Multilingual: Display the app translated into both Spanish and English using i18n.
- Interactive About Section: Showcase a professional biography, skills, and a timeline of work experience, all fully translated and presented with engaging UI elements.
- Project Showcase: List and display projects from a local data source (projectsData.ts), including images, titles, descriptions, tech stack, and links, with content translated for each project.
- Contact Form: Implement a contact form using React Hook Form and Zod for validation. The form includes fields for name, email, and message, with visual feedback and optional integration with Formspree or EmailJS. Translated texts based on selected language, send an emal on submit.
- Custom 404 Page: Create a custom 404 error page with translations for both Spanish and English, providing a user-friendly experience.
- Static Site Generation & SEO: Configure Next.js to generate a static multilingual site. Also includes metadata, OpenGraph tags, JSON-LD schema and sitemap.xml for improved search engine optimization.
- Unit Testing: Run tests on key pages (Home, About, Projects, Contact) and components using Jest and React Testing Library. Includes necessary test configurations.

## Style Guidelines:

- Primary color: Slate blue (#778DA9) to evoke a sense of professionalism and stability.
- Background color: Very light gray (#F0F0F0) to ensure readability and a clean design on a light color scheme.
- Accent color: Light cobalt blue (#4169E1) to highlight key interactive elements like links and buttons, adding a touch of vibrancy without being overwhelming.
- Body and headline font: 'Inter', a sans-serif for a clean and modern look.
- Use simple and professional icons to represent skills, technologies, and social media links.
- Design a responsive and clean layout, focusing on readability and easy navigation. Use a grid system for consistent alignment.
- Incorporate subtle animations using Framer Motion to enhance user experience, such as smooth transitions and interactive hover effects.