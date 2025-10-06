import { EditIcon } from "@/svg/CategoriesIcons";
import ClockIcon from "@/svg/ClockIcon";
import { ArrowFour } from "@/svg";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/getBlogPosts";
import React from "react";

interface BlogMasonryItemListProps {
    blogPosts: BlogPost[];
}

const BlogMasonryItemList: React.FC<BlogMasonryItemListProps> = ({ blogPosts }) => {

    return (
        <>
            {blogPosts.map((post, index) => (
                <div className="col-lg-4 col-md-6 grid-item" key={index}>
                    <div className="tp-blog-masonry-item mb-30">
                        <div className="tp-blog-masonry-item-top d-flex justify-content-between align-items-center mb-30">
                            <div className="tp-blog-masonry-item-user d-flex align-items-center">
                                <div className="tp-blog-masonry-item-user-content">
                                    <span>{post.author}</span>
                                    <p>{new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                            </div>
                            <div className="tp-blog-masonry-item-time">
                                <span><ClockIcon /> {new Date(post.date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' })}</span>
                            </div>
                        </div>
                        <div className="tp-blog-masonry-thumb mb-30">
                            <Link href={`/blog/${post.slug}`}>
                                <Image
                                    style={{ width: "100%", height: "auto" }}
                                    src={post.featuredImage}
                                    alt={post.title}
                                    width={600}
                                    height={400}
                                />
                            </Link>
                        </div>
                        <div className="tp-blog-masonry-content">
                            <div className="tp-blog-masonry-tag mb-15">
                                <span><EditIcon /> {post.category}</span>
                            </div>
                            <h4 className="tp-blog-masonry-title">
                                <Link className="tp-line-white" href={`/blog/${post.slug}`}>
                                    {post.title}
                                </Link>
                            </h4>
                            <p className="mb-20">{post.excerpt}</p>
                            <div className="tp-blog-masonry-btn">
                                <Link href={`/blog/${post.slug}`}>
                                    Leer más
                                    <span>
                                        <ArrowFour strokeWidth={2} />
                                        <ArrowFour strokeWidth={2} />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default BlogMasonryItemList;
