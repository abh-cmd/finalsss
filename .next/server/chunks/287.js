exports.id = 287;
exports.ids = [287];
exports.modules = {

/***/ 1065:
/***/ (() => {



/***/ }),

/***/ 4095:
/***/ (() => {



/***/ }),

/***/ 5236:
/***/ (() => {



/***/ }),

/***/ 2593:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* binding */ useScroll)
});

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/index.mjs
var value = __webpack_require__(6728);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/errors.mjs
var errors = __webpack_require__(7664);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/noop.mjs
var noop = __webpack_require__(3201);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/frameloop/frame.mjs
var frameloop_frame = __webpack_require__(3662);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/scroll/observe.mjs


function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = () => {
        const { currentTime } = timeline;
        const percentage = currentTime === null ? 0 : currentTime.value;
        const progress = percentage / 100;
        if (prevProgress !== progress) {
            update(progress);
        }
        prevProgress = progress;
    };
    frameloop_frame/* frame */.Wi.preUpdate(onFrame, true);
    return () => (0,frameloop_frame/* cancelFrame */.Pn)(onFrame);
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var scroll_timeline = __webpack_require__(7662);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
var is_svg_element = __webpack_require__(7286);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
var resolve_elements = __webpack_require__(4647);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/resize/handle-element.mjs



const resizeHandlers = new WeakMap();
let observer;
const getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
    if (borderBoxSize && borderBoxSize[0]) {
        return borderBoxSize[0][(borderBoxAxis + "Size")];
    }
    else if ((0,is_svg_element/* isSVGElement */.v)(target) && "getBBox" in target) {
        return target.getBBox()[svgAxis];
    }
    else {
        return target[htmlAxis];
    }
};
const getWidth = /*@__PURE__*/ getSize("inline", "width", "offsetWidth");
const getHeight = /*@__PURE__*/ getSize("block", "height", "offsetHeight");
function notifyTarget({ target, borderBoxSize }) {
    resizeHandlers.get(target)?.forEach((handler) => {
        handler(target, {
            get width() {
                return getWidth(target, borderBoxSize);
            },
            get height() {
                return getHeight(target, borderBoxSize);
            },
        });
    });
}
function notifyAll(entries) {
    entries.forEach(notifyTarget);
}
function createResizeObserver() {
    if (typeof ResizeObserver === "undefined")
        return;
    observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
    if (!observer)
        createResizeObserver();
    const elements = (0,resolve_elements/* resolveElements */.I)(target);
    elements.forEach((element) => {
        let elementHandlers = resizeHandlers.get(element);
        if (!elementHandlers) {
            elementHandlers = new Set();
            resizeHandlers.set(element, elementHandlers);
        }
        elementHandlers.add(handler);
        observer?.observe(element);
    });
    return () => {
        elements.forEach((element) => {
            const elementHandlers = resizeHandlers.get(element);
            elementHandlers?.delete(handler);
            if (!elementHandlers?.size) {
                observer?.unobserve(element);
            }
        });
    };
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/resize/handle-window.mjs
const windowCallbacks = new Set();
let windowResizeHandler;
function createWindowResizeHandler() {
    windowResizeHandler = () => {
        const info = {
            get width() {
                return window.innerWidth;
            },
            get height() {
                return window.innerHeight;
            },
        };
        windowCallbacks.forEach((callback) => callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler)
        createWindowResizeHandler();
    return () => {
        windowCallbacks.delete(callback);
        if (!windowCallbacks.size &&
            typeof windowResizeHandler === "function") {
            window.removeEventListener("resize", windowResizeHandler);
            windowResizeHandler = undefined;
        }
    };
}



;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/resize/index.mjs



function resize(a, b) {
    return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
}



// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/progress.mjs
var progress = __webpack_require__(1756);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/velocity-per-second.mjs
var velocity_per_second = __webpack_require__(8268);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs


/**
 * A time in milliseconds, beyond which we consider the scroll velocity to be 0.
 */
const maxElapsed = 50;
const createAxisInfo = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
});
const createScrollInfo = () => ({
    time: 0,
    x: createAxisInfo(),
    y: createAxisInfo(),
});
const keys = {
    x: {
        length: "Width",
        position: "Left",
    },
    y: {
        length: "Height",
        position: "Top",
    },
};
function updateAxisInfo(element, axisName, info, time) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = element[`scroll${position}`];
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = (0,progress/* progress */.Y)(0, axis.scrollLength, axis.current);
    const elapsed = time - prevTime;
    axis.velocity =
        elapsed > maxElapsed
            ? 0
            : (0,velocity_per_second/* velocityPerSecond */.R)(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
    updateAxisInfo(element, "x", info, time);
    updateAxisInfo(element, "y", info, time);
    info.time = time;
}



// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/interpolate.mjs
var interpolate = __webpack_require__(9613);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs + 1 modules
var offsets_default = __webpack_require__(5819);
// EXTERNAL MODULE: ./node_modules/motion-utils/dist/es/clamp.mjs
var clamp = __webpack_require__(2541);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/is-html-element.mjs
var is_html_element = __webpack_require__(5447);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs


function calcInset(element, container) {
    const inset = { x: 0, y: 0 };
    let current = element;
    while (current && current !== container) {
        if ((0,is_html_element/* isHTMLElement */.R)(current)) {
            inset.x += current.offsetLeft;
            inset.y += current.offsetTop;
            current = current.offsetParent;
        }
        else if (current.tagName === "svg") {
            /**
             * This isn't an ideal approach to measuring the offset of <svg /> tags.
             * It would be preferable, given they behave like HTMLElements in most ways
             * to use offsetLeft/Top. But these don't exist on <svg />. Likewise we
             * can't use .getBBox() like most SVG elements as these provide the offset
             * relative to the SVG itself, which for <svg /> is usually 0x0.
             */
            const svgBoundingBox = current.getBoundingClientRect();
            current = current.parentElement;
            const parentBoundingBox = current.getBoundingClientRect();
            inset.x += svgBoundingBox.left - parentBoundingBox.left;
            inset.y += svgBoundingBox.top - parentBoundingBox.top;
        }
        else if (current instanceof SVGGraphicsElement) {
            const { x, y } = current.getBBox();
            inset.x += x;
            inset.y += y;
            let svg = null;
            let parent = current.parentNode;
            while (!svg) {
                if (parent.tagName === "svg") {
                    svg = parent;
                }
                parent = current.parentNode;
            }
            current = svg;
        }
        else {
            break;
        }
    }
    return inset;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
const namedEdges = {
    start: 0,
    center: 0.5,
    end: 1,
};
function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    /**
     * If we have this edge defined as a preset, replace the definition
     * with the numerical value.
     */
    if (edge in namedEdges) {
        edge = namedEdges[edge];
    }
    /**
     * Handle unit values
     */
    if (typeof edge === "string") {
        const asNumber = parseFloat(edge);
        if (edge.endsWith("px")) {
            delta = asNumber;
        }
        else if (edge.endsWith("%")) {
            edge = asNumber / 100;
        }
        else if (edge.endsWith("vw")) {
            delta = (asNumber / 100) * document.documentElement.clientWidth;
        }
        else if (edge.endsWith("vh")) {
            delta = (asNumber / 100) * document.documentElement.clientHeight;
        }
        else {
            edge = asNumber;
        }
    }
    /**
     * If the edge is defined as a number, handle as a progress value.
     */
    if (typeof edge === "number") {
        delta = length * edge;
    }
    return inset + delta;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs


const defaultOffset = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
        /**
         * If we're provided offset: [0, 0.5, 1] then each number x should become
         * [x, x], so we default to the behaviour of mapping 0 => 0 of both target
         * and container etc.
         */
        offsetDefinition = [offset, offset];
    }
    else if (typeof offset === "string") {
        offset = offset.trim();
        if (offset.includes(" ")) {
            offsetDefinition = offset.split(" ");
        }
        else {
            /**
             * If we're provided a definition like "100px" then we want to apply
             * that only to the top of the target point, leaving the container at 0.
             * Whereas a named offset like "end" should be applied to both.
             */
            offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
        }
    }
    targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
    containerPoint = resolveEdge(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
const ScrollOffset = {
    Enter: [
        [0, 1],
        [1, 1],
    ],
    Exit: [
        [0, 0],
        [1, 0],
    ],
    Any: [
        [1, 0],
        [0, 1],
    ],
    All: [
        [0, 0],
        [1, 1],
    ],
};



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs






const point = { x: 0, y: 0 };
function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg"
        ? target.getBBox()
        : { width: target.clientWidth, height: target.clientHeight };
}
function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = ScrollOffset.All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? calcInset(target, container) : point;
    /**
     * Measure the target and container. If they're the same thing then we
     * use the container's scrollWidth/Height as the target, from there
     * all other calculations can remain the same.
     */
    const targetSize = target === container
        ? { width: container.scrollWidth, height: container.scrollHeight }
        : getTargetSize(target);
    const containerSize = {
        width: container.clientWidth,
        height: container.clientHeight,
    };
    /**
     * Reset the length of the resolved offset array rather than creating a new one.
     * TODO: More reusable data structures for targetSize/containerSize would also be good.
     */
    info[axis].offset.length = 0;
    /**
     * Populate the offset array by resolving the user's offset definition into
     * a list of pixel scroll offets.
     */
    let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for (let i = 0; i < numOffsets; i++) {
        const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
        if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
            hasChanged = true;
        }
        info[axis].offset[i] = offset;
    }
    /**
     * If the pixel scroll offsets have changed, create a new interpolator function
     * to map scroll value into a progress.
     */
    if (hasChanged) {
        info[axis].interpolate = (0,interpolate/* interpolate */.s)(info[axis].offset, (0,offsets_default/* defaultOffset */.Y)(offsetDefinition), { clamp: false });
        info[axis].interpolatorOffsets = [...info[axis].offset];
    }
    info[axis].progress = (0,clamp/* clamp */.u)(0, 1, info[axis].interpolate(info[axis].current));
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs




function measure(container, target = container, info) {
    /**
     * Find inset of target within scrollable container
     */
    info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
        let node = target;
        while (node && node !== container) {
            info.x.targetOffset += node.offsetLeft;
            info.y.targetOffset += node.offsetTop;
            node = node.offsetParent;
        }
    }
    info.x.targetLength =
        target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength =
        target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    /**
     * In development mode ensure scroll containers aren't position: static as this makes
     * it difficult to measure their relative positions.
     */
    if (false) {}
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
        measure: (time) => {
            measure(element, options.target, info);
            updateScrollInfo(element, info, time);
            if (options.offset || options.target) {
                resolveOffsets(element, info, options);
            }
        },
        notify: () => onScroll(info),
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs





const scrollListeners = new WeakMap();
const resizeListeners = new WeakMap();
const onScrollHandlers = new WeakMap();
const getEventTarget = (element) => element === document.scrollingElement ? window : element;
function scrollInfo(onScroll, { container = document.scrollingElement, ...options } = {}) {
    if (!container)
        return noop/* noop */.Z;
    let containerHandlers = onScrollHandlers.get(container);
    /**
     * Get the onScroll handlers for this container.
     * If one isn't found, create a new one.
     */
    if (!containerHandlers) {
        containerHandlers = new Set();
        onScrollHandlers.set(container, containerHandlers);
    }
    /**
     * Create a new onScroll handler for the provided callback.
     */
    const info = createScrollInfo();
    const containerHandler = createOnScrollHandler(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    /**
     * Check if there's a scroll event listener for this container.
     * If not, create one.
     */
    if (!scrollListeners.has(container)) {
        const measureAll = () => {
            for (const handler of containerHandlers) {
                handler.measure(frameloop_frame.frameData.timestamp);
            }
            frameloop_frame/* frame */.Wi.preUpdate(notifyAll);
        };
        const notifyAll = () => {
            for (const handler of containerHandlers) {
                handler.notify();
            }
        };
        const listener = () => frameloop_frame/* frame */.Wi.read(measureAll);
        scrollListeners.set(container, listener);
        const target = getEventTarget(container);
        window.addEventListener("resize", listener, { passive: true });
        if (container !== document.documentElement) {
            resizeListeners.set(container, resize(container, listener));
        }
        target.addEventListener("scroll", listener, { passive: true });
        listener();
    }
    const listener = scrollListeners.get(container);
    frameloop_frame/* frame */.Wi.read(listener, false, true);
    return () => {
        (0,frameloop_frame/* cancelFrame */.Pn)(listener);
        /**
         * Check if we even have any handlers for this container.
         */
        const currentHandlers = onScrollHandlers.get(container);
        if (!currentHandlers)
            return;
        currentHandlers.delete(containerHandler);
        if (currentHandlers.size)
            return;
        /**
         * If no more handlers, remove the scroll listener too.
         */
        const scrollListener = scrollListeners.get(container);
        scrollListeners.delete(container);
        if (scrollListener) {
            getEventTarget(container).removeEventListener("scroll", scrollListener);
            resizeListeners.get(container)?.();
            window.removeEventListener("resize", scrollListener);
        }
    };
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs



const timelineCache = new Map();
function scrollTimelineFallback(options) {
    const currentTime = { value: 0 };
    const cancel = scrollInfo((info) => {
        currentTime.value = info[options.axis].progress * 100;
    }, options);
    return { currentTime, cancel };
}
function getTimeline({ source, container, ...options }) {
    const { axis } = options;
    if (source)
        container = source;
    const containerCache = timelineCache.get(container) ?? new Map();
    timelineCache.set(container, containerCache);
    const targetKey = options.target ?? "self";
    const targetCache = containerCache.get(targetKey) ?? {};
    const axisKey = axis + (options.offset ?? []).join(",");
    if (!targetCache[axisKey]) {
        targetCache[axisKey] =
            !options.target && (0,scroll_timeline/* supportsScrollTimeline */.t)()
                ? new ScrollTimeline({ source: container, axis })
                : scrollTimelineFallback({ container, ...options });
    }
    return targetCache[axisKey];
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs



function attachToAnimation(animation, options) {
    const timeline = getTimeline(options);
    return animation.attachTimeline({
        timeline: options.target ? undefined : timeline,
        observe: (valueAnimation) => {
            valueAnimation.pause();
            return observeTimeline((progress) => {
                valueAnimation.time = valueAnimation.duration * progress;
            }, timeline);
        },
    });
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs




/**
 * If the onScroll function has two arguments, it's expecting
 * more specific information about the scroll from scrollInfo.
 */
function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
}
function attachToFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll)) {
        return scrollInfo((info) => {
            onScroll(info[options.axis].progress, info);
        }, options);
    }
    else {
        return observeTimeline(onScroll, getTimeline(options));
    }
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs




function scroll_scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
    if (!container)
        return noop/* noop */.Z;
    const optionsWithDefaults = { axis, container, ...options };
    return typeof onScroll === "function"
        ? attachToFunction(onScroll, optionsWithDefaults)
        : attachToAnimation(onScroll, optionsWithDefaults);
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(4349);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(381);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-scroll.mjs







function refWarning(name, ref) {
    (0,errors/* warning */.K)(Boolean(!ref || ref.current), `You have defined a ${name} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
const createScrollMotionValues = () => ({
    scrollX: (0,value/* motionValue */.BX)(0),
    scrollY: (0,value/* motionValue */.BX)(0),
    scrollXProgress: (0,value/* motionValue */.BX)(0),
    scrollYProgress: (0,value/* motionValue */.BX)(0),
});
function useScroll({ container, target, layoutEffect = true, ...options } = {}) {
    const values = (0,use_constant/* useConstant */.h)(createScrollMotionValues);
    const useLifecycleEffect = layoutEffect
        ? use_isomorphic_effect/* useIsomorphicLayoutEffect */.L
        : react_.useEffect;
    useLifecycleEffect(() => {
        refWarning("target", target);
        refWarning("container", container);
        return scroll_scroll((_progress, { x, y, }) => {
            values.scrollX.set(x.current);
            values.scrollXProgress.set(x.progress);
            values.scrollY.set(y.current);
            values.scrollYProgress.set(y.progress);
        }, {
            ...options,
            container: container?.current || undefined,
            target: target?.current || undefined,
        });
    }, [container, target, JSON.stringify(options.offset)]);
    return values;
}




/***/ }),

/***/ 6194:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ useTransform)
});

// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/utils/interpolate.mjs
var interpolate = __webpack_require__(9613);
;// CONCATENATED MODULE: ./node_modules/motion-dom/dist/es/utils/transform.mjs


function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = (0,interpolate/* interpolate */.s)(inputRange, outputRange, options);
    return useImmediate ? interpolator(inputValue) : interpolator;
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-constant.mjs
var use_constant = __webpack_require__(4349);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/frameloop/frame.mjs
var frameloop_frame = __webpack_require__(3662);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(381);
// EXTERNAL MODULE: ./node_modules/motion-dom/dist/es/value/index.mjs
var es_value = __webpack_require__(6728);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var MotionConfigContext = __webpack_require__(5248);
;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-motion-value.mjs





/**
 * Creates a `MotionValue` to track the state and velocity of a value.
 *
 * Usually, these are created automatically. For advanced use-cases, like use with `useTransform`, you can create `MotionValue`s externally and pass them into the animated component via the `style` prop.
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const scale = useMotionValue(1)
 *
 *   return <motion.div style={{ scale }} />
 * }
 * ```
 *
 * @param initial - The initial state.
 *
 * @public
 */
function useMotionValue(initial) {
    const value = (0,use_constant/* useConstant */.h)(() => (0,es_value/* motionValue */.BX)(initial));
    /**
     * If this motion value is being used in static mode, like on
     * the Framer canvas, force components to rerender when the motion
     * value is updated.
     */
    const { isStatic } = (0,react_.useContext)(MotionConfigContext/* MotionConfigContext */._);
    if (isStatic) {
        const [, setLatest] = (0,react_.useState)(initial);
        (0,react_.useEffect)(() => value.on("change", setLatest), []);
    }
    return value;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-combine-values.mjs




function useCombineMotionValues(values, combineValues) {
    /**
     * Initialise the returned motion value. This remains the same between renders.
     */
    const value = useMotionValue(combineValues());
    /**
     * Create a function that will update the template motion value with the latest values.
     * This is pre-bound so whenever a motion value updates it can schedule its
     * execution in Framesync. If it's already been scheduled it won't be fired twice
     * in a single frame.
     */
    const updateValue = () => value.set(combineValues());
    /**
     * Synchronously update the motion value with the latest values during the render.
     * This ensures that within a React render, the styles applied to the DOM are up-to-date.
     */
    updateValue();
    /**
     * Subscribe to all motion values found within the template. Whenever any of them change,
     * schedule an update.
     */
    (0,use_isomorphic_effect/* useIsomorphicLayoutEffect */.L)(() => {
        const scheduleUpdate = () => frameloop_frame/* frame */.Wi.preRender(updateValue, false, true);
        const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
        return () => {
            subscriptions.forEach((unsubscribe) => unsubscribe());
            (0,frameloop_frame/* cancelFrame */.Pn)(updateValue);
        };
    });
    return value;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-computed.mjs



function useComputed(compute) {
    /**
     * Open session of collectMotionValues. Any MotionValue that calls get()
     * will be saved into this array.
     */
    es_value/* collectMotionValues */.S1.current = [];
    compute();
    const value = useCombineMotionValues(es_value/* collectMotionValues */.S1.current, compute);
    /**
     * Synchronously close session of collectMotionValues.
     */
    es_value/* collectMotionValues */.S1.current = undefined;
    return value;
}



;// CONCATENATED MODULE: ./node_modules/framer-motion/dist/es/value/use-transform.mjs





function useTransform(input, inputRangeOrTransformer, outputRange, options) {
    if (typeof input === "function") {
        return useComputed(input);
    }
    const transformer = typeof inputRangeOrTransformer === "function"
        ? inputRangeOrTransformer
        : transform(inputRangeOrTransformer, outputRange, options);
    return Array.isArray(input)
        ? useListTransform(input, transformer)
        : useListTransform([input], ([latest]) => transformer(latest));
}
function useListTransform(values, transformer) {
    const latest = (0,use_constant/* useConstant */.h)(() => []);
    return useCombineMotionValues(values, () => {
        latest.length = 0;
        const numValues = values.length;
        for (let i = 0; i < numValues; i++) {
            latest[i] = values[i].get();
        }
        return transformer(latest);
    });
}




/***/ }),

/***/ 5671:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $0: () => (/* binding */ useEventCallback),
/* harmony export */   CT: () => (/* binding */ getSlide),
/* harmony export */   Dy: () => (/* binding */ useSensors),
/* harmony export */   Eq: () => (/* binding */ cleanup),
/* harmony export */   Fy: () => (/* binding */ makeUseContext),
/* harmony export */   Ju: () => (/* binding */ hasSlides),
/* harmony export */   KL: () => (/* binding */ devicePixelRatio),
/* harmony export */   NM: () => (/* binding */ round),
/* harmony export */   Nc: () => (/* binding */ cssClass),
/* harmony export */   OL: () => (/* binding */ useMotionPreference),
/* harmony export */   OV: () => (/* binding */ LightboxPropsProvider),
/* harmony export */   P0: () => (/* binding */ ImageSlide),
/* harmony export */   QB: () => (/* binding */ isImageSlide),
/* harmony export */   RD: () => (/* binding */ useLightboxProps),
/* harmony export */   Su: () => (/* binding */ useRTL),
/* harmony export */   TX: () => (/* binding */ createIconDisabled),
/* harmony export */   U2: () => (/* binding */ createIcon),
/* harmony export */   VI: () => (/* binding */ isImageFitCover),
/* harmony export */   Wy: () => (/* binding */ clsx),
/* harmony export */   Xl: () => (/* binding */ composePrefix),
/* harmony export */   ZP: () => (/* binding */ Lightbox),
/* harmony export */   _7: () => (/* binding */ useAnimation),
/* harmony export */   bQ: () => (/* binding */ usePointerEvents),
/* harmony export */   bc: () => (/* binding */ useController),
/* harmony export */   bt: () => (/* binding */ useLayoutEffect),
/* harmony export */   cO: () => (/* binding */ makeComposePrefix),
/* harmony export */   gJ: () => (/* binding */ cssVar),
/* harmony export */   hI: () => (/* binding */ useEvents),
/* harmony export */   hU: () => (/* binding */ IconButton),
/* harmony export */   iv: () => (/* binding */ getSlideKey),
/* harmony export */   l6: () => (/* binding */ createModule),
/* harmony export */   mw: () => (/* binding */ calculatePreload),
/* harmony export */   oc: () => (/* binding */ useLightboxState),
/* harmony export */   t$: () => (/* binding */ useKeyboardNavigation),
/* harmony export */   tS: () => (/* binding */ useDocumentContext),
/* harmony export */   wQ: () => (/* binding */ addToolbarButton)
/* harmony export */ });
/* unused harmony exports Carousel, CarouselModule, CloseIcon, Controller, ControllerContext, ControllerModule, DocumentContext, DocumentContextProvider, ErrorIcon, EventsContext, EventsProvider, Lightbox, LightboxDefaultProps, LightboxDispatchContext, LightboxPropsContext, LightboxRoot, LightboxStateContext, LightboxStateProvider, LoadingIcon, Navigation, NavigationButton, NavigationModule, NextIcon, NoScroll, NoScrollModule, Portal, PortalModule, PreviousIcon, Root, RootModule, SwipeState, TimeoutsContext, TimeoutsProvider, Toolbar, ToolbarModule, computeSlideRect, createNode, getSlideIfPresent, getSlideIndex, hasWindow, label, makeInertWhen, parseInt, parseLengthPercentage, reflow, setRef, stopNavigationEventsPropagation, useContainerRect, useDelay, useForkRef, useLightboxDispatch, useLoseFocus, useNavigationState, usePointerSwipe, usePreventWheelDefaults, useThrottle, useTimeouts, useWheelSwipe, withPlugins */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5377);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8704);
'use client';





const cssPrefix$3 = "yarl__";
function clsx(...classes) {
    return [...classes].filter(Boolean).join(" ");
}
function cssClass(name) {
    return `${cssPrefix$3}${name}`;
}
function cssVar(name) {
    return `--${cssPrefix$3}${name}`;
}
function composePrefix(base, prefix) {
    return `${base}${prefix ? `_${prefix}` : ""}`;
}
function makeComposePrefix(base) {
    return (prefix) => composePrefix(base, prefix);
}
function label(labels, defaultLabel) {
    var _a;
    return (_a = labels === null || labels === void 0 ? void 0 : labels[defaultLabel]) !== null && _a !== void 0 ? _a : defaultLabel;
}
function cleanup(...cleaners) {
    return () => {
        cleaners.forEach((cleaner) => {
            cleaner();
        });
    };
}
function makeUseContext(name, contextName, context) {
    return () => {
        const ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(context);
        if (!ctx) {
            throw new Error(`${name} must be used within a ${contextName}.Provider`);
        }
        return ctx;
    };
}
function hasWindow() {
    return typeof window !== "undefined";
}
function round(value, decimals = 0) {
    const factor = 10 ** decimals;
    return Math.round((value + Number.EPSILON) * factor) / factor;
}
function isImageSlide(slide) {
    return slide.type === undefined || slide.type === "image";
}
function isImageFitCover(image, imageFit) {
    return image.imageFit === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_COVER */ .rO || (image.imageFit !== _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_CONTAIN */ .j3 && imageFit === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_COVER */ .rO);
}
function parseInt(value) {
    return typeof value === "string" ? Number.parseInt(value, 10) : value;
}
function parseLengthPercentage(input) {
    if (typeof input === "number") {
        return { pixel: input };
    }
    if (typeof input === "string") {
        const value = parseInt(input);
        return input.endsWith("%") ? { percent: value } : { pixel: value };
    }
    return { pixel: 0 };
}
function computeSlideRect(containerRect, padding) {
    const paddingValue = parseLengthPercentage(padding);
    const paddingPixels = paddingValue.percent !== undefined ? (containerRect.width / 100) * paddingValue.percent : paddingValue.pixel;
    return {
        width: Math.max(containerRect.width - 2 * paddingPixels, 0),
        height: Math.max(containerRect.height - 2 * paddingPixels, 0),
    };
}
function devicePixelRatio() {
    return (hasWindow() ? window === null || window === void 0 ? void 0 : window.devicePixelRatio : undefined) || 1;
}
function getSlideIndex(index, slidesCount) {
    return slidesCount > 0 ? ((index % slidesCount) + slidesCount) % slidesCount : 0;
}
function hasSlides(slides) {
    return slides.length > 0;
}
function getSlide(slides, index) {
    return slides[getSlideIndex(index, slides.length)];
}
function getSlideIfPresent(slides, index) {
    return hasSlides(slides) ? getSlide(slides, index) : undefined;
}
function getSlideKey(slide) {
    return isImageSlide(slide) ? slide.src : undefined;
}
function addToolbarButton(toolbar, key, button) {
    if (!button)
        return toolbar;
    const { buttons, ...restToolbar } = toolbar;
    const index = buttons.findIndex((item) => item === key);
    const buttonWithKey = react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(button) ? react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(button, { key }, null) : button;
    if (index >= 0) {
        const result = [...buttons];
        result.splice(index, 1, buttonWithKey);
        return { buttons: result, ...restToolbar };
    }
    return { buttons: [buttonWithKey, ...buttons], ...restToolbar };
}
function stopNavigationEventsPropagation() {
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    return { onPointerDown: stopPropagation, onKeyDown: stopPropagation, onWheel: stopPropagation };
}
function calculatePreload(carousel, slides, minimum = 0) {
    return Math.min(carousel.preload, Math.max(carousel.finite ? slides.length - 1 : Math.floor(slides.length / 2), minimum));
}
const isReact19 = Number(react__WEBPACK_IMPORTED_MODULE_0__.version.split(".")[0]) >= 19;
function makeInertWhen(condition) {
    const legacyValue = condition ? "" : undefined;
    return { inert: isReact19 ? condition : legacyValue };
}
function reflow(node) {
    node.scrollTop;
}

const LightboxDefaultProps = {
    open: false,
    close: () => { },
    index: 0,
    slides: [],
    render: {},
    plugins: [],
    toolbar: { buttons: [_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9] },
    labels: {},
    animation: {
        fade: 250,
        swipe: 500,
        easing: {
            fade: "ease",
            swipe: "ease-out",
            navigation: "ease-in-out",
        },
    },
    carousel: {
        finite: false,
        preload: 2,
        padding: "16px",
        spacing: "30%",
        imageFit: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .IMAGE_FIT_CONTAIN */ .j3,
        imageProps: {},
    },
    controller: {
        ref: null,
        focus: true,
        aria: false,
        touchAction: "none",
        closeOnPullUp: false,
        closeOnPullDown: false,
        closeOnBackdropClick: false,
        preventDefaultWheelX: true,
        preventDefaultWheelY: false,
        disableSwipeNavigation: false,
    },
    portal: {},
    noScroll: {
        disabled: false,
    },
    on: {},
    styles: {},
    className: "",
};

function createModule(name, component) {
    return { name, component };
}
function createNode(module, children) {
    return { module, children };
}
function traverseNode(node, target, apply) {
    if (node.module.name === target) {
        return apply(node);
    }
    if (node.children) {
        return [
            createNode(node.module, node.children.flatMap((n) => { var _a; return (_a = traverseNode(n, target, apply)) !== null && _a !== void 0 ? _a : []; })),
        ];
    }
    return [node];
}
function traverse(nodes, target, apply) {
    return nodes.flatMap((node) => { var _a; return (_a = traverseNode(node, target, apply)) !== null && _a !== void 0 ? _a : []; });
}
function withPlugins(root, plugins = [], augmentations = []) {
    let config = root;
    const contains = (target) => {
        const nodes = [...config];
        while (nodes.length > 0) {
            const node = nodes.pop();
            if ((node === null || node === void 0 ? void 0 : node.module.name) === target)
                return true;
            if (node === null || node === void 0 ? void 0 : node.children)
                nodes.push(...node.children);
        }
        return false;
    };
    const addParent = (target, module) => {
        if (target === "") {
            config = [createNode(module, config)];
            return;
        }
        config = traverse(config, target, (node) => [createNode(module, [node])]);
    };
    const append = (target, module) => {
        config = traverse(config, target, (node) => [createNode(node.module, [createNode(module, node.children)])]);
    };
    const addChild = (target, module, precede) => {
        config = traverse(config, target, (node) => {
            var _a;
            return [
                createNode(node.module, [
                    ...(precede ? [createNode(module)] : []),
                    ...((_a = node.children) !== null && _a !== void 0 ? _a : []),
                    ...(!precede ? [createNode(module)] : []),
                ]),
            ];
        });
    };
    const addSibling = (target, module, precede) => {
        config = traverse(config, target, (node) => [
            ...(precede ? [createNode(module)] : []),
            node,
            ...(!precede ? [createNode(module)] : []),
        ]);
    };
    const addModule = (module) => {
        append(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CONTROLLER */ .l4, module);
    };
    const replace = (target, module) => {
        config = traverse(config, target, (node) => [createNode(module, node.children)]);
    };
    const remove = (target) => {
        config = traverse(config, target, (node) => node.children);
    };
    const augment = (augmentation) => {
        augmentations.push(augmentation);
    };
    plugins.forEach((plugin) => {
        plugin({
            contains,
            addParent,
            append,
            addChild,
            addSibling,
            addModule,
            replace,
            remove,
            augment,
        });
    });
    return {
        config,
        augmentation: (props) => augmentations.reduce((acc, augmentation) => augmentation(acc), props),
    };
}

const DocumentContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useDocumentContext = makeUseContext("useDocument", "DocumentContext", DocumentContext);
function DocumentContextProvider({ nodeRef, children }) {
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const getOwnerDocument = (node) => { var _a; return ((_a = (node || nodeRef.current)) === null || _a === void 0 ? void 0 : _a.ownerDocument) || document; };
        const getOwnerWindow = (node) => { var _a; return ((_a = getOwnerDocument(node)) === null || _a === void 0 ? void 0 : _a.defaultView) || window; };
        return { getOwnerDocument, getOwnerWindow };
    }, [nodeRef]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DocumentContext.Provider, { value: context }, children);
}

const EventsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useEvents = makeUseContext("useEvents", "EventsContext", EventsContext);
function EventsProvider({ children }) {
    const [subscriptions] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        Object.keys(subscriptions).forEach((topic) => delete subscriptions[topic]);
    }, [subscriptions]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const unsubscribe = (topic, callback) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.splice(0, subscriptions[topic].length, ...subscriptions[topic].filter((cb) => cb !== callback));
        };
        const subscribe = (topic, callback) => {
            if (!subscriptions[topic]) {
                subscriptions[topic] = [];
            }
            subscriptions[topic].push(callback);
            return () => unsubscribe(topic, callback);
        };
        const publish = (...[topic, event]) => {
            var _a;
            (_a = subscriptions[topic]) === null || _a === void 0 ? void 0 : _a.forEach((callback) => callback(event));
        };
        return { publish, subscribe, unsubscribe };
    }, [subscriptions]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(EventsContext.Provider, { value: context }, children);
}

const LightboxPropsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxProps = makeUseContext("useLightboxProps", "LightboxPropsContext", LightboxPropsContext);
function LightboxPropsProvider({ children, ...props }) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxPropsContext.Provider, { value: props }, children);
}

const LightboxStateContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxState = makeUseContext("useLightboxState", "LightboxStateContext", LightboxStateContext);
const LightboxDispatchContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useLightboxDispatch = makeUseContext("useLightboxDispatch", "LightboxDispatchContext", LightboxDispatchContext);
function reducer(state, action) {
    switch (action.type) {
        case "swipe": {
            const { slides } = state;
            const increment = (action === null || action === void 0 ? void 0 : action.increment) || 0;
            const globalIndex = state.globalIndex + increment;
            const currentIndex = getSlideIndex(globalIndex, slides.length);
            const currentSlide = getSlideIfPresent(slides, currentIndex);
            const animation = increment || action.duration !== undefined
                ? {
                    increment,
                    duration: action.duration,
                    easing: action.easing,
                }
                : undefined;
            return { slides, currentIndex, globalIndex, currentSlide, animation };
        }
        case "update":
            if (action.slides !== state.slides || action.index !== state.currentIndex) {
                return {
                    slides: action.slides,
                    currentIndex: action.index,
                    globalIndex: action.index,
                    currentSlide: getSlideIfPresent(action.slides, action.index),
                };
            }
            return state;
        default:
            throw new Error(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .UNKNOWN_ACTION_TYPE */ .c3);
    }
}
function LightboxStateProvider({ slides, index, children }) {
    const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(reducer, {
        slides,
        currentIndex: index,
        globalIndex: index,
        currentSlide: getSlideIfPresent(slides, index),
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        dispatch({ type: "update", slides, index });
    }, [slides, index]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ ...state, state, dispatch }), [state, dispatch]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxDispatchContext.Provider, { value: dispatch },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxStateContext.Provider, { value: context }, children)));
}

const TimeoutsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useTimeouts = makeUseContext("useTimeouts", "TimeoutsContext", TimeoutsContext);
function TimeoutsProvider({ children }) {
    const [timeouts] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => () => {
        timeouts.forEach((tid) => window.clearTimeout(tid));
        timeouts.splice(0, timeouts.length);
    }, [timeouts]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
        const removeTimeout = (id) => {
            timeouts.splice(0, timeouts.length, ...timeouts.filter((tid) => tid !== id));
        };
        const setTimeout = (fn, delay) => {
            const id = window.setTimeout(() => {
                removeTimeout(id);
                fn();
            }, delay);
            timeouts.push(id);
            return id;
        };
        const clearTimeout = (id) => {
            if (id !== undefined) {
                removeTimeout(id);
                window.clearTimeout(id);
            }
        };
        return { setTimeout, clearTimeout };
    }, [timeouts]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(TimeoutsContext.Provider, { value: context }, children);
}

const IconButton = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function IconButton({ label: label$1, className, icon: Icon, renderIcon, onClick, style, ...rest }, ref) {
    const { styles, labels } = useLightboxProps();
    const buttonLabel = label(labels, label$1);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { ref: ref, type: "button", title: buttonLabel, "aria-label": buttonLabel, className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_BUTTON */ .bg), className), onClick: onClick, style: { ...style, ...styles.button }, ...rest }, renderIcon ? renderIcon() : react__WEBPACK_IMPORTED_MODULE_0__.createElement(Icon, { className: cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg), style: styles.icon })));
});

function svgIcon(name, children) {
    const icon = (props) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "24", height: "24", "aria-hidden": "true", focusable: "false", ...props }, children));
    icon.displayName = name;
    return icon;
}
function createIcon(name, glyph) {
    return svgIcon(name, react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "currentColor" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        glyph));
}
function createIconDisabled(name, glyph) {
    return svgIcon(name, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", { id: "strike" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "white" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0L24 24", stroke: "black", strokeWidth: 4 }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0.70707 2.121320L21.878680 23.292883", stroke: "currentColor", strokeWidth: 2 }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", { fill: "currentColor", mask: "url(#strike)" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
            glyph)));
}
const CloseIcon = createIcon("Close", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }));
const PreviousIcon = createIcon("Previous", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" }));
const NextIcon = createIcon("Next", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" }));
const LoadingIcon = createIcon("Loading", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, Array.from({ length: 8 }).map((_, index, array) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", { key: index, x1: "12", y1: "6.5", x2: "12", y2: "1.8", strokeLinecap: "round", strokeWidth: "2.6", stroke: "currentColor", strokeOpacity: (1 / array.length) * (index + 1), transform: `rotate(${(360 / array.length) * index}, 12, 12)` })))));
const ErrorIcon = createIcon("Error", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M21.9,21.9l-8.49-8.49l0,0L3.59,3.59l0,0L2.1,2.1L0.69,3.51L3,5.83V19c0,1.1,0.9,2,2,2h13.17l2.31,2.31L21.9,21.9z M5,18 l3.5-4.5l2.5,3.01L12.17,15l3,3H5z M21,18.17L5.83,3H19c1.1,0,2,0.9,2,2V18.17z" }));

const useLayoutEffect = hasWindow() ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

function useMotionPreference() {
    const [reduceMotion, setReduceMotion] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a, _b;
        const mediaQuery = (_a = window.matchMedia) === null || _a === void 0 ? void 0 : _a.call(window, "(prefers-reduced-motion: reduce)");
        setReduceMotion(mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.matches);
        const listener = (event) => setReduceMotion(event.matches);
        (_b = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.addEventListener) === null || _b === void 0 ? void 0 : _b.call(mediaQuery, "change", listener);
        return () => { var _a; return (_a = mediaQuery === null || mediaQuery === void 0 ? void 0 : mediaQuery.removeEventListener) === null || _a === void 0 ? void 0 : _a.call(mediaQuery, "change", listener); };
    }, []);
    return reduceMotion;
}

function currentTransformation(node) {
    let x = 0;
    let y = 0;
    let z = 0;
    const matrix = window.getComputedStyle(node).transform;
    const matcher = matrix.match(/matrix.*\((.+)\)/);
    if (matcher) {
        const values = matcher[1].split(",").map(parseInt);
        if (values.length === 6) {
            x = values[4];
            y = values[5];
        }
        else if (values.length === 16) {
            x = values[12];
            y = values[13];
            z = values[14];
        }
    }
    return { x, y, z };
}
function useAnimation(nodeRef, computeAnimation) {
    const snapshot = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const animation = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const reduceMotion = useMotionPreference();
    useLayoutEffect(() => {
        var _a, _b, _c;
        if (nodeRef.current && snapshot.current !== undefined && !reduceMotion) {
            const { keyframes, duration, easing, onfinish } = computeAnimation(snapshot.current, nodeRef.current.getBoundingClientRect(), currentTransformation(nodeRef.current)) || {};
            if (keyframes && duration) {
                (_a = animation.current) === null || _a === void 0 ? void 0 : _a.cancel();
                animation.current = undefined;
                try {
                    animation.current = (_c = (_b = nodeRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, keyframes, { duration, easing });
                }
                catch (err) {
                    console.error(err);
                }
                if (animation.current) {
                    animation.current.onfinish = () => {
                        animation.current = undefined;
                        onfinish === null || onfinish === void 0 ? void 0 : onfinish();
                    };
                }
            }
        }
        snapshot.current = undefined;
    });
    return {
        prepareAnimation: (currentSnapshot) => {
            snapshot.current = currentSnapshot;
        },
        isAnimationPlaying: () => { var _a; return ((_a = animation.current) === null || _a === void 0 ? void 0 : _a.playState) === "running"; },
    };
}

function useContainerRect() {
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const observerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const [containerRect, setContainerRect] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const setContainerRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        containerRef.current = node;
        if (observerRef.current) {
            observerRef.current.disconnect();
            observerRef.current = undefined;
        }
        const updateContainerRect = () => {
            if (node) {
                const styles = window.getComputedStyle(node);
                const parse = (value) => parseFloat(value) || 0;
                setContainerRect({
                    width: Math.round(node.clientWidth - parse(styles.paddingLeft) - parse(styles.paddingRight)),
                    height: Math.round(node.clientHeight - parse(styles.paddingTop) - parse(styles.paddingBottom)),
                });
            }
            else {
                setContainerRect(undefined);
            }
        };
        updateContainerRect();
        if (node && typeof ResizeObserver !== "undefined") {
            observerRef.current = new ResizeObserver(updateContainerRect);
            observerRef.current.observe(node);
        }
    }, []);
    return { setContainerRef, containerRef, containerRect };
}

function useDelay() {
    const timeoutId = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const { setTimeout, clearTimeout } = useTimeouts();
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((callback, delay) => {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(callback, delay > 0 ? delay : 0);
    }, [setTimeout, clearTimeout]);
}

function useEventCallback(fn) {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);
    useLayoutEffect(() => {
        ref.current = fn;
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => { var _a; return (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, ...args); }, []);
}

function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
}
function useForkRef(refA, refB) {
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => refA == null && refB == null
        ? null
        : (refValue) => {
            setRef(refA, refValue);
            setRef(refB, refValue);
        }, [refA, refB]);
}

function useLoseFocus(focus, disabled = false) {
    const focused = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    useLayoutEffect(() => {
        if (disabled && focused.current) {
            focused.current = false;
            focus();
        }
    }, [disabled, focus]);
    const onFocus = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        focused.current = true;
    }, []);
    const onBlur = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        focused.current = false;
    }, []);
    return { onFocus, onBlur };
}

function useRTL() {
    const [isRTL, setIsRTL] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    useLayoutEffect(() => {
        setIsRTL(window.getComputedStyle(window.document.documentElement).direction === "rtl");
    }, []);
    return isRTL;
}

function useSensors() {
    const [subscribers] = react__WEBPACK_IMPORTED_MODULE_0__.useState({});
    const notifySubscribers = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((type, event) => {
        var _a;
        (_a = subscribers[type]) === null || _a === void 0 ? void 0 : _a.forEach((listener) => {
            if (!event.isPropagationStopped())
                listener(event);
        });
    }, [subscribers]);
    const registerSensors = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        onPointerDown: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_DOWN */ .NZ, event),
        onPointerMove: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_MOVE */ .N4, event),
        onPointerUp: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_UP */ .S2, event),
        onPointerLeave: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_LEAVE */ .pE, event),
        onPointerCancel: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_CANCEL */ .Vt, event),
        onKeyDown: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_DOWN */ .ds, event),
        onKeyUp: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_UP */ .Bm, event),
        onWheel: (event) => notifySubscribers(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_WHEEL */ .yq, event),
    }), [notifySubscribers]);
    const subscribeSensors = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((type, callback) => {
        if (!subscribers[type]) {
            subscribers[type] = [];
        }
        subscribers[type].unshift(callback);
        return () => {
            const listeners = subscribers[type];
            if (listeners) {
                listeners.splice(0, listeners.length, ...listeners.filter((el) => el !== callback));
            }
        };
    }, [subscribers]);
    return { registerSensors, subscribeSensors };
}

function useThrottle(callback, delay) {
    const lastCallbackTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const delayCallback = useDelay();
    const executeCallback = useEventCallback((...args) => {
        lastCallbackTime.current = Date.now();
        callback(args);
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...args) => {
        delayCallback(() => {
            executeCallback(args);
        }, delay - (Date.now() - lastCallbackTime.current));
    }, [delay, executeCallback, delayCallback]);
}

const slidePrefix = makeComposePrefix("slide");
const slideImagePrefix = makeComposePrefix("slide_image");
function ImageSlide({ slide: image, offset, render, rect, imageFit, imageProps, onClick, onLoad, onError, style, }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const [status, setStatus] = react__WEBPACK_IMPORTED_MODULE_0__.useState(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe);
    const { publish } = useEvents();
    const { setTimeout } = useTimeouts();
    const imageRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (offset === 0) {
            publish((0,_types_js__WEBPACK_IMPORTED_MODULE_2__/* .activeSlideStatus */ .J1)(status));
        }
    }, [offset, status, publish]);
    const handleLoading = useEventCallback((img) => {
        ("decode" in img ? img.decode() : Promise.resolve())
            .catch(() => { })
            .then(() => {
            if (!img.parentNode) {
                return;
            }
            setStatus(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_COMPLETE */ .Zv);
            setTimeout(() => {
                onLoad === null || onLoad === void 0 ? void 0 : onLoad(img);
            }, 0);
        });
    });
    const setImageRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((img) => {
        imageRef.current = img;
        if (img === null || img === void 0 ? void 0 : img.complete) {
            handleLoading(img);
        }
    }, [handleLoading]);
    const handleOnLoad = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        handleLoading(event.currentTarget);
    }, [handleLoading]);
    const handleOnError = useEventCallback(() => {
        setStatus(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_ERROR */ .fS);
        onError === null || onError === void 0 ? void 0 : onError();
    });
    const cover = isImageFitCover(image, imageFit);
    const nonInfinite = (value, fallback) => (Number.isFinite(value) ? value : fallback);
    const maxWidth = nonInfinite(Math.max(...((_b = (_a = image.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) !== null && _b !== void 0 ? _b : []).concat(image.width ? [image.width] : []).filter(Boolean)), ((_c = imageRef.current) === null || _c === void 0 ? void 0 : _c.naturalWidth) || 0);
    const maxHeight = nonInfinite(Math.max(...((_e = (_d = image.srcSet) === null || _d === void 0 ? void 0 : _d.map((x) => x.height)) !== null && _e !== void 0 ? _e : []).concat(image.height ? [image.height] : []).filter(Boolean)), ((_f = imageRef.current) === null || _f === void 0 ? void 0 : _f.naturalHeight) || 0);
    const defaultStyle = maxWidth && maxHeight
        ? {
            maxWidth: `min(${maxWidth}px, 100%)`,
            maxHeight: `min(${maxHeight}px, 100%)`,
        }
        : {
            maxWidth: "100%",
            maxHeight: "100%",
        };
    const srcSet = (_g = image.srcSet) === null || _g === void 0 ? void 0 : _g.sort((a, b) => a.width - b.width).map((item) => `${item.src} ${item.width}w`).join(", ");
    const estimateActualWidth = () => rect && !cover && image.width && image.height ? (rect.height / image.height) * image.width : Number.MAX_VALUE;
    const sizes = srcSet && rect && hasWindow() ? `${Math.round(Math.min(estimateActualWidth(), rect.width))}px` : undefined;
    const { style: imagePropsStyle, className: imagePropsClassName, ...restImageProps } = imageProps || {};
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { ref: setImageRef, onLoad: handleOnLoad, onError: handleOnError, onClick: onClick, draggable: false, className: clsx(cssClass(slideImagePrefix()), cover && cssClass(slideImagePrefix("cover")), status !== _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_COMPLETE */ .Zv && cssClass(slideImagePrefix("loading")), imagePropsClassName), style: { ...defaultStyle, ...style, ...imagePropsStyle }, ...restImageProps, alt: image.alt, sizes: sizes, srcSet: srcSet, src: image.src }),
        status !== _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_COMPLETE */ .Zv && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_PLACEHOLDER */ .$L)) },
            status === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe &&
                ((render === null || render === void 0 ? void 0 : render.iconLoading) ? (render.iconLoading()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingIcon, { className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg), cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_LOADING */ .Xe))) }))),
            status === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_ERROR */ .fS &&
                ((render === null || render === void 0 ? void 0 : render.iconError) ? (render.iconError()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorIcon, { className: clsx(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg), cssClass(slidePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .SLIDE_STATUS_ERROR */ .fS))) })))))));
}

const LightboxRoot = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function LightboxRoot({ className, children, ...rest }, ref) {
    const nodeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(DocumentContextProvider, { nodeRef: nodeRef },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: useForkRef(ref, nodeRef), className: clsx(cssClass("root"), className), ...rest }, children)));
});

var SwipeState;
(function (SwipeState) {
    SwipeState[SwipeState["NONE"] = 0] = "NONE";
    SwipeState[SwipeState["SWIPE"] = 1] = "SWIPE";
    SwipeState[SwipeState["PULL"] = 2] = "PULL";
    SwipeState[SwipeState["ANIMATION"] = 3] = "ANIMATION";
})(SwipeState || (SwipeState = {}));

function usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled) {
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => !disabled
        ? cleanup(subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_DOWN */ .NZ, onPointerDown), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_MOVE */ .N4, onPointerMove), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_UP */ .S2, onPointerUp), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_LEAVE */ .pE, onPointerUp), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_POINTER_CANCEL */ .Vt, onPointerUp))
        : () => { }, [subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled]);
}

var Gesture;
(function (Gesture) {
    Gesture[Gesture["NONE"] = 0] = "NONE";
    Gesture[Gesture["SWIPE"] = 1] = "SWIPE";
    Gesture[Gesture["PULL"] = 2] = "PULL";
})(Gesture || (Gesture = {}));
const SWIPE_THRESHOLD = 30;
function usePointerSwipe({ disableSwipeNavigation, closeOnBackdropClick }, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel, pullUpEnabled, pullDownEnabled, onPullStart, onPullProgress, onPullFinish, onPullCancel, onClose) {
    const offset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pointers = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const activePointer = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const startTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const gesture = react__WEBPACK_IMPORTED_MODULE_0__.useRef(Gesture.NONE);
    const clearPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        if (activePointer.current === event.pointerId) {
            activePointer.current = undefined;
            gesture.current = Gesture.NONE;
        }
        const currentPointers = pointers.current;
        currentPointers.splice(0, currentPointers.length, ...currentPointers.filter((p) => p.pointerId !== event.pointerId));
    }, []);
    const addPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        clearPointer(event);
        event.persist();
        pointers.current.push(event);
    }, [clearPointer]);
    const lookupPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => pointers.current.find(({ pointerId }) => event.pointerId === pointerId), []);
    const onPointerDown = useEventCallback((event) => {
        addPointer(event);
    });
    const exceedsPullThreshold = (value, threshold) => (pullDownEnabled && value > threshold) || (pullUpEnabled && value < -threshold);
    const onPointerUp = useEventCallback((event) => {
        const pointer = lookupPointer(event);
        if (pointer) {
            if (activePointer.current === event.pointerId) {
                const duration = Date.now() - startTime.current;
                const currentOffset = offset.current;
                if (gesture.current === Gesture.SWIPE) {
                    if (Math.abs(currentOffset) > 0.3 * containerWidth ||
                        (Math.abs(currentOffset) > 5 && duration < swipeAnimationDuration)) {
                        onSwipeFinish(currentOffset, duration);
                    }
                    else {
                        onSwipeCancel(currentOffset);
                    }
                }
                else if (gesture.current === Gesture.PULL) {
                    if (exceedsPullThreshold(currentOffset, 2 * SWIPE_THRESHOLD)) {
                        onPullFinish(currentOffset, duration);
                    }
                    else {
                        onPullCancel(currentOffset);
                    }
                }
                offset.current = 0;
                gesture.current = Gesture.NONE;
            }
            else {
                const { target } = event;
                if (closeOnBackdropClick &&
                    target instanceof HTMLElement &&
                    target === pointer.target &&
                    (target.classList.contains(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_SLIDE */ .hD)) || target.classList.contains(cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_SLIDE_WRAPPER */ .af)))) {
                    onClose();
                }
            }
        }
        clearPointer(event);
    });
    const onPointerMove = useEventCallback((event) => {
        const pointer = lookupPointer(event);
        if (pointer) {
            const isCurrentPointer = activePointer.current === event.pointerId;
            if (event.buttons === 0) {
                if (isCurrentPointer && offset.current !== 0) {
                    onPointerUp(event);
                }
                else {
                    clearPointer(pointer);
                }
                return;
            }
            const deltaX = event.clientX - pointer.clientX;
            const deltaY = event.clientY - pointer.clientY;
            if (activePointer.current === undefined) {
                const startGesture = (newGesture) => {
                    addPointer(event);
                    activePointer.current = event.pointerId;
                    startTime.current = Date.now();
                    gesture.current = newGesture;
                };
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD && isSwipeValid(deltaX)) {
                    if (!disableSwipeNavigation) {
                        startGesture(Gesture.SWIPE);
                        onSwipeStart();
                    }
                }
                else if (Math.abs(deltaY) > Math.abs(deltaX) && exceedsPullThreshold(deltaY, SWIPE_THRESHOLD)) {
                    startGesture(Gesture.PULL);
                    onPullStart();
                }
            }
            else if (isCurrentPointer) {
                if (gesture.current === Gesture.SWIPE) {
                    offset.current = deltaX;
                    onSwipeProgress(deltaX);
                }
                else if (gesture.current === Gesture.PULL) {
                    offset.current = deltaY;
                    onPullProgress(deltaY);
                }
            }
        }
    });
    usePointerEvents(subscribeSensors, onPointerDown, onPointerMove, onPointerUp);
}

function usePreventWheelDefaults({ preventDefaultWheelX, preventDefaultWheelY, }) {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const listener = useEventCallback((event) => {
        const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
        if ((horizontal && preventDefaultWheelX) || (!horizontal && preventDefaultWheelY) || event.ctrlKey) {
            event.preventDefault();
        }
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        var _a;
        if (node) {
            node.addEventListener("wheel", listener, { passive: false });
        }
        else {
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.removeEventListener("wheel", listener);
        }
        ref.current = node;
    }, [listener]);
}

function useWheelSwipe(swipeState, subscribeSensors, isSwipeValid, containerWidth, swipeAnimationDuration, onSwipeStart, onSwipeProgress, onSwipeFinish, onSwipeCancel) {
    const offset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const intent = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const intentCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const resetCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const wheelInertia = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const wheelInertiaCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const startTime = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const { setTimeout, clearTimeout } = useTimeouts();
    const cancelSwipeIntentCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (intentCleanup.current) {
            clearTimeout(intentCleanup.current);
            intentCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const cancelSwipeResetCleanup = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        if (resetCleanup.current) {
            clearTimeout(resetCleanup.current);
            resetCleanup.current = undefined;
        }
    }, [clearTimeout]);
    const handleCleanup = useEventCallback(() => {
        if (swipeState !== SwipeState.SWIPE) {
            offset.current = 0;
            startTime.current = 0;
            cancelSwipeIntentCleanup();
            cancelSwipeResetCleanup();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(handleCleanup, [swipeState, handleCleanup]);
    const handleCancelSwipe = useEventCallback((currentSwipeOffset) => {
        resetCleanup.current = undefined;
        if (offset.current === currentSwipeOffset) {
            onSwipeCancel(offset.current);
        }
    });
    const onWheel = useEventCallback((event) => {
        if (event.ctrlKey) {
            return;
        }
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
            return;
        }
        const setWheelInertia = (inertia) => {
            wheelInertia.current = inertia;
            clearTimeout(wheelInertiaCleanup.current);
            wheelInertiaCleanup.current =
                inertia > 0
                    ? setTimeout(() => {
                        wheelInertia.current = 0;
                        wheelInertiaCleanup.current = undefined;
                    }, 300)
                    : undefined;
        };
        if (swipeState === SwipeState.NONE) {
            if (Math.abs(event.deltaX) <= 1.2 * Math.abs(wheelInertia.current)) {
                setWheelInertia(event.deltaX);
                return;
            }
            if (!isSwipeValid(-event.deltaX)) {
                return;
            }
            intent.current += event.deltaX;
            cancelSwipeIntentCleanup();
            if (Math.abs(intent.current) > 30) {
                intent.current = 0;
                setWheelInertia(0);
                startTime.current = Date.now();
                onSwipeStart();
            }
            else {
                const currentSwipeIntent = intent.current;
                intentCleanup.current = setTimeout(() => {
                    intentCleanup.current = undefined;
                    if (currentSwipeIntent === intent.current) {
                        intent.current = 0;
                    }
                }, swipeAnimationDuration);
            }
        }
        else if (swipeState === SwipeState.SWIPE) {
            let newSwipeOffset = offset.current - event.deltaX;
            newSwipeOffset = Math.min(Math.abs(newSwipeOffset), containerWidth) * Math.sign(newSwipeOffset);
            offset.current = newSwipeOffset;
            onSwipeProgress(newSwipeOffset);
            cancelSwipeResetCleanup();
            if (Math.abs(newSwipeOffset) > 0.2 * containerWidth) {
                setWheelInertia(event.deltaX);
                onSwipeFinish(newSwipeOffset, Date.now() - startTime.current);
                return;
            }
            resetCleanup.current = setTimeout(() => handleCancelSwipe(newSwipeOffset), 2 * swipeAnimationDuration);
        }
        else {
            setWheelInertia(event.deltaX);
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_WHEEL */ .yq, onWheel), [subscribeSensors, onWheel]);
}

const cssContainerPrefix = makeComposePrefix("container");
const ControllerContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useController = makeUseContext("useController", "ControllerContext", ControllerContext);
function Controller({ children, ...props }) {
    var _a;
    const { carousel, animation, controller, on, styles, render } = props;
    const { closeOnPullUp, closeOnPullDown, preventDefaultWheelX, preventDefaultWheelY } = controller;
    const [toolbarWidth, setToolbarWidth] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const state = useLightboxState();
    const dispatch = useLightboxDispatch();
    const [swipeState, setSwipeState] = react__WEBPACK_IMPORTED_MODULE_0__.useState(SwipeState.NONE);
    const swipeOffset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pullOffset = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pullOpacity = react__WEBPACK_IMPORTED_MODULE_0__.useRef(1);
    const { registerSensors, subscribeSensors } = useSensors();
    const { subscribe, publish } = useEvents();
    const cleanupAnimationIncrement = useDelay();
    const cleanupSwipeOffset = useDelay();
    const cleanupPullOffset = useDelay();
    const { containerRef, setContainerRef, containerRect } = useContainerRect();
    const handleContainerRef = useForkRef(usePreventWheelDefaults({ preventDefaultWheelX, preventDefaultWheelY }), setContainerRef);
    const carouselRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const setCarouselRef = useForkRef(carouselRef, undefined);
    const { getOwnerDocument } = useDocumentContext();
    const isRTL = useRTL();
    const rtl = (value) => (isRTL ? -1 : 1) * (typeof value === "number" ? value : 1);
    const focus = useEventCallback(() => { var _a; return (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.focus(); });
    const getLightboxProps = useEventCallback(() => props);
    const getLightboxState = useEventCallback(() => state);
    const prev = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((params) => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, params), [publish]);
    const next = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((params) => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, params), [publish]);
    const close = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9), [publish]);
    const isSwipeValid = (offset) => !(carousel.finite &&
        ((rtl(offset) > 0 && state.currentIndex === 0) ||
            (rtl(offset) < 0 && state.currentIndex === state.slides.length - 1)));
    const setSwipeOffset = (offset) => {
        var _a;
        swipeOffset.current = offset;
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("swipe_offset"), `${Math.round(offset)}px`);
    };
    const setPullOffset = (offset) => {
        var _a, _b;
        pullOffset.current = offset;
        pullOpacity.current = (() => {
            const threshold = 60;
            const minOpacity = 0.5;
            const offsetValue = (() => {
                if (closeOnPullDown && offset > 0)
                    return offset;
                if (closeOnPullUp && offset < 0)
                    return -offset;
                return 0;
            })();
            return Math.min(Math.max(round(1 - (offsetValue / threshold) * (1 - minOpacity), 2), minOpacity), 1);
        })();
        (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty(cssVar("pull_offset"), `${Math.round(offset)}px`);
        (_b = containerRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty(cssVar("pull_opacity"), `${pullOpacity.current}`);
    };
    const { prepareAnimation: preparePullAnimation } = useAnimation(carouselRef, (snapshot, rect, translate) => {
        if (carouselRef.current && containerRect) {
            return {
                keyframes: [
                    {
                        transform: `translate(0, ${snapshot.rect.y - rect.y + translate.y}px)`,
                        opacity: snapshot.opacity,
                    },
                    { transform: "translate(0, 0)", opacity: 1 },
                ],
                duration: snapshot.duration,
                easing: animation.easing.fade,
            };
        }
        return undefined;
    });
    const pull = (offset, cancel) => {
        if (closeOnPullUp || closeOnPullDown) {
            setPullOffset(offset);
            let duration = 0;
            if (carouselRef.current) {
                duration = animation.fade * (cancel ? 2 : 1);
                preparePullAnimation({
                    rect: carouselRef.current.getBoundingClientRect(),
                    opacity: pullOpacity.current,
                    duration,
                });
            }
            cleanupPullOffset(() => {
                setPullOffset(0);
                setSwipeState(SwipeState.NONE);
            }, duration);
            setSwipeState(SwipeState.ANIMATION);
            if (!cancel) {
                close();
            }
        }
    };
    const { prepareAnimation, isAnimationPlaying } = useAnimation(carouselRef, (snapshot, rect, translate) => {
        var _a;
        if (carouselRef.current && containerRect && ((_a = state.animation) === null || _a === void 0 ? void 0 : _a.duration)) {
            const parsedSpacing = parseLengthPercentage(carousel.spacing);
            const spacingValue = (parsedSpacing.percent ? (parsedSpacing.percent * containerRect.width) / 100 : parsedSpacing.pixel) || 0;
            return {
                keyframes: [
                    {
                        transform: `translate(${rtl(state.globalIndex - snapshot.index) * (containerRect.width + spacingValue) +
                            snapshot.rect.x -
                            rect.x +
                            translate.x}px, 0)`,
                    },
                    { transform: "translate(0, 0)" },
                ],
                duration: state.animation.duration,
                easing: state.animation.easing,
            };
        }
        return undefined;
    });
    const swipe = useEventCallback((action) => {
        var _a, _b;
        const currentSwipeOffset = action.offset || 0;
        const swipeDuration = !currentSwipeOffset ? ((_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe) : animation.swipe;
        const swipeEasing = !currentSwipeOffset && !isAnimationPlaying() ? animation.easing.navigation : animation.easing.swipe;
        let { direction } = action;
        const count = (_b = action.count) !== null && _b !== void 0 ? _b : 1;
        let newSwipeState = SwipeState.ANIMATION;
        let newSwipeAnimationDuration = swipeDuration * count;
        if (!direction) {
            const containerWidth = containerRect === null || containerRect === void 0 ? void 0 : containerRect.width;
            const elapsedTime = action.duration || 0;
            const expectedTime = containerWidth
                ? (swipeDuration / containerWidth) * Math.abs(currentSwipeOffset)
                : swipeDuration;
            if (count !== 0) {
                if (elapsedTime < expectedTime) {
                    newSwipeAnimationDuration =
                        (newSwipeAnimationDuration / expectedTime) * Math.max(elapsedTime, expectedTime / 5);
                }
                else if (containerWidth) {
                    newSwipeAnimationDuration =
                        (swipeDuration / containerWidth) * (containerWidth - Math.abs(currentSwipeOffset));
                }
                direction = rtl(currentSwipeOffset) > 0 ? _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN : _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb;
            }
            else {
                newSwipeAnimationDuration = swipeDuration / 2;
            }
        }
        let increment = 0;
        if (direction === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN) {
            if (isSwipeValid(rtl(1))) {
                increment = -count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        else if (direction === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb) {
            if (isSwipeValid(rtl(-1))) {
                increment = count;
            }
            else {
                newSwipeState = SwipeState.NONE;
                newSwipeAnimationDuration = swipeDuration;
            }
        }
        newSwipeAnimationDuration = Math.round(newSwipeAnimationDuration);
        cleanupSwipeOffset(() => {
            setSwipeOffset(0);
            setSwipeState(SwipeState.NONE);
        }, newSwipeAnimationDuration);
        if (carouselRef.current) {
            prepareAnimation({
                rect: carouselRef.current.getBoundingClientRect(),
                index: state.globalIndex,
            });
        }
        setSwipeState(newSwipeState);
        publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_SWIPE */ .Tn, {
            type: "swipe",
            increment,
            duration: newSwipeAnimationDuration,
            easing: swipeEasing,
        });
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a, _b;
        if (((_a = state.animation) === null || _a === void 0 ? void 0 : _a.increment) && ((_b = state.animation) === null || _b === void 0 ? void 0 : _b.duration)) {
            cleanupAnimationIncrement(() => dispatch({ type: "swipe", increment: 0 }), state.animation.duration);
        }
    }, [state.animation, dispatch, cleanupAnimationIncrement]);
    const swipeParams = [
        subscribeSensors,
        isSwipeValid,
        (containerRect === null || containerRect === void 0 ? void 0 : containerRect.width) || 0,
        animation.swipe,
        () => setSwipeState(SwipeState.SWIPE),
        (offset) => setSwipeOffset(offset),
        (offset, duration) => swipe({ offset, duration, count: 1 }),
        (offset) => swipe({ offset, count: 0 }),
    ];
    const pullParams = [
        () => {
            if (closeOnPullDown) {
                setSwipeState(SwipeState.PULL);
            }
        },
        (offset) => setPullOffset(offset),
        (offset) => pull(offset),
        (offset) => pull(offset, true),
    ];
    usePointerSwipe(controller, ...swipeParams, closeOnPullUp, closeOnPullDown, ...pullParams, close);
    useWheelSwipe(swipeState, ...swipeParams);
    const focusOnMount = useEventCallback(() => {
        if (controller.focus &&
            getOwnerDocument().querySelector(`.${cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_PORTAL */ .SA)} .${cssClass(cssContainerPrefix())}`)) {
            focus();
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(focusOnMount, [focusOnMount]);
    const onViewCallback = useEventCallback(() => {
        var _a;
        (_a = on.view) === null || _a === void 0 ? void 0 : _a.call(on, { index: state.currentIndex });
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(onViewCallback, [state.globalIndex, onViewCallback]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => cleanup(subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, (action) => swipe({ direction: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, ...action })), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, (action) => swipe({ direction: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, ...action })), subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_SWIPE */ .Tn, (action) => dispatch(action))), [subscribe, swipe, dispatch]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        prev,
        next,
        close,
        focus,
        slideRect: containerRect ? computeSlideRect(containerRect, carousel.padding) : { width: 0, height: 0 },
        containerRect: containerRect || { width: 0, height: 0 },
        subscribeSensors,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
    }), [
        prev,
        next,
        close,
        focus,
        subscribeSensors,
        containerRect,
        containerRef,
        setCarouselRef,
        toolbarWidth,
        setToolbarWidth,
        carousel.padding,
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(controller.ref, () => ({
        prev,
        next,
        close,
        focus,
        getLightboxProps,
        getLightboxState,
    }), [prev, next, close, focus, getLightboxProps, getLightboxState]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: handleContainerRef, className: clsx(cssClass(cssContainerPrefix()), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)), style: {
            ...(swipeState === SwipeState.SWIPE
                ? { [cssVar("swipe_offset")]: `${Math.round(swipeOffset.current)}px` }
                : null),
            ...(swipeState === SwipeState.PULL
                ? {
                    [cssVar("pull_offset")]: `${Math.round(pullOffset.current)}px`,
                    [cssVar("pull_opacity")]: `${pullOpacity.current}`,
                }
                : null),
            ...(controller.touchAction !== "none" ? { [cssVar("controller_touch_action")]: controller.touchAction } : null),
            ...styles.container,
        }, ...(controller.aria ? { role: "region", "aria-live": "polite", "aria-roledescription": "carousel" } : null), tabIndex: -1, ...registerSensors }, containerRect && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ControllerContext.Provider, { value: context },
        children, (_a = render.controls) === null || _a === void 0 ? void 0 :
        _a.call(render)))));
}
const ControllerModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CONTROLLER */ .l4, Controller);

function cssPrefix$2(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CAROUSEL */ .k0, value);
}
function cssSlidePrefix(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_SLIDE */ .hD, value);
}
function CarouselSlide({ slide, offset }) {
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { currentIndex } = useLightboxState();
    const { slideRect, focus } = useController();
    const { render, carousel: { imageFit, imageProps }, on: { click: onClick }, styles: { slide: style }, } = useLightboxProps();
    const { getOwnerDocument } = useDocumentContext();
    const offscreen = offset !== 0;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        var _a;
        if (offscreen && ((_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.contains(getOwnerDocument().activeElement))) {
            focus();
        }
    }, [offscreen, focus, getOwnerDocument]);
    const renderSlide = () => {
        var _a, _b, _c, _d;
        let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, { slide, offset, rect: slideRect });
        if (!rendered && isImageSlide(slide)) {
            rendered = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ImageSlide, { slide: slide, offset: offset, render: render, rect: slideRect, imageFit: imageFit, imageProps: imageProps, onClick: !offscreen ? () => onClick === null || onClick === void 0 ? void 0 : onClick({ index: currentIndex }) : undefined }));
        }
        return rendered ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (_b = render.slideHeader) === null || _b === void 0 ? void 0 :
            _b.call(render, { slide }),
            ((_c = render.slideContainer) !== null && _c !== void 0 ? _c : (({ children }) => children))({ slide, children: rendered }), (_d = render.slideFooter) === null || _d === void 0 ? void 0 :
            _d.call(render, { slide }))) : null;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: containerRef, className: clsx(cssClass(cssSlidePrefix()), !offscreen && cssClass(cssSlidePrefix("current")), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)), ...makeInertWhen(offscreen), style: style, role: "region", "aria-roledescription": "slide" }, renderSlide()));
}
function Placeholder() {
    const style = useLightboxProps().styles.slide;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_SLIDE */ .hD), style: style });
}
function Carousel({ carousel }) {
    const { slides, currentIndex, globalIndex } = useLightboxState();
    const { setCarouselRef } = useController();
    const spacingValue = parseLengthPercentage(carousel.spacing);
    const paddingValue = parseLengthPercentage(carousel.padding);
    const preload = calculatePreload(carousel, slides, 1);
    const items = [];
    if (hasSlides(slides)) {
        for (let index = currentIndex - preload; index <= currentIndex + preload; index += 1) {
            const slide = getSlide(slides, index);
            const key = globalIndex - currentIndex + index;
            const placeholder = carousel.finite && (index < 0 || index > slides.length - 1);
            items.push(!placeholder
                ? {
                    key: [`${key}`, getSlideKey(slide)].filter(Boolean).join("|"),
                    offset: index - currentIndex,
                    slide,
                }
                : { key });
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: setCarouselRef, className: clsx(cssClass(cssPrefix$2()), items.length > 0 && cssClass(cssPrefix$2("with_slides"))), style: {
            [`${cssVar(cssPrefix$2("slides_count"))}`]: items.length,
            [`${cssVar(cssPrefix$2("spacing_px"))}`]: spacingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("spacing_percent"))}`]: spacingValue.percent || 0,
            [`${cssVar(cssPrefix$2("padding_px"))}`]: paddingValue.pixel || 0,
            [`${cssVar(cssPrefix$2("padding_percent"))}`]: paddingValue.percent || 0,
        } }, items.map(({ key, slide, offset }) => slide ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(CarouselSlide, { key: key, slide: slide, offset: offset }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(Placeholder, { key: key }))));
}
const CarouselModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CAROUSEL */ .k0, Carousel);

function useNavigationState() {
    const { carousel } = useLightboxProps();
    const { slides, currentIndex } = useLightboxState();
    const prevDisabled = slides.length === 0 || (carousel.finite && currentIndex === 0);
    const nextDisabled = slides.length === 0 || (carousel.finite && currentIndex === slides.length - 1);
    return { prevDisabled, nextDisabled };
}

function useKeyboardNavigation(subscribeSensors) {
    var _a;
    const isRTL = useRTL();
    const { publish } = useEvents();
    const { animation } = useLightboxProps();
    const { prevDisabled, nextDisabled } = useNavigationState();
    const throttle = ((_a = animation.navigation) !== null && _a !== void 0 ? _a : animation.swipe) / 2;
    const prev = useThrottle(() => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN), throttle);
    const next = useThrottle(() => publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb), throttle);
    const handleKeyDown = useEventCallback((event) => {
        switch (event.key) {
            case _types_js__WEBPACK_IMPORTED_MODULE_2__/* .VK_ESCAPE */ .PU:
                publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9);
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_2__/* .VK_ARROW_LEFT */ .Sl:
                if (!(isRTL ? nextDisabled : prevDisabled))
                    (isRTL ? next : prev)();
                break;
            case _types_js__WEBPACK_IMPORTED_MODULE_2__/* .VK_ARROW_RIGHT */ .NH:
                if (!(isRTL ? prevDisabled : nextDisabled))
                    (isRTL ? prev : next)();
                break;
            default:
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_DOWN */ .ds, handleKeyDown), [subscribeSensors, handleKeyDown]);
}

function NavigationButton({ label, icon, renderIcon, action, onClick, disabled, style }) {
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButton, { label: label, icon: icon, renderIcon: renderIcon, className: cssClass(`navigation_${action}`), disabled: disabled, onClick: onClick, style: style, ...useLoseFocus(useController().focus, disabled) }));
}
function Navigation({ render: { buttonPrev, buttonNext, iconPrev, iconNext }, styles }) {
    const { prev, next, subscribeSensors } = useController();
    const { prevDisabled, nextDisabled } = useNavigationState();
    useKeyboardNavigation(subscribeSensors);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        buttonPrev ? (buttonPrev()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationButton, { label: "Previous", action: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, icon: PreviousIcon, renderIcon: iconPrev, style: styles.navigationPrev, disabled: prevDisabled, onClick: prev })),
        buttonNext ? (buttonNext()) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationButton, { label: "Next", action: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, icon: NextIcon, renderIcon: iconNext, style: styles.navigationNext, disabled: nextDisabled, onClick: next }))));
}
const NavigationModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_NAVIGATION */ .Op, Navigation);

const noScroll = cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_NO_SCROLL */ .Tf);
const noScrollPadding = cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_NO_SCROLL_PADDING */ .M9);
function isHTMLElement(element) {
    return "style" in element;
}
function padScrollbar(element, padding, rtl) {
    const styles = window.getComputedStyle(element);
    const property = rtl ? "padding-left" : "padding-right";
    const computedValue = rtl ? styles.paddingLeft : styles.paddingRight;
    const originalValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, `${(parseInt(computedValue) || 0) + padding}px`);
    return () => {
        if (originalValue) {
            element.style.setProperty(property, originalValue);
        }
        else {
            element.style.removeProperty(property);
        }
    };
}
function NoScroll({ noScroll: { disabled }, children }) {
    const rtl = useRTL();
    const { getOwnerDocument, getOwnerWindow } = useDocumentContext();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (disabled)
            return () => { };
        const cleanup = [];
        const ownerWindow = getOwnerWindow();
        const { body, documentElement } = getOwnerDocument();
        const scrollbar = Math.round(ownerWindow.innerWidth - documentElement.clientWidth);
        if (scrollbar > 0) {
            cleanup.push(padScrollbar(body, scrollbar, rtl));
            const elements = body.getElementsByTagName("*");
            for (let i = 0; i < elements.length; i += 1) {
                const element = elements[i];
                if (isHTMLElement(element) &&
                    ownerWindow.getComputedStyle(element).getPropertyValue("position") === "fixed" &&
                    !element.classList.contains(noScrollPadding)) {
                    cleanup.push(padScrollbar(element, scrollbar, rtl));
                }
            }
        }
        body.classList.add(noScroll);
        return () => {
            body.classList.remove(noScroll);
            cleanup.forEach((clean) => clean());
        };
    }, [rtl, disabled, getOwnerDocument, getOwnerWindow]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
}
const NoScrollModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_NO_SCROLL */ .HE, NoScroll);

function cssPrefix$1(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_PORTAL */ .SA, value);
}
function setAttribute(element, attribute, value) {
    const previousValue = element.getAttribute(attribute);
    element.setAttribute(attribute, value);
    return () => {
        if (previousValue) {
            element.setAttribute(attribute, previousValue);
        }
        else {
            element.removeAttribute(attribute);
        }
    };
}
function Portal({ children, animation, styles, className, on, portal, close }) {
    const [mounted, setMounted] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const cleanup = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const restoreFocus = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { setTimeout } = useTimeouts();
    const { subscribe } = useEvents();
    const reduceMotion = useMotionPreference();
    const animationDuration = !reduceMotion ? animation.fade : 0;
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setMounted(true);
        return () => {
            setMounted(false);
            setVisible(false);
        };
    }, []);
    const handleCleanup = useEventCallback(() => {
        cleanup.current.forEach((clean) => clean());
        cleanup.current = [];
    });
    const handleClose = useEventCallback(() => {
        var _a;
        setVisible(false);
        handleCleanup();
        (_a = on.exiting) === null || _a === void 0 ? void 0 : _a.call(on);
        setTimeout(() => {
            var _a;
            (_a = on.exited) === null || _a === void 0 ? void 0 : _a.call(on);
            close();
        }, animationDuration);
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9, handleClose), [subscribe, handleClose]);
    const handleEnter = useEventCallback((node) => {
        var _a, _b, _c;
        reflow(node);
        setVisible(true);
        (_a = on.entering) === null || _a === void 0 ? void 0 : _a.call(on);
        const elements = (_c = (_b = node.parentNode) === null || _b === void 0 ? void 0 : _b.children) !== null && _c !== void 0 ? _c : [];
        for (let i = 0; i < elements.length; i += 1) {
            const element = elements[i];
            if (["TEMPLATE", "SCRIPT", "STYLE"].indexOf(element.tagName) === -1 && element !== node) {
                cleanup.current.push(setAttribute(element, "inert", ""));
                cleanup.current.push(setAttribute(element, "aria-hidden", "true"));
            }
        }
        cleanup.current.push(() => {
            var _a, _b;
            (_b = (_a = restoreFocus.current) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
        setTimeout(() => {
            var _a;
            (_a = on.entered) === null || _a === void 0 ? void 0 : _a.call(on);
        }, animationDuration);
    });
    const handleRef = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node) => {
        if (node) {
            handleEnter(node);
        }
        else {
            handleCleanup();
        }
    }, [handleEnter, handleCleanup]);
    return mounted
        ? (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxRoot, { ref: handleRef, className: clsx(className, cssClass(cssPrefix$1()), cssClass(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_NO_SCROLL_PADDING */ .M9), visible && cssClass(cssPrefix$1("open"))), "aria-modal": true, role: "dialog", "aria-live": "polite", "aria-roledescription": "lightbox", style: {
                ...(animation.fade !== LightboxDefaultProps.animation.fade
                    ? { [cssVar("fade_animation_duration")]: `${animationDuration}ms` }
                    : null),
                ...(animation.easing.fade !== LightboxDefaultProps.animation.easing.fade
                    ? { [cssVar("fade_animation_timing_function")]: animation.easing.fade }
                    : null),
                ...styles.root,
            }, onFocus: (event) => {
                if (!restoreFocus.current) {
                    restoreFocus.current = event.relatedTarget;
                }
            } }, children), portal.root || document.body)
        : null;
}
const PortalModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_PORTAL */ .SA, Portal);

function Root({ children }) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
}
const RootModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_ROOT */ .lT, Root);

function cssPrefix(value) {
    return composePrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_TOOLBAR */ .hb, value);
}
function Toolbar({ toolbar: { buttons }, render: { buttonClose, iconClose }, styles }) {
    const { close, setToolbarWidth } = useController();
    const { setContainerRef, containerRect } = useContainerRect();
    useLayoutEffect(() => {
        setToolbarWidth(containerRect === null || containerRect === void 0 ? void 0 : containerRect.width);
    }, [setToolbarWidth, containerRect === null || containerRect === void 0 ? void 0 : containerRect.width]);
    const renderCloseButton = () => {
        if (buttonClose)
            return buttonClose();
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButton, { key: _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9, label: "Close", icon: CloseIcon, renderIcon: iconClose, onClick: close });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: setContainerRef, style: styles.toolbar, className: cssClass(cssPrefix()) }, buttons === null || buttons === void 0 ? void 0 : buttons.map((button) => (button === _types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_CLOSE */ .t9 ? renderCloseButton() : button))));
}
const ToolbarModule = createModule(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_TOOLBAR */ .hb, Toolbar);

function renderNode(node, props) {
    var _a;
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(node.module.component, { key: node.module.name, ...props }, (_a = node.children) === null || _a === void 0 ? void 0 : _a.map((child) => renderNode(child, props)));
}
function mergeAnimation(defaultAnimation, animation = {}) {
    const { easing: defaultAnimationEasing, ...restDefaultAnimation } = defaultAnimation;
    const { easing, ...restAnimation } = animation;
    return {
        easing: { ...defaultAnimationEasing, ...easing },
        ...restDefaultAnimation,
        ...restAnimation,
    };
}
function Lightbox({ carousel, animation, render, toolbar, controller, noScroll, on, plugins, slides, index, ...restProps }) {
    const { animation: defaultAnimation, carousel: defaultCarousel, render: defaultRender, toolbar: defaultToolbar, controller: defaultController, noScroll: defaultNoScroll, on: defaultOn, slides: defaultSlides, index: defaultIndex, plugins: defaultPlugins, ...restDefaultProps } = LightboxDefaultProps;
    const { config, augmentation } = withPlugins([
        createNode(PortalModule, [
            createNode(NoScrollModule, [
                createNode(ControllerModule, [
                    createNode(CarouselModule),
                    createNode(ToolbarModule),
                    createNode(NavigationModule),
                ]),
            ]),
        ]),
    ], plugins || defaultPlugins);
    const props = augmentation({
        animation: mergeAnimation(defaultAnimation, animation),
        carousel: { ...defaultCarousel, ...carousel },
        render: { ...defaultRender, ...render },
        toolbar: { ...defaultToolbar, ...toolbar },
        controller: { ...defaultController, ...controller },
        noScroll: { ...defaultNoScroll, ...noScroll },
        on: { ...defaultOn, ...on },
        ...restDefaultProps,
        ...restProps,
    });
    if (!props.open)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxPropsProvider, { ...props },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(LightboxStateProvider, { slides: slides || defaultSlides, index: parseInt(index || defaultIndex) },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(TimeoutsProvider, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(EventsProvider, null, renderNode(createNode(RootModule, config), props))))));
}



/***/ }),

/***/ 8828:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Captions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5671);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5377);




const cssPrefix = (className) => (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(`slide_${className}`);

const defaultCaptionsProps = {
    descriptionTextAlign: "start",
    descriptionMaxLines: 3,
    showToggle: false,
    hidden: false,
};
const resolveCaptionsProps = (captions) => ({
    ...defaultCaptionsProps,
    ...captions,
});
function useCaptionsProps() {
    const { captions } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    return resolveCaptionsProps(captions);
}

const CaptionsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useCaptions = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useCaptions", "CaptionsContext", CaptionsContext);
function CaptionsContextProvider({ captions, children }) {
    const { ref, hidden } = resolveCaptionsProps(captions);
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!hidden);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        visible,
        show: () => setVisible(true),
        hide: () => setVisible(false),
    }), [visible]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => context, [context]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(CaptionsContext.Provider, { value: context }, children);
}

function Title({ title }) {
    const { toolbarWidth } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const { styles } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const { visible } = useCaptions();
    if (!visible)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: styles.captionsTitleContainer, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)(cssPrefix("captions_container"), cssPrefix("title_container")) },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssPrefix("title"), style: {
                ...(toolbarWidth ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)("toolbar_width")]: `${toolbarWidth}px` } : null),
                ...styles.captionsTitle,
            } }, title)));
}

function Description({ description }) {
    const { descriptionTextAlign, descriptionMaxLines } = useCaptionsProps();
    const { styles } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const { visible } = useCaptions();
    if (!visible)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: styles.captionsDescriptionContainer, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)(cssPrefix("captions_container"), cssPrefix("description_container")) },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: cssPrefix("description"), style: {
                ...(descriptionTextAlign !== defaultCaptionsProps.descriptionTextAlign ||
                    descriptionMaxLines !== defaultCaptionsProps.descriptionMaxLines
                    ? {
                        [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)("slide_description_text_align")]: descriptionTextAlign,
                        [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)("slide_description_max_lines")]: descriptionMaxLines,
                    }
                    : null),
                ...styles.captionsDescription,
            } }, typeof description === "string"
            ? description.split("\n").flatMap((line, index) => [...(index > 0 ? [react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", { key: index })] : []), line])
            : description)));
}

const captionsIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { strokeWidth: 2, stroke: "currentColor", strokeLinejoin: "round", fill: "none", d: "M3 5l18 0l0 14l-18 0l0-14z" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M7 15h3c.55 0 1-.45 1-1v-1H9.5v.5h-2v-3h2v.5H11v-1c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm7 0h3c.55 0 1-.45 1-1v-1h-1.5v.5h-2v-3h2v.5H18v-1c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1z" })));
const CaptionsVisible = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("CaptionsVisible", captionsIcon());
const CaptionsHidden = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIconDisabled */ .TX)("CaptionsVisible", captionsIcon());
function CaptionsButton() {
    const { visible, show, hide } = useCaptions();
    const { render } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    if (render.buttonCaptions) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, render.buttonCaptions({ visible, show, hide }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .IconButton */ .hU, { label: visible ? "Hide captions" : "Show captions", icon: visible ? CaptionsVisible : CaptionsHidden, renderIcon: visible ? render.iconCaptionsVisible : render.iconCaptionsHidden, onClick: visible ? hide : show }));
}

function Captions({ augment, addModule }) {
    augment(({ captions: captionsProps, render: { slideFooter: renderFooter, ...restRender }, toolbar, ...restProps }) => {
        const captions = resolveCaptionsProps(captionsProps);
        return {
            render: {
                slideFooter: ({ slide }) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderFooter === null || renderFooter === void 0 ? void 0 :
                    renderFooter({ slide }),
                    slide.title && react__WEBPACK_IMPORTED_MODULE_0__.createElement(Title, { title: slide.title }),
                    slide.description && react__WEBPACK_IMPORTED_MODULE_0__.createElement(Description, { description: slide.description }))),
                ...restRender,
            },
            toolbar: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .addToolbarButton */ .wQ)(toolbar, _types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_CAPTIONS */ .JT, captions.showToggle ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(CaptionsButton, null) : null),
            captions,
            ...restProps,
        };
    });
    addModule((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createModule */ .l6)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_CAPTIONS */ .JT, CaptionsContextProvider));
}




/***/ }),

/***/ 5941:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Thumbnails)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5671);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5377);




const defaultThumbnailsProps = {
    ref: null,
    position: "bottom",
    width: 120,
    height: 80,
    border: 1,
    borderRadius: 4,
    padding: 4,
    gap: 16,
    imageFit: "contain",
    vignette: true,
    hidden: false,
    showToggle: false,
};
const resolveThumbnailsProps = (thumbnails) => ({
    ...defaultThumbnailsProps,
    ...thumbnails,
});
function useThumbnailsProps() {
    const { thumbnails } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    return resolveThumbnailsProps(thumbnails);
}

const cssPrefix = (value) => (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .composePrefix */ .Xl)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_THUMBNAILS */ .dA, value);
const cssThumbnailPrefix = (value) => cssPrefix((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .composePrefix */ .Xl)("thumbnail", value));

const VideoThumbnailIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("VideoThumbnail", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" }));
const UnknownThumbnailIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("UnknownThumbnail", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M23 18V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zM8.5 12.5l2.5 3.01L14.5 11l4.5 6H5l3.5-4.5z" }));
function renderThumbnail({ slide, render, rect, imageFit }) {
    var _a;
    const customThumbnail = (_a = render.thumbnail) === null || _a === void 0 ? void 0 : _a.call(render, { slide, render, rect, imageFit });
    if (customThumbnail) {
        return customThumbnail;
    }
    const imageSlideProps = { render, rect, imageFit };
    if (slide.thumbnail) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ImageSlide */ .P0, { slide: { src: slide.thumbnail }, ...imageSlideProps });
    }
    if ((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageSlide */ .QB)(slide)) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ImageSlide */ .P0, { slide: slide, ...imageSlideProps });
    }
    const thumbnailIconClass = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ELEMENT_ICON */ .vg));
    if (slide.type === "video") {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            slide.poster && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ImageSlide */ .P0, { slide: { src: slide.poster }, ...imageSlideProps }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(VideoThumbnailIcon, { className: thumbnailIconClass })));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(UnknownThumbnailIcon, { className: thumbnailIconClass });
}
const activePrefix = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeComposePrefix */ .cO)("active");
const fadeInPrefix = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeComposePrefix */ .cO)("fadein");
const fadeOutPrefix = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeComposePrefix */ .cO)("fadeout");
const placeholderPrefix = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeComposePrefix */ .cO)("placeholder");
const DELAY = "delay";
const DURATION = "duration";
function Thumbnail({ slide, onClick, active, fadeIn, fadeOut, placeholder, onLoseFocus }) {
    const ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { render, styles } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const { getOwnerDocument } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useDocumentContext */ .tS)();
    const { width, height, imageFit } = useThumbnailsProps();
    const rect = { width, height };
    const onLoseFocusCallback = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(onLoseFocus);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (fadeOut && getOwnerDocument().activeElement === ref.current) {
            onLoseFocusCallback();
        }
    }, [fadeOut, onLoseFocusCallback, getOwnerDocument]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { ref: ref, type: "button", className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix()), active && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix(activePrefix())), fadeIn && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix(fadeInPrefix())), fadeOut && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix(fadeOutPrefix())), placeholder && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssThumbnailPrefix(placeholderPrefix()))), style: {
            ...(fadeIn
                ? {
                    [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix(fadeInPrefix(DURATION)))]: `${fadeIn.duration}ms`,
                    [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix(fadeInPrefix(DELAY)))]: `${fadeIn.delay}ms`,
                }
                : null),
            ...(fadeOut
                ? {
                    [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix(fadeOutPrefix(DURATION)))]: `${fadeOut.duration}ms`,
                    [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix(fadeOutPrefix(DELAY)))]: `${fadeOut.delay}ms`,
                }
                : null),
            ...styles.thumbnail,
        }, onClick: onClick }, slide && renderThumbnail({ slide, render, rect, imageFit })));
}

function isHorizontal(position) {
    return ["top", "bottom"].includes(position);
}
function boxSize(thumbnails, dimension) {
    return dimension + 2 * (thumbnails.border + thumbnails.padding) + thumbnails.gap;
}
function getThumbnailKey(slide) {
    const { thumbnail, poster } = slide || { thumbnail: "placeholder" };
    return ((typeof thumbnail === "string" && thumbnail) ||
        (typeof poster === "string" && poster) ||
        (slide && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .getSlideKey */ .iv)(slide)) ||
        undefined);
}
function ThumbnailsTrack({ visible, containerRef }) {
    const track = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const isRTL = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useRTL */ .Su)();
    const { publish, subscribe } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEvents */ .hI)();
    const { carousel, styles } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const { slides, globalIndex, animation } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    const { registerSensors, subscribeSensors } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useSensors */ .Dy)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useKeyboardNavigation */ .t$)(subscribeSensors);
    const thumbnails = useThumbnailsProps();
    const { position, width, height, border, borderStyle, borderColor, borderRadius, padding, gap, vignette } = thumbnails;
    const offset = ((animation === null || animation === void 0 ? void 0 : animation.duration) !== undefined && (animation === null || animation === void 0 ? void 0 : animation.increment)) || 0;
    const animationDuration = (animation === null || animation === void 0 ? void 0 : animation.duration) || 0;
    const { prepareAnimation } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useAnimation */ ._7)(track, (snapshot) => ({
        keyframes: isHorizontal(position)
            ? [
                {
                    transform: `translateX(${(isRTL ? -1 : 1) * boxSize(thumbnails, width) * offset + snapshot}px)`,
                },
                { transform: "translateX(0)" },
            ]
            : [
                {
                    transform: `translateY(${boxSize(thumbnails, height) * offset + snapshot}px)`,
                },
                { transform: "translateY(0)" },
            ],
        duration: animationDuration,
        easing: animation === null || animation === void 0 ? void 0 : animation.easing,
    }));
    const handleControllerSwipe = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        let animationOffset = 0;
        if (containerRef.current && track.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const trackRect = track.current.getBoundingClientRect();
            animationOffset = isHorizontal(position)
                ? trackRect.left - containerRect.left - (containerRect.width - trackRect.width) / 2
                : trackRect.top - containerRect.top - (containerRect.height - trackRect.height) / 2;
        }
        prepareAnimation(animationOffset);
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cleanup */ .Eq)(subscribe(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_SWIPE */ .Tn, handleControllerSwipe)), [subscribe, handleControllerSwipe]);
    const preload = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .calculatePreload */ .mw)(carousel, slides);
    const items = [];
    if ((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .hasSlides */ .Ju)(slides)) {
        for (let index = globalIndex - preload - Math.abs(offset); index <= globalIndex + preload + Math.abs(offset); index += 1) {
            const placeholder = (carousel.finite && (index < 0 || index > slides.length - 1)) ||
                (offset < 0 && index < globalIndex - preload) ||
                (offset > 0 && index > globalIndex + preload);
            const slide = !placeholder ? (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .getSlide */ .CT)(slides, index) : null;
            const key = [`${index}`, getThumbnailKey(slide)].filter(Boolean).join("|");
            items.push({ key, index, slide });
        }
    }
    const handleClick = (slideIndex) => () => {
        if (slideIndex > globalIndex) {
            publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_NEXT */ .Eb, { count: slideIndex - globalIndex });
        }
        else if (slideIndex < globalIndex) {
            publish(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .ACTION_PREV */ .KN, { count: globalIndex - slideIndex });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix("container")), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)), style: {
            ...(!visible ? { display: "none" } : null),
            ...(width !== defaultThumbnailsProps.width ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("width"))]: `${width}px` } : null),
            ...(height !== defaultThumbnailsProps.height
                ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("height"))]: `${height}px` }
                : null),
            ...(border !== defaultThumbnailsProps.border
                ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("border"))]: `${border}px` }
                : null),
            ...(borderStyle ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("border_style"))]: borderStyle } : null),
            ...(borderColor ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("border_color"))]: borderColor } : null),
            ...(borderRadius !== defaultThumbnailsProps.borderRadius
                ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("border_radius"))]: `${borderRadius}px` }
                : null),
            ...(padding !== defaultThumbnailsProps.padding
                ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("padding"))]: `${padding}px` }
                : null),
            ...(gap !== defaultThumbnailsProps.gap ? { [(0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssVar */ .gJ)(cssThumbnailPrefix("gap"))]: `${gap}px` } : null),
            ...styles.thumbnailsContainer,
        } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", { ref: track, style: styles.thumbnailsTrack, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix("track")), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN)), tabIndex: -1, ...registerSensors }, items.map(({ key, index, slide }) => {
            const fadeAnimationDuration = animationDuration / Math.abs(offset || 1);
            const fadeIn = (offset > 0 && index > globalIndex + preload - offset && index <= globalIndex + preload) ||
                (offset < 0 && index < globalIndex - preload - offset && index >= globalIndex - preload)
                ? {
                    duration: fadeAnimationDuration,
                    delay: ((offset > 0 ? index - (globalIndex + preload - offset) : globalIndex - preload - offset - index) -
                        1) *
                        fadeAnimationDuration,
                }
                : undefined;
            const fadeOut = (offset > 0 && index < globalIndex - preload) || (offset < 0 && index > globalIndex + preload)
                ? {
                    duration: fadeAnimationDuration,
                    delay: (offset > 0
                        ? offset - (globalIndex - preload - index)
                        : -offset - (index - (globalIndex + preload))) * fadeAnimationDuration,
                }
                : undefined;
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Thumbnail, { key: key, slide: slide, active: index === globalIndex, fadeIn: fadeIn, fadeOut: fadeOut, placeholder: !slide, onClick: handleClick(index), onLoseFocus: () => { var _a; return (_a = track.current) === null || _a === void 0 ? void 0 : _a.focus(); } }));
        })),
        vignette && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix("vignette")) })));
}

const ThumbnailsContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useThumbnails = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useThumbnails", "ThumbnailsContext", ThumbnailsContext);
function ThumbnailsContextProvider({ children, ...props }) {
    const { ref, position, hidden } = resolveThumbnailsProps(props.thumbnails);
    const [visible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0__.useState(!hidden);
    const containerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({
        visible,
        show: () => setVisible(true),
        hide: () => setVisible(false),
    }), [visible]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(ref, () => context, [context]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .LightboxPropsProvider */ .OV, { ...props },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbnailsContext.Provider, { value: context },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: containerRef, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix()), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix(`${position}`))) },
                ["start", "top"].includes(position) && react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbnailsTrack, { containerRef: containerRef, visible: visible }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(cssPrefix("wrapper")) }, children),
                ["end", "bottom"].includes(position) && react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbnailsTrack, { containerRef: containerRef, visible: visible })))));
}

const thumbnailsIcon = () => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { strokeWidth: 2, stroke: "currentColor", strokeLinejoin: "round", fill: "none", d: "M3 5l18 0l0 14l-18 0l0-14z" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M5 14h4v3h-4zM10 14h4v3h-4zM15 14h4v3h-4z" })));
const ThumbnailsVisible = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("ThumbnailsVisible", thumbnailsIcon());
const ThumbnailsHidden = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIconDisabled */ .TX)("ThumbnailsHidden", thumbnailsIcon());
function ThumbnailsButton() {
    const { visible, show, hide } = useThumbnails();
    const { render } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    if (render.buttonThumbnails) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, render.buttonThumbnails({ visible, show, hide }));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .IconButton */ .hU, { label: visible ? "Hide thumbnails" : "Show thumbnails", icon: visible ? ThumbnailsVisible : ThumbnailsHidden, renderIcon: visible ? render.iconThumbnailsVisible : render.iconThumbnailsHidden, onClick: visible ? hide : show }));
}

function Thumbnails({ augment, contains, append, addParent }) {
    augment(({ thumbnails: thumbnailsProps, toolbar, ...restProps }) => {
        const thumbnails = resolveThumbnailsProps(thumbnailsProps);
        return {
            toolbar: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .addToolbarButton */ .wQ)(toolbar, _types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_THUMBNAILS */ .dA, thumbnails.showToggle ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThumbnailsButton, null) : null),
            thumbnails,
            ...restProps,
        };
    });
    const module = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createModule */ .l6)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_THUMBNAILS */ .dA, ThumbnailsContextProvider);
    if (contains(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_FULLSCREEN */ .zr)) {
        append(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_FULLSCREEN */ .zr, module);
    }
    else {
        addParent(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .MODULE_CONTROLLER */ .l4, module);
    }
}




/***/ }),

/***/ 7838:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Zoom)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5671);
/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5377);




const defaultZoomProps = {
    maxZoomPixelRatio: 1,
    zoomInMultiplier: 2,
    doubleTapDelay: 300,
    doubleClickDelay: 500,
    doubleClickMaxStops: 2,
    keyboardMoveDistance: 50,
    wheelZoomDistanceFactor: 100,
    pinchZoomDistanceFactor: 100,
    scrollToZoom: false,
};
const resolveZoomProps = (zoom) => ({
    ...defaultZoomProps,
    ...zoom,
});

function useZoomAnimation(zoom, offsetX, offsetY, zoomWrapperRef) {
    const zoomAnimation = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const zoomAnimationStart = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const { zoom: zoomAnimationDuration } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)().animation;
    const reduceMotion = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useMotionPreference */ .OL)();
    const playZoomAnimation = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        var _a, _b, _c;
        (_a = zoomAnimation.current) === null || _a === void 0 ? void 0 : _a.cancel();
        zoomAnimation.current = undefined;
        if (zoomAnimationStart.current && (zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current)) {
            try {
                zoomAnimation.current = (_c = (_b = zoomWrapperRef.current).animate) === null || _c === void 0 ? void 0 : _c.call(_b, [
                    { transform: zoomAnimationStart.current },
                    { transform: `scale(${zoom}) translateX(${offsetX}px) translateY(${offsetY}px)` },
                ], {
                    duration: !reduceMotion ? (zoomAnimationDuration !== null && zoomAnimationDuration !== void 0 ? zoomAnimationDuration : 500) : 0,
                    easing: zoomAnimation.current ? "ease-out" : "ease-in-out",
                });
            }
            catch (err) {
                console.error(err);
            }
            zoomAnimationStart.current = undefined;
            if (zoomAnimation.current) {
                zoomAnimation.current.onfinish = () => {
                    zoomAnimation.current = undefined;
                };
            }
        }
    });
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(playZoomAnimation, [zoom, offsetX, offsetY, playZoomAnimation]);
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        zoomAnimationStart.current = (zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current)
            ? window.getComputedStyle(zoomWrapperRef.current).transform
            : undefined;
    }, [zoomWrapperRef]);
}

function useZoomCallback(zoom, disabled) {
    const { on } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const onZoomCallback = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        var _a;
        if (!disabled) {
            (_a = on.zoom) === null || _a === void 0 ? void 0 : _a.call(on, { zoom });
        }
    });
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(onZoomCallback, [zoom, onZoomCallback]);
}

function useZoomProps() {
    const { zoom } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    return resolveZoomProps(zoom);
}

function useZoomImageRect(slideRect, imageDimensions) {
    var _a, _b;
    let imageRect = { width: 0, height: 0 };
    let maxImageRect = { width: 0, height: 0 };
    const { currentSlide } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    const { imageFit } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)().carousel;
    const { maxZoomPixelRatio } = useZoomProps();
    if (slideRect && currentSlide) {
        const slide = { ...currentSlide, ...imageDimensions };
        if ((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageSlide */ .QB)(slide)) {
            const cover = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageFitCover */ .VI)(slide, imageFit);
            const width = Math.max(...(((_a = slide.srcSet) === null || _a === void 0 ? void 0 : _a.map((x) => x.width)) || []).concat(slide.width ? [slide.width] : []));
            const height = Math.max(...(((_b = slide.srcSet) === null || _b === void 0 ? void 0 : _b.map((x) => x.height)) || []).concat(slide.height ? [slide.height] : []));
            if (width > 0 && height > 0 && slideRect.width > 0 && slideRect.height > 0) {
                maxImageRect = cover
                    ? {
                        width: Math.round(Math.min(width, (slideRect.width / slideRect.height) * height)),
                        height: Math.round(Math.min(height, (slideRect.height / slideRect.width) * width)),
                    }
                    : { width, height };
                maxImageRect = {
                    width: maxImageRect.width * maxZoomPixelRatio,
                    height: maxImageRect.height * maxZoomPixelRatio,
                };
                imageRect = cover
                    ? {
                        width: Math.min(slideRect.width, maxImageRect.width, width),
                        height: Math.min(slideRect.height, maxImageRect.height, height),
                    }
                    : {
                        width: Math.round(Math.min(slideRect.width, (slideRect.height / height) * width, width)),
                        height: Math.round(Math.min(slideRect.height, (slideRect.width / width) * height, height)),
                    };
            }
        }
    }
    const maxZoom = imageRect.width ? Math.max((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .round */ .NM)(maxImageRect.width / imageRect.width, 5), 1) : 1;
    return { imageRect, maxZoom };
}

function distance(pointerA, pointerB) {
    return ((pointerA.clientX - pointerB.clientX) ** 2 + (pointerA.clientY - pointerB.clientY) ** 2) ** 0.5;
}
function scaleZoom(value, delta, factor = 100, clamp = 2) {
    return value * Math.min(1 + Math.abs(delta / factor), clamp) ** Math.sign(delta);
}
function useZoomSensors(zoom, maxZoom, disabled, changeZoom, changeOffsets, zoomWrapperRef) {
    const activePointers = react__WEBPACK_IMPORTED_MODULE_0__.useRef([]);
    const lastPointerDown = react__WEBPACK_IMPORTED_MODULE_0__.useRef(0);
    const pinchZoomDistance = react__WEBPACK_IMPORTED_MODULE_0__.useRef(undefined);
    const { globalIndex } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    const { getOwnerWindow } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useDocumentContext */ .tS)();
    const { containerRef, subscribeSensors } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const { keyboardMoveDistance, zoomInMultiplier, wheelZoomDistanceFactor, scrollToZoom, doubleTapDelay, doubleClickDelay, doubleClickMaxStops, pinchZoomDistanceFactor, } = useZoomProps();
    const translateCoordinates = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        if (containerRef.current) {
            const { pageX, pageY } = event;
            const { scrollX, scrollY } = getOwnerWindow();
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();
            return [pageX - left - scrollX - width / 2, pageY - top - scrollY - height / 2];
        }
        return [];
    }, [containerRef, getOwnerWindow]);
    const onKeyDown = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)((event) => {
        const { key, metaKey, ctrlKey } = event;
        const meta = metaKey || ctrlKey;
        const preventDefault = () => {
            event.preventDefault();
            event.stopPropagation();
        };
        if (zoom > 1) {
            const move = (deltaX, deltaY) => {
                preventDefault();
                changeOffsets(deltaX, deltaY);
            };
            if (key === "ArrowDown") {
                move(0, keyboardMoveDistance);
            }
            else if (key === "ArrowUp") {
                move(0, -keyboardMoveDistance);
            }
            else if (key === "ArrowLeft") {
                move(-keyboardMoveDistance, 0);
            }
            else if (key === "ArrowRight") {
                move(keyboardMoveDistance, 0);
            }
        }
        const handleChangeZoom = (zoomValue) => {
            preventDefault();
            changeZoom(zoomValue);
        };
        if (key === "+" || (meta && key === "=")) {
            handleChangeZoom(zoom * zoomInMultiplier);
        }
        else if (key === "-" || (meta && key === "_")) {
            handleChangeZoom(zoom / zoomInMultiplier);
        }
        else if (meta && key === "0") {
            handleChangeZoom(1);
        }
    });
    const onWheel = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)((event) => {
        if (event.ctrlKey || scrollToZoom) {
            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
                event.stopPropagation();
                changeZoom(scaleZoom(zoom, -event.deltaY, wheelZoomDistanceFactor), true, ...translateCoordinates(event));
                return;
            }
        }
        if (zoom > 1) {
            event.stopPropagation();
            if (!scrollToZoom) {
                changeOffsets(event.deltaX, event.deltaY);
            }
        }
    });
    const clearPointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        const pointers = activePointers.current;
        pointers.splice(0, pointers.length, ...pointers.filter((p) => p.pointerId !== event.pointerId));
    }, []);
    const replacePointer = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        clearPointer(event);
        event.persist();
        activePointers.current.push(event);
    }, [clearPointer]);
    const onPointerDown = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)((event) => {
        var _a;
        const pointers = activePointers.current;
        if ((event.pointerType === "mouse" && event.buttons > 1) ||
            !((_a = zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
            return;
        }
        if (zoom > 1) {
            event.stopPropagation();
        }
        const { timeStamp } = event;
        if (pointers.length === 0 &&
            timeStamp - lastPointerDown.current < (event.pointerType === "touch" ? doubleTapDelay : doubleClickDelay)) {
            lastPointerDown.current = 0;
            changeZoom(zoom !== maxZoom ? zoom * Math.max(maxZoom ** (1 / doubleClickMaxStops), zoomInMultiplier) : 1, false, ...translateCoordinates(event));
        }
        else {
            lastPointerDown.current = timeStamp;
        }
        replacePointer(event);
        if (pointers.length === 2) {
            pinchZoomDistance.current = distance(pointers[0], pointers[1]);
        }
    });
    const onPointerMove = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)((event) => {
        const pointers = activePointers.current;
        const activePointer = pointers.find((p) => p.pointerId === event.pointerId);
        if (pointers.length === 2 && pinchZoomDistance.current) {
            event.stopPropagation();
            replacePointer(event);
            const currentDistance = distance(pointers[0], pointers[1]);
            const delta = currentDistance - pinchZoomDistance.current;
            if (Math.abs(delta) > 0) {
                changeZoom(scaleZoom(zoom, delta, pinchZoomDistanceFactor), true, ...pointers
                    .map((x) => translateCoordinates(x))
                    .reduce((acc, coordinate) => coordinate.map((x, i) => acc[i] + x / 2)));
                pinchZoomDistance.current = currentDistance;
            }
            return;
        }
        if (zoom > 1) {
            event.stopPropagation();
            if (activePointer) {
                if (pointers.length === 1) {
                    changeOffsets((activePointer.clientX - event.clientX) / zoom, (activePointer.clientY - event.clientY) / zoom);
                }
                replacePointer(event);
            }
        }
    });
    const onPointerUp = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event) => {
        const pointers = activePointers.current;
        if (pointers.length === 2 && pointers.find((p) => p.pointerId === event.pointerId)) {
            pinchZoomDistance.current = undefined;
        }
        clearPointer(event);
    }, [clearPointer]);
    const cleanupSensors = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
        const pointers = activePointers.current;
        pointers.splice(0, pointers.length);
        lastPointerDown.current = 0;
        pinchZoomDistance.current = undefined;
    }, []);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .usePointerEvents */ .bQ)(subscribeSensors, onPointerDown, onPointerMove, onPointerUp, disabled);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(cleanupSensors, [globalIndex, cleanupSensors]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (!disabled) {
            return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cleanup */ .Eq)(cleanupSensors, subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_KEY_DOWN */ .ds, onKeyDown), subscribeSensors(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .EVENT_ON_WHEEL */ .yq, onWheel));
        }
        return () => { };
    }, [disabled, subscribeSensors, cleanupSensors, onKeyDown, onWheel]);
}

function useZoomState(imageRect, maxZoom, zoomWrapperRef) {
    const [zoom, setZoom] = react__WEBPACK_IMPORTED_MODULE_0__.useState(1);
    const [offsetX, setOffsetX] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const [offsetY, setOffsetY] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const animate = useZoomAnimation(zoom, offsetX, offsetY, zoomWrapperRef);
    const { currentSlide, globalIndex } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    const { containerRect, slideRect } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const { zoomInMultiplier } = useZoomProps();
    const currentSource = currentSlide && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageSlide */ .QB)(currentSlide) ? currentSlide.src : undefined;
    const disabled = !currentSource || !(zoomWrapperRef === null || zoomWrapperRef === void 0 ? void 0 : zoomWrapperRef.current);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(() => {
        setZoom(1);
        setOffsetX(0);
        setOffsetY(0);
    }, [globalIndex, currentSource]);
    const changeOffsets = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((dx, dy, targetZoom) => {
        const newZoom = targetZoom || zoom;
        const newOffsetX = offsetX - (dx || 0);
        const newOffsetY = offsetY - (dy || 0);
        const maxOffsetX = (imageRect.width * newZoom - slideRect.width) / 2 / newZoom;
        const maxOffsetY = (imageRect.height * newZoom - slideRect.height) / 2 / newZoom;
        setOffsetX(Math.min(Math.abs(newOffsetX), Math.max(maxOffsetX, 0)) * Math.sign(newOffsetX));
        setOffsetY(Math.min(Math.abs(newOffsetY), Math.max(maxOffsetY, 0)) * Math.sign(newOffsetY));
    }, [zoom, offsetX, offsetY, slideRect, imageRect.width, imageRect.height]);
    const changeZoom = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((targetZoom, rapid, dx, dy) => {
        const newZoom = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .round */ .NM)(Math.min(Math.max(targetZoom + 0.001 < maxZoom ? targetZoom : maxZoom, 1), maxZoom), 5);
        if (newZoom === zoom)
            return;
        if (!rapid) {
            animate();
        }
        changeOffsets(dx ? dx * (1 / zoom - 1 / newZoom) : 0, dy ? dy * (1 / zoom - 1 / newZoom) : 0, newZoom);
        setZoom(newZoom);
    }, [zoom, maxZoom, changeOffsets, animate]);
    const handleControllerRectChange = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        if (zoom > 1) {
            if (zoom > maxZoom) {
                changeZoom(maxZoom, true);
            }
            changeOffsets();
        }
    });
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(handleControllerRectChange, [containerRect.width, containerRect.height, handleControllerRectChange]);
    const zoomIn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => changeZoom(zoom * zoomInMultiplier), [zoom, zoomInMultiplier, changeZoom]);
    const zoomOut = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => changeZoom(zoom / zoomInMultiplier), [zoom, zoomInMultiplier, changeZoom]);
    return { zoom, offsetX, offsetY, disabled, changeOffsets, changeZoom, zoomIn, zoomOut };
}

const ZoomControllerContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
const useZoom = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .makeUseContext */ .Fy)("useZoom", "ZoomControllerContext", ZoomControllerContext);
function ZoomContextProvider({ children }) {
    const [zoomWrapper, setZoomWrapper] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const { slideRect } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const { imageRect, maxZoom } = useZoomImageRect(slideRect, zoomWrapper === null || zoomWrapper === void 0 ? void 0 : zoomWrapper.imageDimensions);
    const { zoom, offsetX, offsetY, disabled, changeZoom, changeOffsets, zoomIn, zoomOut } = useZoomState(imageRect, maxZoom, zoomWrapper === null || zoomWrapper === void 0 ? void 0 : zoomWrapper.zoomWrapperRef);
    useZoomCallback(zoom, disabled);
    useZoomSensors(zoom, maxZoom, disabled, changeZoom, changeOffsets, zoomWrapper === null || zoomWrapper === void 0 ? void 0 : zoomWrapper.zoomWrapperRef);
    const zoomRef = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ zoom, maxZoom, offsetX, offsetY, disabled, zoomIn, zoomOut, changeZoom }), [zoom, maxZoom, offsetX, offsetY, disabled, zoomIn, zoomOut, changeZoom]);
    react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(useZoomProps().ref, () => zoomRef, [zoomRef]);
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => ({ ...zoomRef, setZoomWrapper }), [zoomRef, setZoomWrapper]);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomControllerContext.Provider, { value: context }, children);
}

const ZoomInIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("ZoomIn", react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" })));
const ZoomOutIcon = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createIcon */ .U2)("ZoomOut", react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z" }));
const ZoomButton = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function ZoomButton({ zoomIn, onLoseFocus }, ref) {
    const wasEnabled = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const wasFocused = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    const { zoom, maxZoom, zoomIn: zoomInCallback, zoomOut: zoomOutCallback, disabled: zoomDisabled } = useZoom();
    const { render } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const disabled = zoomDisabled || (zoomIn ? zoom >= maxZoom : zoom <= 1);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        if (disabled && wasEnabled.current && wasFocused.current) {
            onLoseFocus();
        }
        if (!disabled) {
            wasEnabled.current = true;
        }
    }, [disabled, onLoseFocus]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .IconButton */ .hU, { ref: ref, disabled: disabled, label: zoomIn ? "Zoom in" : "Zoom out", icon: zoomIn ? ZoomInIcon : ZoomOutIcon, renderIcon: zoomIn ? render.iconZoomIn : render.iconZoomOut, onClick: zoomIn ? zoomInCallback : zoomOutCallback, onFocus: () => {
            wasFocused.current = true;
        }, onBlur: () => {
            wasFocused.current = false;
        } }));
});

function ZoomButtonsGroup() {
    const zoomInRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const zoomOutRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { focus } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useController */ .bc)();
    const focusSibling = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((sibling) => {
        var _a, _b;
        if (!((_a = sibling.current) === null || _a === void 0 ? void 0 : _a.disabled)) {
            (_b = sibling.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
        else {
            focus();
        }
    }, [focus]);
    const focusZoomIn = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => focusSibling(zoomInRef), [focusSibling]);
    const focusZoomOut = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => focusSibling(zoomOutRef), [focusSibling]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomButton, { zoomIn: true, ref: zoomInRef, onLoseFocus: focusZoomOut }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomButton, { ref: zoomOutRef, onLoseFocus: focusZoomIn })));
}

function ZoomToolbarControl() {
    const { render } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const zoomRef = useZoom();
    if (render.buttonZoom) {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, render.buttonZoom(zoomRef));
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomButtonsGroup, null);
}

function isResponsiveImageSlide(slide) {
    var _a;
    return (((_a = slide.srcSet) === null || _a === void 0 ? void 0 : _a.length) || 0) > 0;
}
function reducer({ current, preload }, { type, source }) {
    switch (type) {
        case "fetch":
            if (!current) {
                return { current: source };
            }
            return { current, preload: source };
        case "done":
            if (source === preload) {
                return { current: source };
            }
            return { current, preload };
        default:
            throw new Error(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .UNKNOWN_ACTION_TYPE */ .c3);
    }
}
function ResponsiveImage(props) {
    var _a, _b;
    const [{ current, preload }, dispatch] = react__WEBPACK_IMPORTED_MODULE_0__.useReducer(reducer, {});
    const { slide: image, rect, imageFit, render, interactive } = props;
    const srcSet = image.srcSet.sort((a, b) => a.width - b.width);
    const width = (_a = image.width) !== null && _a !== void 0 ? _a : srcSet[srcSet.length - 1].width;
    const height = (_b = image.height) !== null && _b !== void 0 ? _b : srcSet[srcSet.length - 1].height;
    const cover = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageFitCover */ .VI)(image, imageFit);
    const maxWidth = Math.max(...srcSet.map((x) => x.width));
    const targetWidth = Math.min((cover ? Math.max : Math.min)(rect.width, width * (rect.height / height)), maxWidth);
    const pixelDensity = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .devicePixelRatio */ .KL)();
    const handleResize = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)(() => {
        var _a;
        const targetSource = (_a = srcSet.find((x) => x.width >= targetWidth * pixelDensity)) !== null && _a !== void 0 ? _a : srcSet[srcSet.length - 1];
        if (!current || srcSet.findIndex((x) => x.src === current) < srcSet.findIndex((x) => x === targetSource)) {
            dispatch({ type: "fetch", source: targetSource.src });
        }
    });
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(handleResize, [rect.width, rect.height, pixelDensity, handleResize]);
    const handlePreload = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useEventCallback */ .$0)((currentPreload) => dispatch({ type: "done", source: currentPreload }));
    const style = {
        WebkitTransform: !interactive ? "translateZ(0)" : "initial",
    };
    if (!cover) {
        Object.assign(style, rect.width / rect.height < width / height ? { width: "100%", height: "auto" } : { width: "auto", height: "100%" });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        preload && preload !== current && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ImageSlide */ .P0, { key: "preload", ...props, offset: undefined, slide: { ...image, src: preload, srcSet: undefined }, style: { position: "absolute", visibility: "hidden", ...style }, onLoad: () => handlePreload(preload), render: {
                ...render,
                iconLoading: () => null,
                iconError: () => null,
            } })),
        current && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ImageSlide */ .P0, { key: "current", ...props, slide: { ...image, src: current, srcSet: undefined }, style: style }))));
}

function ZoomWrapper({ render, slide, offset, rect }) {
    var _a;
    const [imageDimensions, setImageDimensions] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    const zoomWrapperRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
    const { zoom, maxZoom, offsetX, offsetY, setZoomWrapper } = useZoom();
    const interactive = zoom > 1;
    const { carousel, on } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxProps */ .RD)();
    const { currentIndex } = (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLightboxState */ .oc)();
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(() => {
        if (offset === 0) {
            setZoomWrapper({ zoomWrapperRef, imageDimensions });
            return () => setZoomWrapper(undefined);
        }
        return () => { };
    }, [offset, imageDimensions, setZoomWrapper]);
    let rendered = (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, { slide, offset, rect, zoom, maxZoom });
    if (!rendered && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageSlide */ .QB)(slide)) {
        const slideProps = {
            slide,
            offset,
            rect,
            render,
            imageFit: carousel.imageFit,
            imageProps: carousel.imageProps,
            onClick: offset === 0 ? () => { var _a; return (_a = on.click) === null || _a === void 0 ? void 0 : _a.call(on, { index: currentIndex }); } : undefined,
        };
        rendered = isResponsiveImageSlide(slide) ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResponsiveImage, { ...slideProps, slide: slide, interactive: interactive, rect: offset === 0 ? { width: rect.width * zoom, height: rect.height * zoom } : rect })) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_js__WEBPACK_IMPORTED_MODULE_1__/* .ImageSlide */ .P0, { onLoad: (img) => setImageDimensions({ width: img.naturalWidth, height: img.naturalHeight }), ...slideProps }));
    }
    if (!rendered)
        return null;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { ref: zoomWrapperRef, className: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .clsx */ .Wy)((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FULLSIZE */ .yS), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_FLEX_CENTER */ .aN), (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_SLIDE_WRAPPER */ .af), interactive && (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .cssClass */ .Nc)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .CLASS_SLIDE_WRAPPER_INTERACTIVE */ .ZZ)), style: offset === 0 ? { transform: `scale(${zoom}) translateX(${offsetX}px) translateY(${offsetY}px)` } : undefined }, rendered));
}

const Zoom = ({ augment, addModule }) => {
    augment(({ zoom: zoomProps, toolbar, render, controller, ...restProps }) => {
        const zoom = resolveZoomProps(zoomProps);
        return {
            zoom,
            toolbar: (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .addToolbarButton */ .wQ)(toolbar, _types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ZOOM */ .xc, react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomToolbarControl, null)),
            render: {
                ...render,
                slide: (props) => { var _a; return (0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .isImageSlide */ .QB)(props.slide) ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(ZoomWrapper, { render: render, ...props }) : (_a = render.slide) === null || _a === void 0 ? void 0 : _a.call(render, props); },
            },
            controller: { ...controller, preventDefaultWheelY: zoom.scrollToZoom },
            ...restProps,
        };
    });
    addModule((0,_index_js__WEBPACK_IMPORTED_MODULE_1__/* .createModule */ .l6)(_types_js__WEBPACK_IMPORTED_MODULE_2__/* .PLUGIN_ZOOM */ .xc, ZoomContextProvider));
};




/***/ }),

/***/ 5377:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $L: () => (/* binding */ SLIDE_STATUS_PLACEHOLDER),
/* harmony export */   Bm: () => (/* binding */ EVENT_ON_KEY_UP),
/* harmony export */   Eb: () => (/* binding */ ACTION_NEXT),
/* harmony export */   HE: () => (/* binding */ MODULE_NO_SCROLL),
/* harmony export */   J1: () => (/* binding */ activeSlideStatus),
/* harmony export */   JT: () => (/* binding */ PLUGIN_CAPTIONS),
/* harmony export */   KN: () => (/* binding */ ACTION_PREV),
/* harmony export */   M9: () => (/* binding */ CLASS_NO_SCROLL_PADDING),
/* harmony export */   N4: () => (/* binding */ EVENT_ON_POINTER_MOVE),
/* harmony export */   NH: () => (/* binding */ VK_ARROW_RIGHT),
/* harmony export */   NZ: () => (/* binding */ EVENT_ON_POINTER_DOWN),
/* harmony export */   Op: () => (/* binding */ MODULE_NAVIGATION),
/* harmony export */   PU: () => (/* binding */ VK_ESCAPE),
/* harmony export */   S2: () => (/* binding */ EVENT_ON_POINTER_UP),
/* harmony export */   SA: () => (/* binding */ MODULE_PORTAL),
/* harmony export */   Sl: () => (/* binding */ VK_ARROW_LEFT),
/* harmony export */   Tf: () => (/* binding */ CLASS_NO_SCROLL),
/* harmony export */   Tn: () => (/* binding */ ACTION_SWIPE),
/* harmony export */   Vt: () => (/* binding */ EVENT_ON_POINTER_CANCEL),
/* harmony export */   Xe: () => (/* binding */ SLIDE_STATUS_LOADING),
/* harmony export */   ZZ: () => (/* binding */ CLASS_SLIDE_WRAPPER_INTERACTIVE),
/* harmony export */   Zv: () => (/* binding */ SLIDE_STATUS_COMPLETE),
/* harmony export */   aN: () => (/* binding */ CLASS_FLEX_CENTER),
/* harmony export */   af: () => (/* binding */ CLASS_SLIDE_WRAPPER),
/* harmony export */   bg: () => (/* binding */ ELEMENT_BUTTON),
/* harmony export */   c3: () => (/* binding */ UNKNOWN_ACTION_TYPE),
/* harmony export */   dA: () => (/* binding */ PLUGIN_THUMBNAILS),
/* harmony export */   ds: () => (/* binding */ EVENT_ON_KEY_DOWN),
/* harmony export */   fS: () => (/* binding */ SLIDE_STATUS_ERROR),
/* harmony export */   hD: () => (/* binding */ CLASS_SLIDE),
/* harmony export */   hb: () => (/* binding */ MODULE_TOOLBAR),
/* harmony export */   j3: () => (/* binding */ IMAGE_FIT_CONTAIN),
/* harmony export */   k0: () => (/* binding */ MODULE_CAROUSEL),
/* harmony export */   l4: () => (/* binding */ MODULE_CONTROLLER),
/* harmony export */   lT: () => (/* binding */ MODULE_ROOT),
/* harmony export */   pE: () => (/* binding */ EVENT_ON_POINTER_LEAVE),
/* harmony export */   rO: () => (/* binding */ IMAGE_FIT_COVER),
/* harmony export */   t9: () => (/* binding */ ACTION_CLOSE),
/* harmony export */   vg: () => (/* binding */ ELEMENT_ICON),
/* harmony export */   xc: () => (/* binding */ PLUGIN_ZOOM),
/* harmony export */   yS: () => (/* binding */ CLASS_FULLSIZE),
/* harmony export */   yq: () => (/* binding */ EVENT_ON_WHEEL),
/* harmony export */   zr: () => (/* binding */ PLUGIN_FULLSCREEN)
/* harmony export */ });
/* unused harmony exports ACTIVE_SLIDE_COMPLETE, ACTIVE_SLIDE_ERROR, ACTIVE_SLIDE_LOADING, ACTIVE_SLIDE_PLAYING, PLUGIN_COUNTER, PLUGIN_DOWNLOAD, PLUGIN_INLINE, PLUGIN_SHARE, PLUGIN_SLIDESHOW, SLIDE_STATUS_PLAYING */
const MODULE_CAROUSEL = "carousel";
const MODULE_CONTROLLER = "controller";
const MODULE_NAVIGATION = "navigation";
const MODULE_NO_SCROLL = "no-scroll";
const MODULE_PORTAL = "portal";
const MODULE_ROOT = "root";
const MODULE_TOOLBAR = "toolbar";
const PLUGIN_CAPTIONS = "captions";
const PLUGIN_COUNTER = "counter";
const PLUGIN_DOWNLOAD = "download";
const PLUGIN_FULLSCREEN = "fullscreen";
const PLUGIN_INLINE = "inline";
const PLUGIN_SHARE = "share";
const PLUGIN_SLIDESHOW = "slideshow";
const PLUGIN_THUMBNAILS = "thumbnails";
const PLUGIN_ZOOM = "zoom";
const SLIDE_STATUS_LOADING = "loading";
const SLIDE_STATUS_PLAYING = "playing";
const SLIDE_STATUS_ERROR = "error";
const SLIDE_STATUS_COMPLETE = "complete";
const SLIDE_STATUS_PLACEHOLDER = "placeholder";
const activeSlideStatus = (status) => `active-slide-${status}`;
const ACTIVE_SLIDE_LOADING = activeSlideStatus(SLIDE_STATUS_LOADING);
const ACTIVE_SLIDE_PLAYING = activeSlideStatus(SLIDE_STATUS_PLAYING);
const ACTIVE_SLIDE_ERROR = activeSlideStatus(SLIDE_STATUS_ERROR);
const ACTIVE_SLIDE_COMPLETE = activeSlideStatus(SLIDE_STATUS_COMPLETE);
const CLASS_FULLSIZE = "fullsize";
const CLASS_FLEX_CENTER = "flex_center";
const CLASS_NO_SCROLL = "no_scroll";
const CLASS_NO_SCROLL_PADDING = "no_scroll_padding";
const CLASS_SLIDE = "slide";
const CLASS_SLIDE_WRAPPER = "slide_wrapper";
const CLASS_SLIDE_WRAPPER_INTERACTIVE = "slide_wrapper_interactive";
const ACTION_PREV = "prev";
const ACTION_NEXT = "next";
const ACTION_SWIPE = "swipe";
const ACTION_CLOSE = "close";
const EVENT_ON_POINTER_DOWN = "onPointerDown";
const EVENT_ON_POINTER_MOVE = "onPointerMove";
const EVENT_ON_POINTER_UP = "onPointerUp";
const EVENT_ON_POINTER_LEAVE = "onPointerLeave";
const EVENT_ON_POINTER_CANCEL = "onPointerCancel";
const EVENT_ON_KEY_DOWN = "onKeyDown";
const EVENT_ON_KEY_UP = "onKeyUp";
const EVENT_ON_WHEEL = "onWheel";
const VK_ESCAPE = "Escape";
const VK_ARROW_LEFT = "ArrowLeft";
const VK_ARROW_RIGHT = "ArrowRight";
const ELEMENT_BUTTON = "button";
const ELEMENT_ICON = "icon";
const IMAGE_FIT_CONTAIN = "contain";
const IMAGE_FIT_COVER = "cover";
const UNKNOWN_ACTION_TYPE = "Unknown action type";




/***/ })

};
;