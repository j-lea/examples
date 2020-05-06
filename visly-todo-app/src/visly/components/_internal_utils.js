// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import { useMemo, useState, useRef, useCallback, useEffect } from "react";
export function exists(val) {
  return !(val === undefined || val === null);
}
export function getStyleFunc(values) {
  return (layerId, styleName) => {
    return getStyle(values, layerId, styleName);
  };
}
export function renderChildren(children, values) {
  if (typeof children === "function") {
    return children(getStyleFunc(values));
  }

  return children;
}
export function getStyle(values, layerId, styleName) {
  if (exists(values[layerId])) {
    return values[layerId][styleName];
  }

  return undefined;
}
export let InteractionState;

(function (InteractionState) {
  InteractionState["None"] = "none";
  InteractionState["Hover"] = "hover";
  InteractionState["Pressed"] = "pressed";
  InteractionState["Focus"] = "focus";
  InteractionState["Disabled"] = "disabled";
})(InteractionState || (InteractionState = {}));

export const inherits = {
  [InteractionState.None]: undefined,
  [InteractionState.Hover]: InteractionState.None,
  [InteractionState.Focus]: InteractionState.Hover,
  [InteractionState.Pressed]: InteractionState.Focus,
  [InteractionState.Disabled]: InteractionState.None,
};
export let VariantPropType;

(function (VariantPropType) {
  VariantPropType["Default"] = "default";
  VariantPropType["Enum"] = "enum";
  VariantPropType["Boolean"] = "boolean";
})(VariantPropType || (VariantPropType = {}));

const propErrorDescriptions = {
  [VariantPropType.Boolean]: booleanPropErrorMessage,
  [VariantPropType.Enum]: enumPropErrorMessage,
};

function booleanPropErrorMessage(prop) {
  return `${prop.propName} is a boolean prop but was passed a non-boolean value.`;
}

function enumPropErrorMessage(prop) {
  return `${
    prop.propName
  } is an enum with supported values: ${prop.propValues.join(" | ")}`;
}

function validateVariantProp(prop, value) {
  if (prop.type === VariantPropType.Boolean) {
    return typeof value === "boolean";
  }

  return typeof value === "string" && prop.propValues.includes(value);
}

export function findSetVariantProps(propTypes, props) {
  if (!exists(props)) {
    return [];
  }

  return propTypes
    .filter((p) => exists(props[p.propName]))
    .reduce((arr, p) => {
      if (!validateVariantProp(p, props[p.propName])) {
        console.warn(
          `Invalid value for prop ${p.propName}. ${propErrorDescriptions[
            p.type
          ](p)}`
        );
        return arr;
      }

      switch (p.type) {
        case VariantPropType.Boolean:
          if (props[p.propName] === true) {
            return [
              ...arr,
              {
                propName: p.propName,
              },
            ];
          } else {
            return arr;
          }

        case VariantPropType.Enum:
          return [
            ...arr,
            {
              propName: p.propName,
              propValue: props[p.propName],
            },
          ];

        default:
          throw Error();
      }
    }, []);
}

function getStyles(styles, propValue) {
  switch (styles.type) {
    case "default":
      return styles.layers;

    case "boolean":
      return styles.layers;

    case "enum": {
      const container = styles.values.find((v) => v.propValue === propValue);

      if (!exists(container)) {
        console.error(
          `No styles found for prop ${styles.propName} with value ${propValue}`
        );
        return {};
      }

      return container.layers;
    }
  }
}

export function useRootProps(props, state) {
  const {
    internal,
    style,
    className,
    tabIndex,
    innerRef,
    role,
    testId,
    onKeyDown,
    onKeyUp,
    ...other
  } = props;
  const injectedProps =
    exists(internal) && exists(internal.injectedProps)
      ? internal.injectedProps
      : {};
  const injectedStyle =
    exists(injectedProps) && exists(injectedProps.style)
      ? injectedProps.style
      : {};
  const setVariantProps = findSetVariantProps(internal.variantPropTypes, {
    ...injectedProps,
    ...other,
  });
  const disabledStyle =
    state === InteractionState.Disabled
      ? {
          cursor: "not-allowed",
        }
      : {};
  const vislyClasses = getRootClasses({
    scope: internal.scope,
    layerId: internal.layerId,
    setVariantProps,
    state,
  });
  const finalStyle = {
    ...injectedStyle,
    ...(exists(style) ? style : {}),
    ...disabledStyle,
  };
  const finalClassName = [className, injectedProps.className, vislyClasses]
    .filter(exists)
    .join(" ");
  return useMemo(
    () => ({
      style: finalStyle,
      className: finalClassName,
      injectedProps: injectedProps,
      variants: setVariantProps,
      tabIndex,
      innerRef,
      role,
      testId,
      values: stylesForState({
        styles: props.internal.styles,
        state,
        variants: setVariantProps,
      }),
    }),
    [
      finalStyle,
      finalClassName,
      injectedProps,
      setVariantProps,
      tabIndex,
      innerRef,
      role,
      testId,
      props.internal.styles,
      state,
    ]
  );
}
export function getRootClasses(args) {
  const scopeClass = exists(args.scope) ? `__visly_scope_${args.scope}` : "";
  const layerClass = `__visly_${args.layerId}`;
  const variantClasses = [
    `__visly_default`,
    ...args.setVariantProps.map((p) =>
      exists(p.propValue)
        ? `__visly_${p.propName}-${p.propValue}`
        : `__visly_${p.propName}`
    ),
  ].join(" ");
  const stateClasses = getInheritanceChain(args.state)
    .map((state) => `__visly_state_${state}`)
    .join(" ");
  return `__visly_reset ${scopeClass} ${layerClass} ${variantClasses} ${stateClasses}`;
}
export function getLayerClass(layerId, scope) {
  return `__visly_reset __visly_${layerId} __visly_scope_${scope}`;
}
export const entries = Object.entries;

function mapValues(obj, fn) {
  const acc = {};

  for (const [k, v] of entries(obj)) {
    acc[k] = fn(v);
  }

  return acc;
}

export function mergeDeep(...vals) {
  function merge(a, b) {
    if (
      exists(a) &&
      typeof a === "object" &&
      exists(b) &&
      typeof b === "object"
    ) {
      const out = { ...a };

      for (const [k, v] of entries(b)) {
        out[k] = merge(out[k], v);
      }

      return out;
    }

    return exists(b) ? b : a;
  }

  return vals.reduce(merge, {});
}

const getInheritanceChain = (start) => {
  const states = [];
  let state = start;

  while (exists(state)) {
    states.unshift(state);
    state = inherits[state];
  }

  return states;
};

export const stylesForState = (args) => {
  const { styles, state, variants } = args;
  const states = getInheritanceChain(state);
  const stylesToMerge = [
    getStyles(styles.find((s) => s.type === "default")) || {},
  ];

  if (exists(variants)) {
    for (const variant of variants) {
      stylesToMerge.push(
        getStyles(
          styles.find(
            (s) =>
              s.type !== VariantPropType.Default &&
              s.propName === variant.propName
          ),
          variant.propValue
        )
      );
    }
  }

  return mergeDeep(
    ...stylesToMerge.map((variantStyles) =>
      mapValues(variantStyles, (stylesPerState) =>
        mergeDeep({}, ...states.map((state) => stylesPerState[state]))
      )
    )
  );
};

function useInteractionState(props) {
  const [focused, setFocused] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const disabled =
    exists(props.disabled) && typeof props.disabled === "boolean"
      ? props.disabled
      : false;
  const state = disabled
    ? InteractionState.Disabled
    : pressed
    ? InteractionState.Pressed
    : focused
    ? InteractionState.Focus
    : hovered
    ? InteractionState.Hover
    : InteractionState.None;
  return {
    state,
    setFocused,
    setPressed,
    setHovered,
  };
}

function setRef(ref, element) {
  if (exists(ref)) {
    if (typeof ref === "function") {
      ref(element);
    } else {
      ref.current = element;
    }
  }
}

export function combineRef(ref1, ref2) {
  return (el) => {
    setRef(ref1, el);
    setRef(ref2, el);
  };
}
export function useEventHandlers(props) {
  const { state, setFocused, setHovered, setPressed } = useInteractionState(
    props
  );
  const isInside = useCallback(
    (e) => {
      if (!exists(props.ref)) return false;
      let parent = e.target;

      while (exists(parent)) {
        if (parent === props.ref.current) {
          return true;
        }

        parent = parent.parentNode;
      }

      return false;
    },
    [props]
  );
  const handlers = useMemo(
    () => ({
      onKeyDown: props.onKeyDown,
      onKeyUp: props.onKeyUp,
      onMouseEnter: (e) => setHovered(isInside(e)),
      onMouseLeave: (e) => setHovered(false),
      onMouseMove: (e) => setHovered(isInside(e)),
      onMouseDown: (e) => setPressed(isInside(e)),
      onMouseUp: (e) => setPressed(false),
      onFocus: (e) => {
        setFocused(true);

        if (props.onFocus) {
          props.onFocus(e);
        }
      },
      onBlur: (e) => {
        setFocused(false);

        if (props.onBlur) {
          props.onBlur(e);
        }
      },
      onClick: props.onClick,
    }),
    [props, isInside, setFocused, setPressed, setHovered]
  );

  if (state === InteractionState.Disabled) {
    return {
      state,
      handlers: {},
      setFocused: () => {},
    };
  }

  return {
    state,
    setFocused,
    handlers,
  };
}
export const props = [
  "bottom",
  "left",
  "right",
  "top",
  "width",
  "height",
  "x",
  "y",
];

function rectChanged(a, b) {
  return props.some((prop) => a[prop] !== b[prop]);
}

export const useRect = (ref, observe = false) => {
  const [rect, setRect] = useState({
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });
  const observeRef = useRef(observe);
  const didCalcInitialRect = useRef(false);
  const updateRect = useCallback(() => {
    if (exists(ref) && exists(ref.current)) {
      const newRect = ref.current.getBoundingClientRect();

      if (rectChanged(newRect, rect)) {
        setRect(newRect);
      }
    }
  }, [rect, ref]);
  useEffect(() => {
    if (observeRef.current || !didCalcInitialRect.current) {
      updateRect();
      didCalcInitialRect.current = true;
    }
  });
  useEffect(() => {
    observeRef.current = observe;
  }, [observe]);
  useEffect(() => {
    window.addEventListener("resize", updateRect);
    return () => {
      window.removeEventListener("resize", updateRect);
    };
  }, [rect, updateRect]);
  return rect;
};
export function useTimeout(callback, delay, deps) {
  return useEffect(() => {
    const handle = setTimeout(callback, delay);
    return () => clearTimeout(handle);
  }, [callback, delay]);
}
export const noop = () => {};
