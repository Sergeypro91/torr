import { Company } from '@/types';

export type AssetInfoProps = {
    overview?: boolean;
    tagline?: string | null;
    production?: Company[] | null;
};
