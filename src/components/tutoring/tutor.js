import React, {useState, useEffect} from "react";
import firebase from 'firebase'
import { Container, Button, Spinner, Card } from 'react-bootstrap'

export default function DisplayStudents() {

  const [ loaded, setLoaded ] = useState(false)
  const [ students, setStudents] = useState([])

  useEffect(() => {
    loadStudents()
  }, [])
  
  function loadStudents() {
    const uid = firebase.auth().currentUser.uid
  

    // studentInfo.classes.push({
    //   name: teacherInfo.name,
    //   email: teacherInfo.email,
    //   uid: teacherInfo.uid,
    //   subject: teacherInfo.subjects
    // });
    // teacherInfo.students.push({
    //   name: studentInfo.name,
    //   grade: studentInfo.grade,
    //   email: studentInfo.email,
    //   uid: _uid
    // });
    firebase.firestore().collection('tutors').doc(uid).get()
      .then(doc => doc.data())
      .then(data => {
        setStudents(data.students)
        setLoaded(true)
      })
}
  if(!loaded) {
    return (
          <Spinner animation="border" role="status" style={{ alignContent: 'center' }}>
              <span className="visually-hidden">Loading...</span>
          </Spinner>
    ) 
  } else {
    return (
      <Container>
      {students.map((item, i) => {
        return (
          <Card styles={{ padding: 20}} key={i}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                You can contact {item.name} at {item.email}. He/She is in {item.grade}th grade
              </Card.Text>
            </Card.Body>
          </Card>
        )
      })}
      </Container>
    )
  }
}
