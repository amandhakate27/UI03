
### folder structure
App.jsx
│
├── Navbar.jsx          → Blue header
│
└── StudentCard.jsx     → Main wrapper (Card)
    │
    ├── StudentDetail.jsx → Avatar + Name + City
    ├── StudentInfo.jsx   → Status + Roll + CGPA
    └── Buttons.jsx       → Two buttons

### Props
- StudentCard.jsx
    - name: string
    - city: string
    - status: string
    - roll: number
    - cgpa: number
- StudentDetail.jsx
    - name: string
    - city: string
- StudentInfo.jsx
    - status: string
    - roll: number
    - cgpa: number  
- Buttons.jsx
    - No props needed, just two buttons with text "Edit" and "Delete"


### Styling
- Use CSS modules or styled-components for styling.
- The card should have a shadow and rounded corners.
- The header should have a blue background and white text.
- The buttons should have a hover effect (e.g., change color on hover).



### functionality part

1. View Profile Button:

Click karo →
alert ya console.log mein dikhao:
"Viewing profile of Aman Sharma"

Function as prop use karo —
App mein function banao,
StudentCard ko pass karo!


2. Send Message Button:
Click karo →
alert ya console.log mein dikhao:
"Sending message to Aman Sharma"

Same pattern —
function as prop!

3. Active/Inactive Badge:

isActive = true  → Green "Active" badge
isActive = false → Red "Inactive" badge

Conditional rendering use karo!

4. Avatar Initials:

"Aman Sharma" → "AS"
"Rahul Kumar" → "RK"

Logic:
name.split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()

Yeh logic StudentCard ke
andar likhna hai!

5. Array se Cards Render:

App mein students array hai —
map() se StudentCard render karo —
id as key use karo!

6. Default Props:
Agar koi prop nahi aaya toh:
name     = "Unknown Student"
course   = "Not Enrolled"
year     = "N/A"
city     = "N/A"
cgpa     = 0.0
isActive = false

7. Card Wrapper — Children Prop:
Card.jsx banao —
StudentCard ko Card ke
andar wrap karo!

Card sirf styling dega —
children prop se content aayega!


✅ Functions as props — 2 buttons
✅ Conditional rendering — badge
✅ Avatar initials — logic
✅ Array map — cards render
✅ Default props — fallback
✅ Children prop — Card wrapper
✅ Responsive — mobile/tablet/desktop