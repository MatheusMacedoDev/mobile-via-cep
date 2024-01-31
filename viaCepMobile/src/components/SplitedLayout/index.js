import { LayoutWrapper } from './style';

export default function SplitedLayout({ children }) {
    return (
        <LayoutWrapper>
            { children }
        </LayoutWrapper>
    )
}