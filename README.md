# Melinda Társi – Portfolio Website  
A modern, responsive developer portfolio built with React, Vite, Tailwind CSS, and Aceternity UI components.

This project serves as my personal portfolio and CV website. It showcases my skills, projects, experience, and provides ways to get in touch with me.  
The goal was to create a clean, elegant, performant website that reflects my style and technical skillset as a full-stack developer.

---

## Tech Stack

**Frontend:**
-  React (Vite)
-  Tailwind CSS
-  Aceternity UI Components
-  Headless UI
-  Modular CSS (section-based)

**Developer tools:**
-  npm
-  jsconfig with path aliases
-  Vite dev server

---

## Running the Project Locally

Make sure Node.js and npm are installed.

### 1. Clone the repository
```sh
git clone https://github.com/tarsimelinda/cv-project.git
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create a `.env` file in the project root by copying from the example:

```sh
cp .env.example .env
```

Then fill in your EmailJS credentials:
- `VITE_EMAILJS_SERVICE_ID` – Get from [EmailJS](https://www.emailjs.com/)
- `VITE_EMAILJS_TEMPLATE_ID` – Get from [EmailJS](https://www.emailjs.com/)
- `VITE_EMAILJS_PUBLIC_KEY` – Get from [EmailJS](https://www.emailjs.com/)

**Important:** Never commit the `.env` file. Sensitive credentials should never be exposed in version control. The `.gitignore` already excludes `.env` files.

### 4. Start development server

```sh
npm run dev
```

The website will be available at:
  http://localhost:5173

### Features

* Fully responsive design for all screen sizes

* Sticky navigation with active section highlighting

* Smooth scrolling and subtle animations

* Timeline-based “About Me” section

* Interactive skill icons with external links

* Projects displayed as clean cards with GitHub links

* Contact form with basic validation

* Contact section with direct links (GitHub, LinkedIn, Email)

### UI Libraries Used
* Tailwind CSS

* Used for styling and consistent, utility-first layout.

* Aceternity UI

* Modern, animated, aesthetically pleasing components for hero and CTA sections.

* Headless UI

* Used for the mobile navigation (Disclosure component).


### Contact

* LinkedIn: https://www.linkedin.com/in/melinda-t%C3%A1rsi-198782390/
* GitHub: https://github.com/tarsimelinda
* Email: melindatarsi9@gmail.com