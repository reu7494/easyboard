import React from "react";
import BoardList from "./BoardList";

const BoardDetail = () => {
  return (
    <div>
      <BoardList
        idx={BoardList.idx}
        title={BoardList.title}
        contents={BoardList.contents}
        createdBy={BoardList.createdBy}
      />
    </div>
  );
};

export default BoardDetail;
