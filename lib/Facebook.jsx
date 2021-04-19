import React from "react";
import { useTranslation } from "react-i18next";

export const Facebook = () => {
    const { t } = useTranslation("social");
    return (
        <h2 id="title">{ t("facebook") }</h2>
    );
};