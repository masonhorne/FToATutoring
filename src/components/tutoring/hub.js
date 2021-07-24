import React from "react";
import SubjectCard from "../misc/subject.card";
const styles = {
  margins: {
    marginLeft: 50,
    marginRight: 50
  }
};

export default function Hub() {
  return (
    <div>
      <br />
      <h4>Welcome to the Hub!</h4>
      <br />
      <div class="row" style={styles.margins}>
        <SubjectCard
          name="Math"
          desc="Find some of the best Math tutors available locally."
          imgSrc="https://www.fife.ac.uk/media/3828/mathematics-png.jpg?anchor=center&mode=crop&width=1200&height=800&rnd=132155248940000000"
        />
        <SubjectCard
          name="Science"
          desc="Find some of the best Science tutors available locally."
          imgSrc="https://www.fife.ac.uk/media/3828/mathematics-png.jpg?anchor=center&mode=crop&width=1200&height=800&rnd=132155248940000000"
        />
        <SubjectCard
          name="Mathematics"
          desc="Find some of the best Mathematics tutors available locally."
          imgSrc="https://www.fife.ac.uk/media/3828/mathematics-png.jpg?anchor=center&mode=crop&width=1200&height=800&rnd=132155248940000000"
        />
        <SubjectCard
          name="Mathematics"
          desc="Find some of the best Mathematics tutors available locally."
          imgSrc="https://www.fife.ac.uk/media/3828/mathematics-png.jpg?anchor=center&mode=crop&width=1200&height=800&rnd=132155248940000000"
        />
        <SubjectCard
          name="Mathematics"
          desc="Find some of the best Mathematics tutors available locally."
          imgSrc="https://www.fife.ac.uk/media/3828/mathematics-png.jpg?anchor=center&mode=crop&width=1200&height=800&rnd=132155248940000000"
        />
      </div>
    </div>
  );
}
