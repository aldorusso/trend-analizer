import homeData from '@/../content/pages/corporate-home.json';
import VideoPlayer from '../shared/VideoPlayer/VideoPlayer';
import Image from 'next/image';
import React from 'react';

const HomeMainVideo = () => {
  const { videoGallery } = homeData;

  const imageClasses = [
    "d-none d-xl-block",
    "d-none d-xl-block mb-25",
    "d-none d-xl-block mb-25",
    "d-none d-xl-block",
    "d-none d-xl-block"
  ];

  return (
    <section className="tp-video-area black-bg mt-120 fix">
      <div className="container-fluid p-0">
        <div className="tp-video-thumb-wrap">
          {/* First image (hidden on mobile) */}
          <div className={`tp-video-thumb ${imageClasses[0]}`}>
            <Image style={{width:"100%", height:"auto"}} src={videoGallery.images[0].image} alt={videoGallery.images[0].alt} width={634} height={440} />
          </div>

          {/* Main video player (always visible) */}
          <div className="tp-video-thumb mb-25">
            <VideoPlayer videoUrl={videoGallery.videoUrl} />
          </div>

          {/* Remaining images */}
          {videoGallery.images.slice(1).map((img, index) => (
            <div key={`video-img-${index}`} className={`tp-video-thumb ${imageClasses[index + 1]}`}>
              <Image style={{ width: "100%", height: "auto" }} src={img.image} alt={img.alt} width={1252} height={880} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMainVideo;