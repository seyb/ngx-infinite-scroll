import { InfiniteScrollEvent, PositionStats } from './models';
import { ElementRef, EventEmitter, OnDestroy, OnInit, NgZone } from '@angular/core';
import { PositionResolverFactory } from './position-resolver';
import { ScrollRegister } from './scroll-register';
import { ScrollResolver } from './scroll-resolver';
export declare class InfiniteScroll implements OnDestroy, OnInit {
    private element;
    private zone;
    private positionResolverFactory;
    private scrollRegister;
    private scrollerResolver;
    scrolled: EventEmitter<InfiniteScrollEvent>;
    scrolledUp: EventEmitter<InfiniteScrollEvent>;
    _distanceDown: number;
    _distanceUp: number;
    _throttle: number;
    _disabled: boolean;
    _container: any;
    scrollWindow: boolean;
    _immediate: boolean;
    _horizontal: boolean;
    _alwaysCallback: boolean;
    debounce: string | boolean;
    private throttleType;
    private disposeScroller;
    constructor(element: ElementRef, zone: NgZone, positionResolverFactory: PositionResolverFactory, scrollRegister: ScrollRegister, scrollerResolver: ScrollResolver);
    ngOnInit(): void;
    handleOnScroll(container: PositionStats): void;
    shouldTriggerEvents(shouldScroll: boolean): boolean;
    ngOnDestroy(): void;
    onScrollDown(data?: InfiniteScrollEvent): void;
    onScrollUp(data?: InfiniteScrollEvent): void;
    private resolveContainerElement();
}
