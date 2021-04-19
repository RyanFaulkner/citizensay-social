import React from "react";
import { useTranslation } from "react-i18next";

export const Twitter = () => {
    const { t } = useTranslation("social");
    return (
        <h2>{ t("twitter") }</h2>
    );
};