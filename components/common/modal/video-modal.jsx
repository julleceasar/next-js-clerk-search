import React from 'react';

const VideoModal = ({videoId = "oMhby921Ux4"}) => {
  return (
    <>
      <div className="modal fade video_modal" id="videoModal" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
            <div className="video-modal-wrapper">
              <p>
                <iframe src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;