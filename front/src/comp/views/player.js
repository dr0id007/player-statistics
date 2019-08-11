import React from "react";

const player = data => {
  return (
    <div className="player pt-5">
      <div className="container">
        <h2 className="stats-head">Player Stats</h2>
        <div className="stats">
          <img
            src={data.data.platformInfo.avatarUrl}
            alt="player avatar"
            height="200"
            width="200"
          />

          {`UserId: ${data.data.platformInfo.platformUserId}`}

          {`User Handle: ${data.data.platformInfo.platformUserHandle}`}
        </div>
      </div>
    </div>
  );
};

export default player;
