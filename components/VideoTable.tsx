import React from 'react'
import { videos } from '../public/videos'

const VideoTable = () => {
    return (
        <div>
            {videos.map((video) => {
                return (
                    <div className="video-card-container">
                        <div className="video-details">
                            <h4>{video.title}</h4>
                        </div>
                        <div className="video-preview">
                            <img className="preview-image" src={video.thumbnail_large} alt={video.title}/>
                        </div>
                    </div>
                )
            })}
            <style jsx>{`
                .video-card-container {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    max-height: 300px;
                    padding: 40px 0px;
                }
                .preview-image {
                    width: 400px;
                    height: auto;
                }
                `}</style>
        </div>
    )
}

export default VideoTable
