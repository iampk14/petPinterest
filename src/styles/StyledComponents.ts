import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ThemeProps {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      white: string;
      text: {
        primary: string;
        secondary: string;
        light: string;
      };
      selection: string;
    };
    spacing: {
      small: string;
      medium: string;
      large: string;
    };
    borderRadius: string;
    transitions: {
      default: string;
    };
  };
}

interface CardContainerProps {
  isSelected?: boolean;
  theme?: ThemeProps['theme'];
}

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'success';
  theme?: ThemeProps['theme'];
}

// Header Styles
export const HeaderContainer = styled.header<ThemeProps>`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 200px;
  height: 100px;
  object-fit: contain;
`;

export const Nav = styled.nav<ThemeProps>`
  display: flex;
  gap: ${props => props.theme.spacing.large};
`;

export const StyledLink = styled(Link)<ThemeProps>`
  color: ${props => props.theme.colors.white};
  text-decoration: none;
  font-size: 1.1rem;
  transition: color ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.text.light};
  }
`;

// Card Styles
export const CardContainer = styled.div<CardContainerProps>`
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  position: relative;
  cursor: pointer;
  border: 3px solid transparent;
  overflow: hidden;
  aspect-ratio: 3/4;
  transition: all 0.3s ease;

  ${props => props.isSelected && `
    border-color: #3182ce;
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(49, 130, 206, 0.2);
    
    &::before {
      content: '✓';
      position: absolute;
      top: ${props.theme.spacing.medium};
      right: ${props.theme.spacing.medium};
      background-color: #3182ce;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      z-index: 2;
    }
  `}

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const PetImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
`;

export const PetInfoOverlay = styled.div<ThemeProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${props => props.theme.spacing.medium};
  opacity: 0;
  transition: all 0.3s ease;
  color: white;
  
  ${CardContainer}:hover & {
    opacity: 1;
  }
`;

export const PetTitle = styled.h4<ThemeProps>`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.small};
  color: white;
`;

export const PetDescription = styled.p<ThemeProps>`
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: ${props => props.theme.spacing.small};
  color: rgba(255, 255, 255, 0.9);
`;

export const PetDate = styled.p`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

// Sort Styles
export const SortContainer = styled.div<ThemeProps>`
  position: relative;
  width: 200px;
  margin-bottom: ${props => props.theme.spacing.large};
`;

export const SortSelect = styled.select<ThemeProps>`
  width: 100%;
  padding: ${props => props.theme.spacing.medium};
  border: 1px solid ${props => props.theme.colors.text.light};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 1rem;
  appearance: none;
  color: ${props => props.theme.colors.text.primary};
  
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem top 50%;
  background-size: 0.65rem auto;
  padding-right: 2.5rem;

  &:hover {
    border-color: ${props => props.theme.colors.text.primary};
  }

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.selection};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.selection}20;
  }
`;

// Body Styles
export const BodyContainer = styled.main<ThemeProps>`
  padding: ${props => props.theme.spacing.large};
`;

export const SearchInput = styled.input<ThemeProps>`
  width: 100%;
  max-width: 500px;
  padding: ${props => props.theme.spacing.medium};
  border: 1px solid ${props => props.theme.colors.text.light};
  border-radius: ${props => props.theme.borderRadius};
  margin-bottom: ${props => props.theme.spacing.large};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.text.primary};
  }
`;

export const ButtonGroup = styled.div<ThemeProps>`
  display: flex;
  gap: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.large};
  flex-wrap: wrap;
`;

export const Button = styled.button<ButtonProps>`
  padding: ${props => props.theme.spacing.medium} ${props => props.theme.spacing.large};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  cursor: pointer;
  transition: background-color ${props => props.theme.transitions.default};
  
  ${props => {
    switch (props.variant) {
      case 'secondary':
        return `
          background-color: ${props.theme.colors.secondary};
          color: ${props.theme.colors.white};
          &:hover {
            background-color: ${props.theme.colors.secondary}dd;
          }
        `;
      case 'success':
        return `
          background-color: #10B981;
          color: ${props.theme.colors.white};
          &:hover {
            background-color: #059669;
          }
        `;
      default:
        return `
          background-color: ${props.theme.colors.primary};
          color: ${props.theme.colors.white};
          &:hover {
            background-color: ${props.theme.colors.primary}dd;
          }
        `;
    }
  }}

  &:disabled {
    background-color: ${props => props.theme.colors.text.light};
    cursor: not-allowed;
  }
`;

export const PetGrid = styled.div<ThemeProps>`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.large};
  justify-items: center;
`;

// Error Styles
export const ErrorContainer = styled.div<ThemeProps>`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.large};
`;

export const ErrorContent = styled.div<ThemeProps>`
  max-width: 600px;
  padding: ${props => props.theme.spacing.large};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  text-align: center;
`;

// Search Styles
export const SearchContainer = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.large};
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchWrapper = styled.div`
  flex: 2;
  max-width: 800px;
`;

export const SortWrapper = styled.div`
  flex: 1;
  max-width: 300px;
`;

export const SelectedCount = styled.span<ThemeProps>`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.9rem;
  margin-left: ${props => props.theme.spacing.medium};
`;