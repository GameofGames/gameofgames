import React from "react";

const ScoreBoard = React.memo((props) => {
  let newUserName = [];
  for (let i = 0; i < props.usersList.length; i++) {
    newUserName.push(
      <h1 key={i}>
        {props.usersList[i].username} : {props.usersList[i].score}
      </h1>
    );
  }

  return (
    <div className="scoreBoard">
      <h4 className="columnTitle">Player ScoreBoard</h4>
      {newUserName}
    </div>
  );
});

export default ScoreBoard;
