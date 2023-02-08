import VideoModal from "../common/modal/video-modal";


const VideoBox = () => {
  return (
    <>
      <div className="video__area-df" style={{background:'url(assets/img/bg/bg-video.webp)',
      backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
        <div className="container">
          <div className="video__content text-center">
            <div className="video__button mb-60">
              <button data-bs-toggle="modal" data-bs-target="#videoModal" href="https://www.youtube.com/watch?v=9ykYqS63Go0">
                <i className="fas fa-play"></i>
              </button>
            </div>
            <h5 className="video__title">AWESOME VIDEO LIGHTBOX </h5>
            <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. </p>
          </div>
        </div>
      </div>

      <VideoModal/>
    </>
  );
};

export default VideoBox;