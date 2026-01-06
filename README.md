# NewsToday - Frontend News Website

A **responsive news website frontend** built with **React**, **Vite**, and **Tailwind CSS**, inspired by popular news portals like Prothom Alo and BBC.

**Live Demo:**  
https://news-website-frontend-psi.vercel.app/

---

## Project Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
```bash
git clone <your-github-repo-link>
cd <project-folder>
Install dependencies: npm install
Run the development server: npm run dev
Open your browser and go to http://localhost:5173 (or the port Vite shows) to view the app.

**Folder Structure**

src/
 ├─ assets/            # Images for news articles
 ├─ components/        # Reusable components
 │    ├─ Header.jsx
 │    ├─ Footer.jsx
 │    ├─ NewsCard.jsx
 │    ├─ CategoryBar.jsx
 │    └─ SkeletonCard.jsx
 ├─ data/              # Dummy news data (newsData.js)
 ├─ pages/             # Pages
 │    ├─ Home.jsx
 │    └─ NewsDetails.jsx
 ├─ App.jsx            # Layout component
 └─ main.jsx           # App entry point

## Features

1. **Responsive Design**
   - Works seamlessly on **desktop, tablet, and mobile** devices.

2. **Header & Navigation**
   - Logo and site name
   - Navigation menu with categories: Home, National, International, Sports, Technology
   - Mobile-friendly hamburger menu with sliding panel

3. **Home Page**
   - Featured news section
   - News list/grid displaying:
     - Thumbnail image
     - Title
     - Short description
     - Category
     - Publish date
   - Skeleton loader for news cards while loading

4. **News Details Page**
   - Full news content with proper typography
   - Large cover image
   - Title, category, and date
   - Related news section

5. **Category-based Filtering**
   - Filter news based on category


---

## Technologies Used

- **React**
- **Vite**
- **Tailwind CSS v4**
- **React Router v7**
- **React Icons**

---