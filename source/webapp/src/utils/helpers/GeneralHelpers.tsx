import React from "react";
import {Button} from "react-bootstrap";
import CopyIcon from "../resources/icons/utils/CopyIcon";

const getButtonToCopyTextToClipboard = (text: string | undefined) => {

    if (text != undefined) {

        return (
            <>
                {text}
                <Button
                    variant="link"
                    className="btn-with-simple-icon btn-copy"
                    onClick={() => {
                        navigator.clipboard.writeText(text)
                    }}>
                    {
                        <CopyIcon/>
                    }
                </Button>
            </>
        );

    } else {

        return null;
    }
}

export {getButtonToCopyTextToClipboard};
