import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'
import Section from '../shared/Section'
import ImageViewer from '../imageViewer'
import { useState } from 'react'

const cx = classNames.bind(styles)

const ImageGallery = ({ images }: { images: string[] }) => {
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const open = selectedIdx !== -1

  const handleSelectImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleCloseImageViewer = () => {
    setSelectedIdx(-1)
  }

  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((image, idx) => (
            <li
              key={`photo-${idx}`}
              className={cx('wrap-image')}
              onClick={() => handleSelectImage(idx)}
            >
              <img src={image} alt="사진첩 이미지" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleCloseImageViewer}
      />
    </>
  )
}

export default ImageGallery
