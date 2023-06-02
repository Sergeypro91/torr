// styled.d.ts
import 'styled-components';
import { TorrTheme } from '@/styles/defaultTheme';

declare module 'styled-components' {
    export interface DefaultTheme extends TorrTheme {}
}
