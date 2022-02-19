import React from "react";
import styled from "styled-components";

import userAvatarSrc from "../../../../assets/header/user-avatar.png";

const Icon = styled.img`
  border-radius: 50%;
`;

const IconUserAvatar: React.FC = () => {
  return <Icon src={userAvatarSrc} alt="avatar" />;
};

export default IconUserAvatar;
