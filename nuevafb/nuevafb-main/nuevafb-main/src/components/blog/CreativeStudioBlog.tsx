'use client';
import { ArrowSvg, ButtonBlurFilter } from '@/svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import type { BlogPost } from '@/lib/getBlogPosts';

interface CreativeStudioBlogProps {
  posts: BlogPost[];
}

const CreativeStudioBlog: React.FC<CreativeStudioBlogProps> = ({ posts }) => {
    return (
        <div className="creative-blog-area pt-120 pb-80">
            <div className="container container-1580">
                <div className="creative-blog-title-wrap mb-60">
                    <div className="row align-items-end">
                        <div className="col-xl-3">
                            <div className="creative-blog-subtitle-box">
                                <span className="tp-section-subtitle mb-20 fs-17 pre-circle">Blog</span>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6">
                            <div className="creative-blog-title-box">
                                <h4 className="tp-section-title fs-44">Últimas noticias <br /> y artículos</h4>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="creative-blog-top-content text-lg-end">
                                <Link href="/blog" className="tp-btn-black btn-green-light-bg pr-15">
                                    <span className="tp-btn-black-filter-blur">
                                        <ButtonBlurFilter filterId="buttonFilter8" />
                                    </span>
                                    <span className="tp-btn-black-filter d-inline-flex align-items-center" style={{ filter: 'url(#buttonFilter8)' }}>
                                        <span className="tp-btn-black-text">Ver todos los artículos</span>
                                        <span className="tp-btn-black-circle">
                                            <ArrowSvg />
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {posts.map((item, index) => (
                        <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                            <div className="creative-blog-item mb-40">
                                <div className="creative-blog-thumb">
                                    <Link href={`/blog/${item.slug}`}>
                                        <Image style={{ width: "100%", height: "auto" }} src={item.featuredImage} alt={item.title} width={600} height={400} />
                                    </Link>
                                </div>
                                <div className="creative-blog-meta">
                                    <span>{item.category}</span>
                                    <span>{new Date(item.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>
                                <h4 className="creative-blog-title-sm">
                                    <Link className="tp-line-white" href={`/blog/${item.slug}`}>
                                        {item.title}
                                    </Link>
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreativeStudioBlog;
