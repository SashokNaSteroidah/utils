"use client"

import React, {useEffect, useState} from 'react';

const UuidPage = (): React.ReactNode => {
    const [uuid, setUuid] = useState<string>(crypto.randomUUID())
    const generateUuid = (): void => {
        setUuid(crypto.randomUUID())
    }

    return (
        <>
            <div>
                <span>
                    {uuid}
                </span>
                <button onClick={() => generateUuid()}>Regen UUID</button>
            </div>
            Generate by crypto (webAPI)
        </>
    );
};

export default UuidPage