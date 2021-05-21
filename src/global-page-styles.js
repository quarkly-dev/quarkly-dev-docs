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
    "welcome-for-dev": {},
    "getting-started-for-dev": {},
    "components-for-dev": {},
    "components-for-dev/create-component": {},
    "components-for-dev/components-structure": {},
    "components-for-dev/import-components": {},
    "components-for-dev/create-components-with-atomize": {},
    "components-for-dev/create-components-with-atomize/create-simple-component": {},
    "components-for-dev/create-components-with-atomize/adding-effects": {},
    "components-for-dev/create-components-with-atomize/using-breakpoints": {},
    "components-for-dev/project-api": {},
    "components-for-dev/project-api/getting-styles": {},
    "components-for-dev/project-api/getting-theme": {},
    "components-for-dev/component-props": {},
    "components-for-dev/component-props/propinfo-object": {},
    "components-for-dev/component-props/default-props": {},
    "components-for-dev/overrides": {},
    "components-for-dev/overrides/add-overrides": {},
    "components-for-dev/overrides/creating-overrides-list": {},
    "components-for-dev/overrides/use-overrides-into-component": {},
    "components-for-dev/overrides/export-overrides": {},
    "components-for-dev/overrides/example-component-with-overrides": {},
    "components-for-dev/overrides/example-imported-components": {},
    "tutorials-for-dev": {},
    "tutorials-for-dev/make-a-counter": {},
    "tutorials-for-dev/create-component-for-dev": {},
    "tutorials-for-dev/create-card-component": {},
    "tutorials-for-dev/make-a-staff-files-with-airtable": {},
    "tutorials-for-dev/make-an-entertaining-app": {},
    "how-tos-for-dev": {},
    "how-tos-for-dev/render-content": {},
    "how-tos-for-dev/events": {},
    "how-tos-for-dev/keyframe-animations": {},
    "faq-for-dev": {},
    "faq-for-dev/faq-general": {},
    "faq-for-dev/atomize": {},
    "faq-for-dev/faq-overrides": {},
    "faq-for-dev/props": {},
    "resources-for-dev": {}
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
