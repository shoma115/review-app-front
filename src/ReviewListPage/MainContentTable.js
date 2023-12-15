import Card from '@mui/material/Card';
import { Link } from 'react-router-dom';

function ContentTitle({start, end}) {
    const displayed = start + "件～" + end + "件";
    return (
        <>
          <h1>授業一覧</h1>
          <span>{ displayed }</span>
        </>

    )
}

function ReviewBox({ lessons }) {
    
    const cards = lessons.map(lesson =>
        <Card variant="outlined" key={ lesson.id }>
          <h3>{ lesson.name }</h3>
          {lesson.teachers.map((teacher) => <h4 key={ teacher.id }>{teacher.name}先生&emsp;</h4>)}
          <Link to={"/review"} state={{ lesson: lesson }}>授業詳細/皆の声</Link>
        </Card>
    )

    return (
        <div>{cards}</div>
    );

}

function MainContent({ lessons }) {
    console.log(lessons);
    return (
        <>
          <ContentTitle start="0" end="5" />
          <ReviewBox  lessons={ lessons } />
        </>
    );
}

export default MainContent;

