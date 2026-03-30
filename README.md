# UI03 — Student Profile Dashboard Card

A responsive React application built as part of the React learning roadmap.
This project focuses on **Props**, **Component Architecture**, and **Responsive Design** using Tailwind CSS.

---

## 🎯 Concepts Covered

- Props passing & destructuring
- Parent → Child data flow
- Children prop (Card wrapper)
- Functions as props
- Default props
- Conditional rendering
- Array of objects as data structure
- Mobile-first responsive design with Tailwind CSS

---

## 📁 Folder Structure

```
src/
├── Components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── Card.jsx            # Reusable wrapper (children prop)
│   ├── StudentCard.jsx     # Main card — props distributor
│   ├── StudentDetail.jsx   # Avatar + Name + Course + City
│   ├── StudentInfo.jsx     # Status + Roll No + CGPA
│   └── Buttons.jsx         # View Profile + Send Message
│
└── App.jsx                 # Data + functions + rendering
```

---

## 🧩 Component Tree

```
App.jsx
│
├── Navbar.jsx
│
└── StudentCard.jsx  (mapped from students array)
    │
    └── Card.jsx  ← children prop wrapper
        │
        ├── StudentDetail.jsx
        ├── StudentInfo.jsx
        └── Buttons.jsx
```

---

## 📊 Data Structure

```js
const students = [
  {
    id: 1,
    name: "Aman Dhakate",
    course: "BSc Computer Sci.",
    year: "2nd Year",
    city: "Lakhandur, Maharashtra",
    status: true,
    rollNo: "BSc-2026-001",
    cgpa: 9.5,
  },
  // ...more students
]
```

---

## 📱 Responsive Breakpoints

| Screen | Size | Layout |
|--------|------|--------|
| Mobile | 0px — 767px | Single column, stacked |
| Tablet | 768px — 1023px | 2 column grid |
| Desktop | 1024px+ | 3 column grid |

---

## ⚙️ Props Flow

```
App.jsx
│
│  name, course, city, status,
│  rollNo, cgpa, initial,
│  viewProfile(), message()
│
↓
StudentCard.jsx
│
├── StudentDetail  ← initial, name, course, city
├── StudentInfo    ← status, rollNo, cgpa
└── Buttons        ← viewProfile, message
```

---

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔧 Tech Stack

- React 18
- Tailwind CSS
- Vite

---

## ✅ Features

- [x] 3 Student cards rendered from array
- [x] Active / Inactive status badge
- [x] Avatar with auto-generated initials
- [x] View Profile alert on click
- [x] Send Message alert on click
- [x] Fully responsive — Mobile, Tablet, Desktop

---

## 📝 Score

| Category | Score |
|----------|-------|
| Consistency | 8/10 |
| Code Quality | 8.5/10 |
| Logic | 9/10 |
| Code Purity | 8/10 |
| Data Structure | 10/10 |
| **Overall** | **8.7/10** |

---

## 🧠 Key Learnings

1. Props are read-only — never mutate them
2. Children prop makes components flexible and reusable
3. Functions as props enable Child → Parent communication
4. Array of objects is the industry standard for list data
5. Mobile-first approach — no prefix = mobile, md: = tablet, lg: = desktop