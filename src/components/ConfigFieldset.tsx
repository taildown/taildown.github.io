import React, { ReactNode } from 'react';

interface ConfigFieldsetProps {
    legend: string;
    description?: string;
    children: ReactNode;
}

const ConfigFieldset: React.FC<ConfigFieldsetProps> = ({ legend, children, description }) => {
    return (
        <fieldset className="border p-4 border-gray-100 mt-2">
            <legend className="bg-slate-50 px-2 border boder-slate-100 text-xs font-semibold">{legend}</legend>
            {description && <p className="text-xs text-gray-500 mb-3">{description}</p>}
            {children}
        </fieldset>
    );
};

export default ConfigFieldset;