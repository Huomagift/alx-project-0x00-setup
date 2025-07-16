## alx-project-0x00-setup
This project is a **Next.js application** scaffolded and structured as part of an ALX learning exercise.  
It demonstrates setting up a Next.js app with TypeScript, ESLint, TailwindCSS, and custom reusable components following best practices.

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9
- Git

### Clone the repository
```bash
git clone https://github.com/<your-username>/alx-project-0x00-setup.git
cd alx-project-0x00-setup
````

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev -- -p 3000
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
alx-project-0x00/
├── components/
│   ├── Card.tsx
│   ├── Pill.tsx
│   └── Button.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── index.tsx
│   ├── about.tsx
│   └── landing.tsx
├── public/
│   └── assets/
│       └── images/
│           ├── house.png
│           └── star.png
├── README.md
└── ...
```

### Key Directories

* `components/` - Reusable React components (`Card`, `Pill`, `Button`, etc.)
* `interfaces/` - TypeScript interfaces (`PillProps`, `ButtonProps`, etc.)
* `pages/` - Routing pages (using the Pages Router)

---

## 🧩 Features Implemented

✅ Project bootstrapped with:

* Next.js (`npx create-next-app@latest alx-project-0x00 --typescript`)
* ESLint
* TailwindCSS
* Import Aliases

✅ Pages Router

* `index.tsx` – Home page
* `landing.tsx` – Landing page
* `about.tsx` – About page

✅ Components

* `Card` – A card displaying property details, images, rating, and features.
* `Pill` – A small label component with customizable text.
* `Button` – A configurable button that supports different sizes and shapes (small, medium, large; rounded-sm, rounded-md, rounded-full).

✅ Interfaces

* Defined reusable TypeScript interfaces in `interfaces/index.ts`.

✅ Assets

* Public images: `house.png` and `star.png`.

---

## 🌐 Routes

| Path       | Page         |
| ---------- | ------------ |
| `/`        | Home         |
| `/landing` | Landing Page |
| `/about`   | About Page   |

---

## 📜 Advanced Component: Button

Created a `Button` component that accepts `title` and `styles` as props, allowing you to create different button variations. Example usage:

```tsx
<Button title="Click Me" styles="text-sm px-3 py-1 rounded-sm" />
<Button title="Click Me" styles="text-base px-4 py-2 rounded-md" />
<Button title="Click Me" styles="text-lg px-5 py-3 rounded-full" />
```

---

## 👩‍💻 Author

* Developed as part of the **ALX Software Engineering Program**.

---

Feel free to fork and extend this project!

---
