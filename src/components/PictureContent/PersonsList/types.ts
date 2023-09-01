import { ParticipantPerson } from '@/types';
import { ContentRowProps } from '@/components';

export type PersonsListProps = Pick<
    ContentRowProps<ParticipantPerson>,
    'rowId' | 'rowTitle' | 'dataState'
> &
    Partial<ContentRowProps<ParticipantPerson>>;
