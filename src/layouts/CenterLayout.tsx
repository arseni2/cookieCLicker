import React from 'react';

const CenterLayout = (props: any) => {
    const {children, className, ...otherProps} = props
    return (
        <div className={`flex justify-center flex-col text-center ${className ?? ""}`} {...otherProps}>
            {children}
        </div>
    );
};

export default CenterLayout;