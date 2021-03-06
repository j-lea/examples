// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import React from "react";
import { exists } from "./_internal_utils";
import { TextPrimitive } from "./_internal_primitives";
import { ButtonRoot } from "./_internal_button";
import "./Button.css";

const styles = [
  {
    type: "default",
    layers: {
      YMF63gWc8A: {
        none: {
          text: "ndewndenddndndndndndndn",
        },
      },
    },
  },
];

export default function Button(props) {
  return (
    <ButtonRoot
      {...props}
      key="root"
      internal={{
        styles,
        layerId: "root",
        scope: "Uq5q7Rg3yu",
        variantPropTypes: [],
      }}
    >
      <TextPrimitive
        className={"__visly_reset __visly_scope_Uq5q7Rg3yu_YMF63gWc8A"}
        key={"YMF63gWc8A"}
        text={exists(props.text) ? props.text : "ndewndenddndndndndndndn"}
      />
    </ButtonRoot>
  );
}
