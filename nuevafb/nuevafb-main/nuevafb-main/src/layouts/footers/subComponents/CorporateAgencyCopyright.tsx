import globalSettings from '@/../content/settings/global.json';
import React from 'react';

const CorporateAgencyCopyright = () => {
    const { footer } = globalSettings;

    return (
        <div className="row">
            <div className="col-xl-12">
                <div className="crp-copyright-text text-center pt-40 pb-50">
                    <p>{footer.copyright}</p>
                    {footer.legalText && (
                        <p className="mt-2" style={{ fontSize: '0.85em', opacity: 0.8 }}>
                            {footer.legalText}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CorporateAgencyCopyright;