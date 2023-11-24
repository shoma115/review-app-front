import Card from '@mui/material/Card';

const reviewData = [
    {
        "id": 1,
        "class_name": "物理学基礎",
        "instructor": "山田太郎",
        "rating": 4.5
    },
    {
        "id": 2,
        "class_name": "プログラミング入門",
        "instructor": "佐藤花子",
        "rating": 4.8
    },
    {
        "id": 3,
        "class_name": "現代文学",
        "instructor": "伊藤一郎",
        "rating": 4.2
    },
    {
        "id": 4,
        "class_name": "統計学の基本",
        "instructor": "鈴木次郎",
        "rating": 4.7
    },
    {
        "id": 5,
        "class_name": "歴史と文化",
        "instructor": "高橋恵子",
        "rating": 4.0
    },
    {
        "id": 6,
        "class_name": "基本の数学",
        "instructor": "中村悠一",
        "rating": 3.8
    },
    {
        "id": 7,
        "class_name": "生物学入門",
        "instructor": "小林明子",
        "rating": 4.6
    },
    {
        "id": 8,
        "class_name": "ビジネス英語",
        "instructor": "田中裕二",
        "rating": 4.4
    },
    {
        "id": 9,
        "class_name": "現代美術概論",
        "instructor": "渡辺直美",
        "rating": 4.1
    },
    {
        "id": 10,
        "class_name": "コンピュータサイエンス",
        "instructor": "松本健一",
        "rating": 4.9
    }
]



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
    const cards = reviewData.map(reviewDatum =>
        <Card variant="outlined" key={ reviewDatum.id }>
          <h3>{ reviewDatum.class_name }</h3>
          <h4>{ reviewDatum.instructor }</h4>
          <h5>評価: { reviewDatum.rating }</h5>            
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

