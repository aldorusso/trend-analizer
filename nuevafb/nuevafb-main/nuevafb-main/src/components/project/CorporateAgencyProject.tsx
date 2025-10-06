import homeData from '@/../content/pages/corporate-home.json';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CorporateAgencyProject = () => {
    const { projects } = homeData;

    return (
        <div className="crp-project-area tp-panel-pin-area pt-100 mb-150">
            <div className="container container-1330">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="crp-project-title-box tp-panel-pin">
                            <h4 className="tp-section-title-teko fs-150 mb-50 tp_fade_anim" data-delay=".3">
                                {projects.title.split(' ').slice(0, 2).join(' ')} <span>{projects.title.split(' ').slice(2).join(' ')}</span>
                            </h4>
                            <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                <Link className="tp-btn-yellow-border" href={projects.buttonLink}>
                                    <span>
                                        <span className="text-1">{projects.buttonText}</span>
                                        <span className="text-2">{projects.buttonText}</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="crp-project-right">
                            {projects.projectsList.map((project, index) => (
                                <div key={index} className="crp-project-item tp-panel-pin mb-40">
                                    <div className="crp-project-meta d-flex justify-content-between align-items-center">
                                        <span>{project.number}</span>
                                        <span>{project.year}</span>
                                    </div>
                                    <div className="crp-project-thumb text-center"
                                    style={{ backgroundImage: `url(${projects.bgShape})` }}>
                                        <Image src={project.image} alt={project.title} width={600} height={400} />
                                    </div>
                                    <div className="crp-project-content">
                                        <h4 className="crp-project-title-sm mb-15">
                                            <Link className="tp-line-white green" href={project.link}>
                                                {project.title}
                                            </Link>
                                        </h4>
                                        <div className="crp-project-category">
                                            {project.categories?.map((category, catIndex) => (
                                                <Link key={catIndex} href="#">{category}</Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CorporateAgencyProject;