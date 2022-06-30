// ========== Card
// import all modules
import React from 'react';
import { ICardProps } from '../../interfaces';
import * as Styled from './card.styled';

export const Card: React.FC<ICardProps> = (props) => {
  const {
    title,
    description,
    technologies,
    img,
    onClick,
  } = props;

  return (
    <Styled.Card onClick={onClick}>
      <Styled.Image
        src={img}
        alt={title}
        layout="responsive"
        width={370}
        height={220}
      />
      <Styled.CardTechnology>
        {technologies.map((item) => (
          <Styled.SkillBadge
            key={item.id.toString()}
            variant={item.variant}
          >
            {item.name}
          </Styled.SkillBadge>
        ))}
      </Styled.CardTechnology>
      <Styled.CardTitle>
        {title}
      </Styled.CardTitle>
      <Styled.CardDescription>
        {description}
      </Styled.CardDescription>
    </Styled.Card>
  );
};
