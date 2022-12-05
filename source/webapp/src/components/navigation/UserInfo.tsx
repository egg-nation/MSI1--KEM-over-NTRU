import React from "react";

type Props = {
    username?: string,
    email?: string
}

const UserInfo = ({username, email}: Props) => {

    return (
        <div className="user-info">
            <div className="user-info-title">
                {username}
            </div>
            <div className="user-info-details">
                {email}
            </div>
        </div>
    );
}

export default UserInfo;