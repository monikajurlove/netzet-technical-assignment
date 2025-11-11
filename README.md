## Project Overview

**Pages:**
1. **Landing Page** – User selects their gender
2. **Quiz Page** – Interactive 6-question quiz
3. **Checkout Page** – Displays personalized summary and countdown timer

---

## Technology Stack

- **React** – component-based architecture
- **TypeScript** – type safety
- **Tailwind CSS** – styling
- **React Router DOM** – page navigation

---

## Setup Instructions

To run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git

# 2. Navigate into the project folder
cd <your-repo>

# 3. Install dependencies
npm install

# 4. Run the app locally
npm start
```
Then open http://localhost:3000 in your browser.

---

## Development Decisions & Assumptions

- Implemented the timer logic with `useEffect` and `setInterval`, resetting automatically when reaching 00:00.
- Stored all quiz questions and options in a static array inside the component to keep the implementation simple and avoid unnecessary data fetching.
- Added a short 500ms delay after selecting an answer before navigating to the next question to make the transition feel smoother and show selected answer styling.
- The “after” image on the checkout page changes based on selected gender. If the user refreshes on the checkout page, it defaults to the female version (since state resets).
- Kept the fixed pixel dimensions from Figma instead of using responsive units to ensure pixel-perfect accuracy on 375px width screens.
- Added a slightly darker green for selected male/female cards for better contrast and selected card visibility.
