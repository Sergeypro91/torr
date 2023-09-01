import { ParticipantPerson } from '@/types';

export const sortAndFilterCredits = (credits?: ParticipantPerson[] | null) => {
    return credits
        ? credits
              .sort((a, b) => b.popularity - a.popularity)
              .reduce((acc, credit, id, arr) => {
                  if (!id || credit.name !== arr[id - 1].name) {
                      acc.push(credit);
                  }

                  return acc;
              }, [] as ParticipantPerson[])
        : [];
};
