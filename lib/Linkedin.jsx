import React from "react";
import { useTranslation } from "react-i18next";

export const Linkedin = () => {
    const { t } = useTranslation("social");
    return (
        <h2 id="title">{ t("linkedin") }</h2>
    );
};