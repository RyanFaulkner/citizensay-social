import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { Button, Collapse, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { EditField } from "meteor/citizensay:workflows";


export const Social = ({ workflow }) => {
    const { t } = useTranslation("editors");
    const [ open, setOpen ] = useState();
    return (
        <>
            <br/>
            <Form.Label>{ t("socialMedia") }</Form.Label>
            <Button
                variant="light"
                size="sm"
                style={{float: "right"}}
                onClick={() => setOpen(!open)}
            >
                { t(open ? "hide": "show") }
            </Button>
            <Collapse in={open}>
                <Form.Group>
                    {
                        ["facebook", "linkedin"].map(field =>
                            <EditField
                                key={field}
                                id={workflow._id}
                                field={field}
                                prefix={
                                    <>
                                        <FontAwesomeIcon icon={["fab", field === "facebook" ? "facebook-f": "linkedin-in"]}/>
                                        &nbsp;
                                        https://www.{ field }.com/{ field==="linkedin" && "embed/feed/update/urn:li:share:" }
                                    </>
                                }
                                value={workflow[field]}
                                placeholder="id"
                                help={ t(field + "Help") }
                            />
                        )
                    }
                </Form.Group>
            </Collapse>
        </>
    );
};