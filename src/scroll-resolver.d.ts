import { PositionStats, ScrollerConfig } from './models';
export declare class ScrollResolver {
    lastScrollPosition: number;
    shouldScroll(container: PositionStats, config: ScrollerConfig, scrollingDown: boolean): boolean;
    isScrollingDown(container: PositionStats): boolean;
    getScrollStats(container: PositionStats, config: ScrollerConfig): {
        isScrollingDown: boolean;
        shouldScroll: boolean;
    };
}
