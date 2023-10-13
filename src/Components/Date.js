import faviconImg from "../Images/favicon.png";
import "../style/Date.css";
export const questions = [
  {
    number: "01",
    question: "연인과 길을 걷던 중 연인의 친구를 만난다면 나는?",
    choices: [
      { text: "내 연인의 친구? 자연스럽게 인사하며 대화한다.", value: "e" },
      { text: "내 연인의 친구? 인사 후 가만히 있는다", value: "i" },
    ],
  },

  {
    number: "02",
    question: "길을 가다가 새로 생긴 가게를 발견했다. 이때 나는?",
    choices: [
      {
        text: "일단 가기로 했던데 들렸다가 가야지!",
        value: "s",
      },
      {
        text: "저긴 뭐하는델까? 일단 들어가봐야지!",
        value: "n",
      },
    ],
  },

  {
    number: "03",
    question: "눈 내리는 날 집 안에서 연인이랑 놀던 중 집 밖으로 택배가 왔다.",
    choices: [
      {
        text: "눈 오니깐 내가 다녀올께 넌 안에 있어!",
        value: "t",
      },
      {
        text: "눈 오는데 같이 갔다올까?",
        value: "f",
      },
    ],
  },

  {
    number: "04",
    question: "사람 많은 곳에 차를 가지고 가는 당신!",
    choices: [
      {
        text: "그 주변에 주차할 수 있는 곳이 어디인지 미리 알아봐야겠다.",
        value: "j",
      },
      {
        text: "그 주변 근처에 가서 찾아보고 가까운데 해야지~",
        value: "p",
      },
    ],
  },
  // {
  //   number: "05",
  //   question:
  //     "친구랑 보기로 한 당신 그런데 친구가 30분 늦는다고 연락이 오는데?",
  //   choices: [
  //     {
  //       text: "그래? 좀 늦을 수 있지~ 기다릴께!!",
  //       value: "p",
  //     },
  //     {
  //       text: "갑자기? 늦을것 같으면 미리 얘기하지..",
  //       value: "j",
  //     },
  //   ],
  // },
  // {
  //   number: "06",
  //   question: "새벽 늦은 시간 치킨을 시켜먹기로 한 당신!",
  //   choices: [
  //     {
  //       text: "여기 맛있어 보이네 여기서 시켜야겠다!",
  //       value: "s",
  //     },
  //     {
  //       text: "리뷰나 이벤트 정보 등 찾아보고 주문해야겠다.",
  //       value: "n",
  //     },
  //   ],
  // },
  // {
  //   number: "07",
  //   question: "새벽 늦은 시간 치킨을 시켜먹기로 한 당신!",
  //   choices: [
  //     {
  //       text: "여기 맛있어 보이네 여기서 시켜야겠다!",
  //       value: "s",
  //     },
  //     {
  //       text: "리뷰나 이벤트 정보 등 찾아보고 주문해야겠다.",
  //       value: "n",
  //     },
  //   ],
  // },
  // {
  //   number: "08",
  //   question: "새벽 늦은 시간 치킨을 시켜먹기로 한 당신!",
  //   choices: [
  //     {
  //       text: "여기 맛있어 보이네 여기서 시켜야겠다!",
  //       value: "s",
  //     },
  //     {
  //       text: "리뷰나 이벤트 정보 등 찾아보고 주문해야겠다.",
  //       value: "n",
  //     },
  //   ],
  // },
];
export const results = [
  {
    title: "출근 시간은 내가 정해!",
    character: faviconImg,
    results: [
      <div className="share-button-container1">
        <div className="text_date">
          ● 혼자서 멘탈 케어가 가능해요! 소속이 없어도, 벌이가 불안정해도 저는
          지금이 좋아요!
          <p />
        </div>

        <div className="text_date">
          ● 일에 대한 욕심이 많아요. 행복한 야근이라고 할 수 있어요!
        </div>

        <div className="text_date">
          ● 자유로운 환경에서 더 잘해요! 하지만 누구보다 스스로 시간 관리가
          철저해요:
        </div>

        <div className="text_date">
          ● 리더십 있다는 소리를 자주 들어요. 추진력이 있는 편이죠~ (뿌듯)
        </div>
      </div>,
    ],
    jobs: ["프리랜서", "창업가"],
  },
  // {
  //   title: "프로직진러!<br>진행력 갑",
  //   character: "../Images/favicon.png",
  //   results: [
  //     <div>
  //       나는야 회사 사람들 멘탈 지킴이!
  //       <br />
  //       언제나 토닥토닥 으샤으샤 응원하며 다니는 파워 인싸!
  //       <p />
  //     </div>,

  //     <div>
  //       일에 대한 욕심이 많아요.
  //       <br />
  //       진행력 갑! 추진력 갑!
  //     </div>,
  //     <div>
  //       빠른 속도로 동시에 여러 업무를 해결할 수 있어요.
  //       <br />
  //       회사 행사나 크리스마스 이벤트
  //     </div>,
  //     <div>
  //       회사사람들 생일까지 우리가 다 챙길게요
  //       <br />
  //     </div>,
  //   ],
  //   jobs: ["마케터", "기획자"],
  // },
  // {
  //   title: "우리 무기는<br>상상력!",
  //   character: "../Images/favicon.png",
  //   results: [
  //     "이것저것 관심이 많은 편이에요.<br>모든 게 궁금해요!",
  //     "섬세함이 장점으로<br>업무를 센스 있게 처리한다는 말을 자주 들어요.",
  //     "가끔은 거절을 잘 못해서 일이 몰릴 때가 있지만..!<br>전 괜찮아요~ (프로긍정러)",
  //     "업무에 예민할 때도 있지만,<br>그래서 결과물은 완벽하죠!",
  //   ],
  //   jobs: ["디자이너", "예술가"],
  // },
  // {
  //   title: "인생은<br>한방!",
  //   character: "../Images/favicon.png",
  //   results: [
  //     "전략적으로 계획을 세우는 걸 좋아해요!",
  //     "평소 경제와 사회 이슈에 관심이 매우 많아요.",
  //     "꿈이 커요!<br>크게 성공할 수 있는 한 방을 이뤄낼 거예요~",
  //     "일할 땐 일하고! 놀 땐 놀고!<br>뭐든 확실한 게 좋아요.",
  //   ],
  //   jobs: ["부동산<br>투자자", "주식<br>투자자"],
  // },
  // {
  //   title: "한 번 집중하면<br>멈출 수 없지!",
  //   character: "../Images/favicon.png",
  //   results: [
  //     "저는 위선과 가식이 없어요.<br>진실만 말하죠. (진지)",
  //     "혼자서 더 잘해요.<br>솔로 워커 최고!",
  //     "관심 분야가 생기면 끝도 없이 깊어져요.<br>다만 이외에 모든 것엔 관심이 없어요.",
  //     "(이상) <<<<<< (현실)<br>가끔 이성에게 상처를 줄 때가 있어요, 그게 아닌데...",
  //   ],
  //   jobs: ["개발자", "데이터분석가"],
  // },
  // {
  //   title: "인생 욜로지~<br>일단 놀자 ><",
  //   character: "../Images/favicon.png",
  //   results: [
  //     "취미가 100개!<br>이것저것 다재다능해요~",
  //     "한가하냐고요?<br>원래 백수가 젤 바쁜 거에요!",
  //     "결혼사진에 친구들이 다 들어갈 수 있을까요?",
  //     "가끔이지만, 갓생살기 도전해요!",
  //   ],
  //   jobs: ["돈 많은 백수", "유튜버"],
  // },
];
export const mbtis = {
  entj: 0,
  entp: 0,
  estp: 0,
  esfp: 1,
  esfj: 1,
  enfj: 1,
  infp: 2,
  isfp: 2,
  isfj: 2,
  infj: 2,
  estj: 3,
  istp: 3,
  intj: 4,
  intp: 4,
  istj: 4,
  enfp: 5,
};
