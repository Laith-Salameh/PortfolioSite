import React, { FunctionComponent, useRef } from 'react'
import PhotoAlbum, { Photo } from 'react-photo-album'
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'
import styles from '../../../styles/Portfolio/photo-album-lightbox.module.scss'
import useOnScreen from '../../../customHooks/useOnScreen';


const PhotoAlbumLightbox: FunctionComponent<{photos: Photo[]}> = ({photos}) => {
  const [index, setIndex] = React.useState(-1);
  const Wrapperref = useRef<HTMLDivElement>(null)
  const isVisibleWrapper = useOnScreen(Wrapperref)? " appear" : " disappear"
  return (
    <div className={styles.wrapper + isVisibleWrapper} ref={Wrapperref}>
      <PhotoAlbum
        photos={photos.filter(image => image.src.endsWith('.jpg') || image.src.endsWith('.png'))}
        layout="rows"
        breakpoints={[300, 400, 600, 900, 1200]}
        spacing={12}
        onClick={({ index }) => setIndex(index)}
      />
      <div className={styles.videos}>
      {
        photos.filter(image => image.src.endsWith('mp4')).map((video,i) => (
          <video key={i} controls={true} src={video.src}/>
        ))
      }
      </div>
      <Lightbox
        slides={photos.filter(image => image.src.endsWith('.jpg') || image.src.endsWith('.png'))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default PhotoAlbumLightbox