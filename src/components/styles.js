import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.gray[700]};
  width: 100%;
  padding: 1.5rem 0px;
  border-bottom: solid 1px;
  border-color: ${({ theme }) => theme.palette.gray[600]};
`;

export const VideoContainer = styled.div`
  flex: 1 1 0%;

`;

export const CardTitle = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.gray[200]};
  margin-top: 1.25rem;
  display: block;
`;

export const CardType = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  color: #fff;
  border-radius: 0.25rem;
  padding: 0.125rem 0.5rem;
  border: solid 1px;
  border-color: ${({ theme }) => theme.palette.green[300]};
`;

export const CardStatusAvailable = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.blue[500]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CardStatusNotAvailable = styled.span`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.orange[500]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  border-radius: 0.25rem;
  border: solid 1px;
  border-color: ${({ theme }) => theme.palette.gray[500]};
  padding: 1rem;
  margin-top: 0.5rem;
`;

export const CardDate = styled.span`
`;

export const ActivityCard = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.gray[100]}
`;

export const ActivityCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;


export const SidebarTitle = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: solid 1px;
  border-color: ${({ theme }) => theme.palette.gray[500]};
  display: block;
`;

export const Sidebar = styled.aside`
  width: 348px;
  background: ${({ theme }) => theme.palette.gray[700]};
  padding: 1.5rem;
  border-left: solid 1px;
  border-color: ${({ theme }) => theme.palette.gray[600]};
`;
