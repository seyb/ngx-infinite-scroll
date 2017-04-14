"use strict";
var core_1 = require('@angular/core');
var ScrollResolver = (function () {
    function ScrollResolver() {
        this.lastScrollPosition = 0;
    }
    ScrollResolver.prototype.shouldScroll = function (container, config, scrollingDown) {
        var distance = config.distance;
        var remaining;
        var containerBreakpoint;
        if (scrollingDown) {
            remaining = container.totalToScroll - container.scrolledUntilNow;
            containerBreakpoint = container.height * distance.down + 1;
        }
        else {
            remaining = container.scrolledUntilNow;
            containerBreakpoint = container.height * distance.up + 1;
        }
        var shouldScroll = remaining <= containerBreakpoint;
        this.lastScrollPosition = container.scrolledUntilNow;
        return shouldScroll;
    };
    ScrollResolver.prototype.isScrollingDown = function (container) {
        return this.lastScrollPosition < container.scrolledUntilNow;
    };
    ScrollResolver.prototype.getScrollStats = function (container, config) {
        var isScrollingDown = this.isScrollingDown(container);
        var shouldScroll = this.shouldScroll(container, config, isScrollingDown);
        return { isScrollingDown: isScrollingDown, shouldScroll: shouldScroll };
    };
    ScrollResolver.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ScrollResolver.ctorParameters = function () { return []; };
    return ScrollResolver;
}());
exports.ScrollResolver = ScrollResolver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Nyb2xsLXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFHM0M7SUFBQTtRQUNTLHVCQUFrQixHQUFXLENBQUMsQ0FBQztJQWlDeEMsQ0FBQztJQS9CQyxxQ0FBWSxHQUFaLFVBQWMsU0FBd0IsRUFBRSxNQUFzQixFQUFFLGFBQXNCO1FBQ3BGLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDakMsSUFBSSxTQUFpQixDQUFDO1FBQ3RCLElBQUksbUJBQTJCLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNsQixTQUFTLEdBQUcsU0FBUyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7WUFDakUsbUJBQW1CLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixTQUFTLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1lBQ3ZDLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUNELElBQU0sWUFBWSxHQUFZLFNBQVMsSUFBSSxtQkFBbUIsQ0FBQztRQUMvRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUVELHdDQUFlLEdBQWYsVUFBaUIsU0FBd0I7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7SUFDOUQsQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZ0IsU0FBd0IsRUFBRSxNQUFzQjtRQUM5RCxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUMzRSxNQUFNLENBQUMsRUFBRSxnQ0FBZSxFQUFFLDBCQUFZLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0kseUJBQVUsR0FBMEI7UUFDM0MsRUFBRSxJQUFJLEVBQUUsaUJBQVUsRUFBRTtLQUNuQixDQUFDO0lBQ0Ysa0JBQWtCO0lBQ1gsNkJBQWMsR0FBbUUsY0FBTSxPQUFBLEVBQzdGLEVBRDZGLENBQzdGLENBQUM7SUFDRixxQkFBQztBQUFELENBQUMsQUFsQ0QsSUFrQ0M7QUFsQ1ksc0JBQWMsaUJBa0MxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9zaXRpb25TdGF0cywgU2Nyb2xsZXJDb25maWcgfSBmcm9tICcuL21vZGVscyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZXhwb3J0IGNsYXNzIFNjcm9sbFJlc29sdmVyIHtcbiAgcHVibGljIGxhc3RTY3JvbGxQb3NpdGlvbjogbnVtYmVyID0gMDtcblxuICBzaG91bGRTY3JvbGwgKGNvbnRhaW5lcjogUG9zaXRpb25TdGF0cywgY29uZmlnOiBTY3JvbGxlckNvbmZpZywgc2Nyb2xsaW5nRG93bjogYm9vbGVhbikge1xuICAgIGNvbnN0IGRpc3RhbmNlID0gY29uZmlnLmRpc3RhbmNlO1xuICAgIGxldCByZW1haW5pbmc6IG51bWJlcjtcbiAgICBsZXQgY29udGFpbmVyQnJlYWtwb2ludDogbnVtYmVyO1xuICAgIGlmIChzY3JvbGxpbmdEb3duKSB7XG4gICAgICByZW1haW5pbmcgPSBjb250YWluZXIudG90YWxUb1Njcm9sbCAtIGNvbnRhaW5lci5zY3JvbGxlZFVudGlsTm93O1xuICAgICAgY29udGFpbmVyQnJlYWtwb2ludCA9IGNvbnRhaW5lci5oZWlnaHQgKiBkaXN0YW5jZS5kb3duICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtYWluaW5nID0gY29udGFpbmVyLnNjcm9sbGVkVW50aWxOb3c7XG4gICAgICBjb250YWluZXJCcmVha3BvaW50ID0gY29udGFpbmVyLmhlaWdodCAqIGRpc3RhbmNlLnVwICsgMTtcbiAgICB9XG4gICAgY29uc3Qgc2hvdWxkU2Nyb2xsOiBib29sZWFuID0gcmVtYWluaW5nIDw9IGNvbnRhaW5lckJyZWFrcG9pbnQ7XG4gICAgdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPSBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vdztcbiAgICByZXR1cm4gc2hvdWxkU2Nyb2xsO1xuICB9XG5cbiAgaXNTY3JvbGxpbmdEb3duIChjb250YWluZXI6IFBvc2l0aW9uU3RhdHMpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0U2Nyb2xsUG9zaXRpb24gPCBjb250YWluZXIuc2Nyb2xsZWRVbnRpbE5vdztcbiAgfVxuXG4gIGdldFNjcm9sbFN0YXRzIChjb250YWluZXI6IFBvc2l0aW9uU3RhdHMsIGNvbmZpZzogU2Nyb2xsZXJDb25maWcpIHtcbiAgICBjb25zdCBpc1Njcm9sbGluZ0Rvd24gPSB0aGlzLmlzU2Nyb2xsaW5nRG93bihjb250YWluZXIpO1xuICAgIGNvbnN0IHNob3VsZFNjcm9sbCA9IHRoaXMuc2hvdWxkU2Nyb2xsKGNvbnRhaW5lciwgY29uZmlnLCBpc1Njcm9sbGluZ0Rvd24pO1xuICAgIHJldHVybiB7IGlzU2Nyb2xsaW5nRG93biwgc2hvdWxkU2Nyb2xsIH07XG4gIH1cbnN0YXRpYyBkZWNvcmF0b3JzOiBEZWNvcmF0b3JJbnZvY2F0aW9uW10gPSBbXG57IHR5cGU6IEluamVjdGFibGUgfSxcbl07XG4vKiogQG5vY29sbGFwc2UgKi9cbnN0YXRpYyBjdG9yUGFyYW1ldGVyczogKCkgPT4gKHt0eXBlOiBhbnksIGRlY29yYXRvcnM/OiBEZWNvcmF0b3JJbnZvY2F0aW9uW119fG51bGwpW10gPSAoKSA9PiBbXG5dO1xufVxuXG5pbnRlcmZhY2UgRGVjb3JhdG9ySW52b2NhdGlvbiB7XG4gIHR5cGU6IEZ1bmN0aW9uO1xuICBhcmdzPzogYW55W107XG59XG4iXX0=