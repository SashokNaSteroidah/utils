import React from 'react';
import classes from "./center.module.sass";


const Center = ({children}: {children: React.ReactNode}): React.ReactNode => {
    return (
        <main className={classes.centerContainer}>
            <div>
                {children}
            </div>
        </main>
    );
};

export default Center;