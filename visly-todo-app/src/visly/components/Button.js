// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import React from "react";
import { exists, selectStyle } from "./_internal_utils";
import {
  StaticRootPrimitive,
  RootPrimitive,
  SpacerPrimitive,
  ImagePrimitive,
  TextPrimitive,
  ContainerPrimitive,
  IconPrimitive,
  ProgressFillPrimitive,
} from "./_internal_primitives";
import { Root, InputPrimitive } from "./_internal_input";
import { CheckboxRoot } from "./_internal_checkbox";
import { ButtonRoot } from "./_internal_button";
import { TooltipRoot } from "./_internal_tooltip";
import { SegmentedControlRoot } from "./_internal_segmented_control";
import { SegmentedControlButtonRoot } from "./_internal_segmented_control";
import "./Button.css";
const styles = [
  {
    type: "default",
    layers: {
      "fddedaf3-e944-4678-8e09-2606f7d0390a": { none: { text: "Button" } },
    },
  },
];
export default function (props) {
  return (
    <ButtonRoot
      {...{
        ...props,
        key: "root",
        internal: {
          styles,
          layerId: "root",
          scope: "e15d6bca-c0c9-4ab0-b856-12d569ad0524",
          variantPropTypes: [],
        },
      }}
    >
      {(values) => [
        <TextPrimitive
          className={
            "__visly_reset __visly_fddedaf3-e944-4678-8e09-2606f7d0390a __visly_scope_e15d6bca-c0c9-4ab0-b856-12d569ad0524"
          }
          key={"fddedaf3-e944-4678-8e09-2606f7d0390a"}
          text={exists(props.text) ? props.text : "Button"}
        />,
      ]}
    </ButtonRoot>
  );
}
