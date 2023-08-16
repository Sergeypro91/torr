import styled from 'styled-components';
import { FixedSizeList } from 'react-window';

export const ListContainer = styled(FixedSizeList)`
    ${({ theme }) => theme.hideScrollbar}
`;
