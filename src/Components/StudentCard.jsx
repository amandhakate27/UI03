
import Card from './Card'
import StudentDetail from './StudentDetail'
import StudentInfo from './StudentInfo'
import Buttons from './Buttons'

const StudentCard = ({ initial, name, course, city, status, rollNo, cgpa, viewProfile, message }) => {
    return (
        <Card>
            <StudentDetail initial={initial} name={name} course={course} city={city} />
            <StudentInfo status={status} rollNo={rollNo} cgpa={cgpa} />
            <Buttons viewProfile={viewProfile} message={message} />
        </Card>
    )
}

export default StudentCard


