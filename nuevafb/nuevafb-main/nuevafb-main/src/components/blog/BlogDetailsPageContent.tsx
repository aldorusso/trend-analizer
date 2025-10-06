"use client"
import BlogStandardBreadcrumb from '@/components/breadcurmb/BlogStandardBreadCrumb';
import BlogSidebarSearchInput from '@/components/forms/BlogSidebarSearchInput';
import BlogSidebarAuthorInfo from '@/components/blog/BlogSidebarAuthorInfo';
import BlogSidebarCategory from '@/components/category/BlogSidebarCategory';
import { DribbleTwo, FacebookTwo, InstagramSvg, QuoteIconSix } from '@/svg';
import CreativeStudioFooter from '@/layouts/footers/CreativeStudioFooter';
import { useCursorAndBackground } from '@/hooks/useCursorAndBackground';
import PostboxDetailsForm from '@/components/forms/PostboxDetailsForm';
import PostboxDetailsThumb from '@/components/blog/PostboxDetailsThumb';
import { TwitterSvg } from '@/svg/social-icons/Twitter';
import BlogSidebarPost from '@/components/blog/BlogSidebarPost';
import BlogSidebarTags from '@/components/blog/BlogSidebarTags';
import InnerPageHeader from '@/layouts/headers/InnerPageHeader';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import PostboxComment from '@/components/blog/PostboxComment';
import { fadeAnimation } from '@/hooks/useGsapAnimation';
import useScrollSmooth from '@/hooks/useScrollSmooth';
import { EditIcon } from '@/svg/CategoriesIcons';
import { CommentIcon } from '@/svg/ContactIcons';
import ClockIcon from '@/svg/ClockIcon';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/getBlogPosts';
import ReactMarkdown from 'react-markdown';

interface BlogDetailsPageContentProps {
    post: BlogPost;
}

const BlogDetailsPageContent: React.FC<BlogDetailsPageContentProps> = ({ post }) => {
    // Initialize custom cursor and optional background styles
    useCursorAndBackground();

    // Enable smooth scroll animations
    useScrollSmooth();

    useGSAP(() => {
        const timer = setTimeout(() => {
            fadeAnimation();
        }, 100)
        return () => clearTimeout(timer);
    });

    // Format date
    const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <>
            <div id="magic-cursor" className="cursor-white-bg">
                <div id="ball"></div>
            </div>

            {/* Global Components */}
            <BackToTop />
            <InnerPageHeader />

            <div id="smooth-wrapper">
                <div id="smooth-content">
                    {/* Main Content Sections */}
                    <main>
                        <BlogStandardBreadcrumb title={post.title} subTitle='Blog' />

                        <section id="postbox" className="postbox-area pt-110 pb-80">
                            <div className="container container-1330">
                                <div className="row">
                                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                                        <div className="postbox-wrapper mb-115">
                                            <article className="postbox-details-item item-border mb-20">
                                                <div className="postbox-details-info-wrap">
                                                    <div className="postbox-tag postbox-details-tag">
                                                        <span>
                                                            <i><EditIcon /></i>{" "}
                                                            {post.category}
                                                        </span>
                                                    </div>
                                                    <h4 className="postbox-title fs-54">{post.title}</h4>
                                                    <div className="postbox-details-meta d-flex align-items-center">
                                                        <div className="postbox-author-box d-flex align-items-center ">
                                                            <div className="postbox-author-info">
                                                                <h4 className="postbox-author-name">{post.author}</h4>
                                                            </div>
                                                        </div>
                                                        <div className="postbox-meta">
                                                            <i><ClockIcon /></i>{" "}
                                                            <span>{formattedDate}</span>
                                                        </div>
                                                        <div className="postbox-meta">
                                                            <i><CommentIcon /></i>
                                                            <span>0 comentarios</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>

                                            {post.featuredImage && (
                                                <div className="postbox-details-thumb mb-45">
                                                    <Image
                                                        src={post.featuredImage}
                                                        alt={post.title}
                                                        width={1200}
                                                        height={600}
                                                        style={{ width: "100%", height: "auto" }}
                                                        className="w-100"
                                                    />
                                                </div>
                                            )}

                                            <div className="postbox-details-text mb-45">
                                                <ReactMarkdown
                                                    components={{
                                                        p: ({ node, ...props }) => {
                                                            const { ordered, ...rest } = props as any;
                                                            return <p className="mb-25" {...rest} />;
                                                        },
                                                        h2: ({ node, ...props }) => {
                                                            const { ordered, ...rest } = props as any;
                                                            return <h4 className="postbox-title fs-34 mt-40 mb-20" {...rest} />;
                                                        },
                                                        h3: ({ node, ...props }) => {
                                                            const { ordered, ...rest } = props as any;
                                                            return <h5 className="postbox-title fs-28 mt-30 mb-15" {...rest} />;
                                                        },
                                                        ul: ({ node, ...props }) => {
                                                            const { ordered, ...rest } = props as any;
                                                            return <div className="postbox-details-list"><ul {...rest} /></div>;
                                                        },
                                                        ol: ({ node, ...props }) => {
                                                            const { ordered, ...rest } = props as any;
                                                            return <div className="postbox-details-list"><ol {...rest} /></div>;
                                                        },
                                                        li: ({ node, ...props }) => {
                                                            const { ordered, ...rest } = props as any;
                                                            return <li className="mb-10" {...rest} />;
                                                        },
                                                        code: ({ node, inline, ...props }) => {
                                                            const { ordered, ...rest } = props as any;
                                                            if (inline) {
                                                                return <span {...rest} />;
                                                            }
                                                            return (
                                                                <div className="postbox-details-code mb-40">
                                                                    <pre><code {...rest} /></pre>
                                                                </div>
                                                            );
                                                        },
                                                        blockquote: ({ node, ...props }) => {
                                                            const { ordered, ...rest } = props as any;
                                                            return (
                                                                <div className="postbox-details-quote-box mb-45">
                                                                    <blockquote>
                                                                        <div className="postbox-details-quote-box d-flex align-items-start">
                                                                            <i><QuoteIconSix /></i>
                                                                            <div className="postbox-details-quote" {...rest} />
                                                                        </div>
                                                                    </blockquote>
                                                                </div>
                                                            );
                                                        },
                                                    }}
                                                >
                                                    {post.body}
                                                </ReactMarkdown>
                                            </div>

                                            <div className="postbox-details-tag-wrap d-flex justify-content-between align-items-center">
                                                <div className="postbox-details-tag d-flex align-items-center mb-0">
                                                    <span>Etiquetas:</span>
                                                    <div className="tagcloud">
                                                        {post.tags?.map((tag, index) => (
                                                            <Link key={index} href={`/blog?tag=${tag}`}>{tag}</Link>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="postbox-details-social">
                                                    <Link href="#">
                                                        <span><FacebookTwo /></span>
                                                    </Link>{" "}
                                                    <Link href="#">
                                                        <span><TwitterSvg /></span>
                                                    </Link>{" "}
                                                    <Link href="#">
                                                        <span><DribbleTwo /></span>
                                                    </Link>{" "}
                                                    <Link href="#">
                                                        <span><InstagramSvg /></span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                                        <div className="sidebar-wrapper">
                                            <div className="sidebar-widget mb-30">
                                                <div className="sidebar-search">
                                                    <BlogSidebarSearchInput />
                                                </div>
                                            </div>
                                            <div className="sidebar-widget mb-55">
                                                <BlogSidebarAuthorInfo />
                                            </div>
                                            <div className="sidebar-widget mb-55">
                                                <h3 className="sidebar-widget-title">Categorías</h3>
                                                <BlogSidebarCategory />
                                            </div>
                                            <div className="sidebar-widget mb-55">
                                                <h3 className="sidebar-widget-title">Posts Recientes</h3>
                                                <BlogSidebarPost />
                                            </div>
                                            <div className="sidebar-widget">
                                                <h3 className="sidebar-widget-title">Etiquetas</h3>
                                                <BlogSidebarTags />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container container-1750">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <PostboxDetailsThumb />
                                    </div>
                                </div>
                            </div>
                            <div className="container container-1330">
                                <div className="row">
                                    <div className="col-xl-8">
                                        <div className="postbox__comment pt-115 pb-50">
                                            <h3 className="postbox__comment-title">Comentarios (0)</h3>
                                            <PostboxComment />
                                        </div>
                                        <div className="postbox-details-form">
                                            <h3 className="postbox-details-form-title">Deja un Comentario</h3>
                                            <p>Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con *</p>
                                            <div className="postbox-details-form-wrapper">
                                                <PostboxDetailsForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    <CreativeStudioFooter buttonCls="blog-footer-style" />
                </div>
            </div>
        </>
    );
};

export default BlogDetailsPageContent;
