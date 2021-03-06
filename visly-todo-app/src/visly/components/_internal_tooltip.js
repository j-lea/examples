// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { createPortal } from "react-dom";
import {
  useRootProps,
  exists,
  InteractionState,
  useRect,
  useTimeout,
  renderChildren,
} from "./_internal_utils";
export let Gravity;

(function (Gravity) {
  Gravity[(Gravity["Top"] = 0)] = "Top";
  Gravity[(Gravity["Bottom"] = 1)] = "Bottom";
  Gravity[(Gravity["Left"] = 2)] = "Left";
  Gravity[(Gravity["Right"] = 3)] = "Right";
})(Gravity || (Gravity = {}));

export function gravityStringToEnum(g) {
  return g === "left"
    ? Gravity.Left
    : g === "right"
    ? Gravity.Right
    : g === "top"
    ? Gravity.Top
    : g === "bottom"
    ? Gravity.Bottom
    : Gravity.Bottom;
}
const TooltipContext = createContext(null);
export function TooltipRoot(props) {
  const {
    injectedProps,
    className,
    tabIndex,
    innerRef,
    values,
    style,
  } = useRootProps(props, InteractionState.None);
  const gravity = gravityStringToEnum(props.gravity);
  const color = values[props.internal.layerId].arrowColor;
  const delayMs = props.delayMs;
  const alwaysShow = injectedProps.alwaysShowTooltip || false;
  const arrowScale = injectedProps.arrowScale || 1;
  return (
    <TooltipContext.Provider
      value={{
        color,
        delayMs,
        gravity,
        alwaysShow,
        arrowScale,
      }}
    >
      <Tooltip
        content={
          <div
            tabIndex={tabIndex}
            ref={innerRef}
            {...(exists(injectedProps.reactProps)
              ? injectedProps.reactProps
              : {})}
            className={className}
            style={style}
          >
            {renderChildren(props.internalChildren, values)}
          </div>
        }
      >
        {props.children}
      </Tooltip>
    </TooltipContext.Provider>
  );
}
const MARGIN = 10;
let isTooltipShowing = false;
export function Tooltip(props) {
  const { alwaysShow } = useContext(TooltipContext);
  const [showing, setShowing] = useState(false);
  const ref = useRef(null);
  const bounds = useRect(ref, true);

  const onMouseEnter = () => setShowing(true);

  const onMouseLeave = () => setShowing(false);

  if (alwaysShow) {
    return (
      <TooltipImpl
        targetBounds={{
          x: 0,
          y: -22,
          width: 1,
          height: 1,
        }}
      >
        {props.content}
      </TooltipImpl>
    );
  }

  return (
    <div
      ref={ref}
      style={props.style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {showing
        ? createPortal(
            <TooltipImpl targetBounds={bounds}>{props.content}</TooltipImpl>,
            document.body
          )
        : null}
      {props.children}
    </div>
  );
}

function TooltipImpl(props) {
  const [showing, setShowing] = useState(false);
  const ref = useRef(null);
  const bounds = useRect(ref, true);
  const { delayMs, gravity, color, alwaysShow, arrowScale } = useContext(
    TooltipContext
  );
  const animationSettings = {
    delayShow: exists(delayMs) ? delayMs : 400,
    velocityShow: 20,
    delayHide: 0,
    velocityHide: 200,
  };
  useTimeout(
    () => {
      isTooltipShowing = true;
      setShowing(true);
    },
    isTooltipShowing
      ? animationSettings.delayHide
      : animationSettings.delayShow,
    [setShowing]
  );
  useEffect(() => {
    return () => {
      isTooltipShowing = false;
    };
  }, []);

  if (!showing && !alwaysShow) {
    return null;
  }

  let x, y, direction, arrow;

  switch (gravity) {
    case Gravity.Top:
      x =
        props.targetBounds.x + props.targetBounds.width / 2 - bounds.width / 2;
      y = props.targetBounds.y - bounds.height - MARGIN;
      direction = "column";
      arrow = arrowBottom;
      break;

    case Gravity.Bottom:
      x =
        props.targetBounds.x + props.targetBounds.width / 2 - bounds.width / 2;
      y = props.targetBounds.y + props.targetBounds.height + MARGIN;
      direction = "column";
      arrow = arrowTop;
      break;

    case Gravity.Left:
      x = props.targetBounds.x - bounds.width - MARGIN;
      y =
        props.targetBounds.y +
        props.targetBounds.height / 2 -
        bounds.height / 2;
      direction = "row";
      arrow = arrowRight;
      break;

    case Gravity.Right:
      x = props.targetBounds.x + props.targetBounds.width + MARGIN;
      y =
        props.targetBounds.y +
        props.targetBounds.height / 2 -
        bounds.height / 2;
      direction = "row";
      arrow = arrowLeft;
      break;
  }

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        zIndex: 100000,
        display: "flex",
        flexDirection: direction,
        left: `${x}px`,
        top: `${y}px`,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={arrow(bounds, color, arrowScale)}></div>
      {props.children}
    </div>
  );
}

const arrowTop = (_bounds, color, scale = 1) => ({
  position: "absolute",
  top: -2,
  content: "",
  alignSelf: "center",
  width: 6,
  height: 6,
  backgroundColor: color,
  borderRadius: 1 * scale,
  transform: "rotate(45deg)",
});

const arrowBottom = (_bounds, color, scale = 1) => ({
  position: "absolute",
  bottom: -2 * scale,
  content: "",
  alignSelf: "center",
  width: 6 * scale,
  height: 6 * scale,
  backgroundColor: color,
  borderRadius: 1 * scale,
  transform: "rotate(45deg)",
});

export const arrowLeft = (bounds, color, scale = 1) => ({
  position: "absolute",
  left: -2 * scale,
  content: "",
  marginTop: `${bounds.height / 2 - 4 * scale}px;`,
  width: 6 * scale,
  height: 6 * scale,
  backgroundColor: color,
  borderRadius: 1 * scale,
  transform: "rotate(45deg)",
});

const arrowRight = (bounds, color, scale = 1) => ({
  position: "absolute",
  right: -2 * scale,
  content: "",
  marginTop: `${bounds.height / 2 - 4 * scale}px;`,
  width: 6 * scale,
  height: 6 * scale,
  backgroundColor: color,
  borderRadius: 1 * scale,
  transform: "rotate(45deg)",
});
