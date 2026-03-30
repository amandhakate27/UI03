import Navbar from "./Components/Navbar";
import StudentCard from "./Components/StudentCard";
const App = () => {
  const students = [{
    id: 1,
    name: "Aman Dhakate",
    course: "BSc Computer Sci.",
    year: "2nd Year",
    city: "Lakhandur, Maharastra",
    status: true,
    rollNo: "BSc-2026-001",
    cgpa: 9.5,


  }, {
    id: 2,
    name: "Rahul Sharma",
    course: "BSc Computer Sci.",
    year: "2nd Year",
    city: "Nagpur, Maharastra",
    status: true,
    rollNo: "BSc-2026-002",
    cgpa: 9.2,
  }, {
    id: 3,
    name: "Priya Singh",
    course: "BSc Computer Sci.",
    year: "2nd Year",
    city: "Mumbai, Maharastra",
    status: false,
    rollNo: "BSc-2026-003",
    cgpa: 8.7
  }];

  const handleViewProfile = (name) => {
    alert(`viewing profile of ${name}`);
  }

  const handleMessage = (name) => {
    alert(`sending message to ${name}`);
  }

  const getInitials = (name) => {
    return name.split(" ").map((word) => word[0]).join("").toUpperCase();
  }
  return (
    <>
      <main>
        <Navbar />
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4
        p-4  justify-items-center-center">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              initial={getInitials(student.name)}
              name={student.name}
              course={student.course}
              city={student.city}
              status={student.status}
              rollNo={student.rollNo}
              cgpa={student.cgpa}
              viewProfile={() => handleViewProfile(student.name)}
              message={() => handleMessage(student.name)}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App;
