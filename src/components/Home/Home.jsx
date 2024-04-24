import "./Home.scss";
import PropTypes from "prop-types";
const firstCardData1 = [
  {
    key: 1,
    heading: "Teaching Strategies",
    feats: [
      "Use of technology and audio visual aids",
      "Theme based curriculum",
      "Integrated and interactive approach",
      "Activity based meticulous strategies",
      "Celebration of special days",
    ],
  },
  {
    key: 2,
    heading: "Activities",
    feats: [
      "Role-play and story time",
      "Puzzles, gaming, construction using blocks and much more!!",
      "Music and dance",
      "Art and craft",
      "Physical activities",
    ],
  },
  {
    key: 3,
    heading: "Novel Methods",
    feats: [
      "Circle time",
      "Visual learning and Group Discussion",
      "Play-Way Method",
      "Making students ready for the future",
      "Active participation in Co-curricular activities",
    ],
  },
];
const firstCardData2 = [
  {
    key: 1,
    heading: "Admission Requirements",
    feats: [
      "Registration form",
      "Photocopy of Birth certificate and Aadhar Card",
      "One passport size photograph",
      "Minimum age for Admission in Nursery is 2 Years 6 Months",
    ],
  },
  {
    key: 2,
    heading: "Role of Parents",
    feats: [
      "Punctuality is mandatory",
      "Checking of school diary",
      "Completion of homework by students",
      "Making students ready for the future",
      "Be a role model for your child!",
    ],
  },
];
const secondCardData = [
  "Curiosity development",
  "Cognitive development",
  "More friends, of course!",
  "Directing kids to the best future",
  "Innovative learning",
  "Experiential learning",
  "Happiness!!",
  "Skill and passion identifications",
  "Communication",
  "Organization",
  "Problem-Solving",
  "Visionary",
  "Leadership",
  "Overall holistic development",
];
const reviewData = [
  {
    key: 1,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate debitis distinctio obcaecati vel    recusandae, quidem nulla adipisci delectus omnis, eaque alias    consectetur natus necessitatibus facilis quo fugiat magnam      laboriosam amet animi ipsa atque expedita quas? Ut recusandae    voluptates.",
    reviewer: "Lorem , ipsum 1",
  },
  {
    key: 2,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate debitis distinctio obcaecati vel    recusandae, quidem nulla adipisci delectus omnis, eaque alias    consectetur natus necessitatibus facilis quo fugiat magnam      laboriosam amet animi ipsa atque expedita quas? Ut recusandae    voluptates.",
    reviewer: "Lorem , ipsum 2",
  },
  {
    key: 3,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate debitis distinctio obcaecati vel    recusandae, quidem nulla adipisci delectus omnis, eaque alias    consectetur natus necessitatibus facilis quo fugiat magnam      laboriosam amet animi ipsa atque expedita quas? Ut recusandae    voluptates.",
    reviewer: "Lorem , ipsum 3",
  },
  {
    key: 4,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptate debitis distinctio obcaecati vel    recusandae, quidem nulla adipisci delectus omnis, eaque alias    consectetur natus necessitatibus facilis quo fugiat magnam      laboriosam amet animi ipsa atque expedita quas? Ut recusandae    voluptates.",
    reviewer: "Lorem , ipsum 4",
  },
];

const Home = () => {
  return (
    <>
      <div className="home">
        <h2 className="heading">Why join?</h2>
        <div className="card-container">
          {firstCardData1.map((data) => (
            <FirstCard data={data} key={data.key} />
          ))}
        </div>
        <h2 className="heading">What we will need from you?</h2>
        <div className="card-container">
          {firstCardData2.map((data) => (
            <FirstCard data={data} key={data.key} />
          ))}
        </div>
        <h2 className="heading">What we will deliver?</h2>
        <div className="card-container">
          <div className="second-card">
            {secondCardData.map((data, i) => (
              <div key={i}>
                <p>{data} </p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="heading">From Parents</h2>
        <div className="review-section-container">
          <div className="review-section">
            {reviewData.map((review) => (
              <div className="review" key={review.key}>
                <p>{review.review}</p>
                <p>{review.reviewer}</p>
              </div>
            ))}
          </div>
        </div>
      
      
      </div>
    </>
  );
};

export default Home;

const FirstCard = ({ data }) => {
  // Prop validation <Ye Dekhna Padega>
  FirstCard.propTypes = {
    data: PropTypes.shape({
      heading: PropTypes.string.isRequired,
      feats: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };

  return (
    <div className="first-card">
      <h2>{data.heading}</h2>
      {data.feats.map((feat) => (
        <div key={feat}>
          <p>{feat}</p>
        </div>
      ))}
    </div>
  );
};

//G o v i n d p u r a m  E k t a N a g a r , C a m p w e l   R o a d , L u c k n o w
// red #ed1c24
// blue #2e3092
