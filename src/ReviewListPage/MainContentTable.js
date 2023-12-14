import Card from '@mui/material/Card';
import axiosApiSetBaseURL from '../BaseURL';
import { useEffect, useState } from 'react';
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

function ReviewBox({title, review}) {
    const [lessons, setLessons] = useState([]);
    
    useEffect(() => {
        axiosApiSetBaseURL.get("/api/lesson")
            .then((response) => {
                setLessons(response.data.data.lessons);   
            })
            .catch((error) => {
                alert("授業データの取得に失敗しました。リロードしてください");
                console.log(error);
            });
    }, [])
    console.log(lessons)
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

function MainContent() {
    return (
        <>
          <ContentTitle start="0" end="5" />
          <ReviewBox title="演習" review="5" />
        </>
    );
}

export default MainContent;

