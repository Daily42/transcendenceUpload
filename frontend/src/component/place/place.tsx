import { styled } from "@stitches/react";

// /* 이벤트의 제목과 클리히면 해당 이벤트로 이동하는 노드 */
// const DefaultNode = styled("div", {
// //   position: "absolute",
// //   backgroundColor: "white",
// //   height: "50px",
// //   width: "100px",
// //   cursor: "pointer",
// //   margin: "3px",
// //   /* 아래는 꼭짓점을 둥글게 만들기 위한 옵션 */
// //   borderRadius: "10px",
// //   display: "flex",
// //   alignItems: "center",
// //   justifyContent: "center",
// //   "&:hover": {
// //     opacity: 0.8,
// //   }
// });

// export function Place(props : any) {
//   const { path, width } = props;
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(path);
//   };

//   return (
//     <DefaultNode
//       onClick={handleClick}
//     />
//   );
// }

export const Place = styled("div", {
  width: "calc(100% - 16px)",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  // border: "3px solid white",
  color: "white",
  // borderRadius: "10px",
  minHeight: "85px",
  margin: "7.5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  boxShadow: "0px 4px 4px #000000",
  transitionDuration: "0.5s",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1.0)",
  }
});
