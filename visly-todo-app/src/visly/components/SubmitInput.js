// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "../textstyles/fonts.css";
import "./reset.css";
import React from "react";
import { RootPrimitive, ContainerPrimitive } from "./_internal_primitives";
import "./SubmitInput.css";
import IconButton from "./IconButton";
import Input from "./Input";

const styles = [
  {
    type: "default",
    layers: {},
  },
];

export default function SubmitInput(props) {
  return (
    <RootPrimitive
      {...props}
      key="REBnvNeuyY"
      internal={{
        styles,
        layerId: "REBnvNeuyY",
        scope: "PWA9uV2g2r",
        variantPropTypes: [],
      }}
      addSpacing={false}
    >
      <Input
        key={"WwptRNdGtF"}
        {...{
          placeholder: props["placeholder"],
          value: props["value"],
          onChange: props["onChange"],
          className: "__visly_reset __visly_scope_PWA9uV2g2r_WwptRNdGtF",
        }}
      />
      <ContainerPrimitive
        className={"__visly_reset __visly_scope_PWA9uV2g2r_NEwo5DeyNv"}
        key={"NEwo5DeyNv"}
        addSpacing={false}
      >
        {
          <IconButton
            key={"CX5ZtAKaFS"}
            {...{
              icon: require("../assets/154f1398-7a56-4c95-bd2d-6f436587fd18@1x.svg"),
              onClick: props["onSubmit"],
              className: "__visly_reset __visly_scope_PWA9uV2g2r_CX5ZtAKaFS",
            }}
          />
        }
      </ContainerPrimitive>
    </RootPrimitive>
  );
}
