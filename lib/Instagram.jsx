import React from "react";
import { useTranslation } from "react-i18next";

export const Instagram = () => {
    const { t } = useTranslation("social");
    return (
        <h2 id="title">{ t("instagram") }</h2>
    );
};