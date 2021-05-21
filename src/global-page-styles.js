import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "--color-darkL1"
    },
    "index": {
        "background": "--color-darkL1"
    },
    "index/welcome-for-dev": {},
    "index/getting-started-for-dev": {},
    "index/components-for-dev": {},
    "index/components-for-dev/create-component": {},
    "index/components-for-dev/components-structure": {},
    "index/components-for-dev/import-components": {},
    "index/components-for-dev/create-components-with-atomize": {},
    "index/components-for-dev/create-components-with-atomize/create-simple-component": {},
    "index/components-for-dev/create-components-with-atomize/adding-effects": {},
    "index/components-for-dev/create-components-with-atomize/using-breakpoints": {},
    "index/components-for-dev/project-api": {},
    "index/components-for-dev/project-api/getting-styles": {},
    "index/components-for-dev/project-api/getting-theme": {},
    "index/components-for-dev/component-props": {},
    "index/components-for-dev/component-props/propinfo-object": {},
    "index/components-for-dev/component-props/default-props": {},
    "index/components-for-dev/overrides": {},
    "index/components-for-dev/overrides/add-overrides": {},
    "index/components-for-dev/overrides/creating-overrides-list": {},
    "index/components-for-dev/overrides/use-overrides-into-component": {},
    "index/components-for-dev/overrides/export-overrides": {},
    "index/components-for-dev/overrides/example-component-with-overrides": {},
    "index/components-for-dev/overrides/example-imported-components": {},
    "index/tutorials-for-dev": {},
    "index/tutorials-for-dev/make-a-counter": {},
    "index/tutorials-for-dev/create-component-for-dev": {},
    "index/tutorials-for-dev/create-card-component": {},
    "index/tutorials-for-dev/make-a-staff-files-with-airtable": {},
    "index/tutorials-for-dev/make-an-entertaining-app": {},
    "index/how-tos-for-dev": {},
    "index/how-tos-for-dev/render-content": {},
    "index/how-tos-for-dev/events": {},
    "index/how-tos-for-dev/keyframe-animations": {},
    "index/faq-for-dev": {},
    "index/faq-for-dev/faq-general": {},
    "index/faq-for-dev/atomize": {},
    "index/faq-for-dev/faq-overrides": {},
    "index/faq-for-dev/props": {},
    "index/resources-for-dev": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
