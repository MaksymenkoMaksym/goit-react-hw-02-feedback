import {
  SectionStyled,
  SectionTitleOne,
  SectionTitleTwo,
} from './Section.styled';

export const Section = ({ priority, title, children }) => (
  <SectionStyled>
    {priority === 1 ? (
      <SectionTitleOne>{title}</SectionTitleOne>
    ) : (
      <SectionTitleTwo>{title}</SectionTitleTwo>
    )}
    {children}
  </SectionStyled>
);
