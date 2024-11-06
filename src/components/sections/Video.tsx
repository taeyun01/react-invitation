import classNames from 'classnames/bind'
import styles from './Video.module.scss'
import Section from '@shared/Section'

const cx = classNames.bind(styles)

const Video = () => {
  return (
    <Section className={cx('container')}>
      {/* video 태그에 src속성을 주어 파일을 지정해주면 muted속성이랑 source 태그는 안써도됨. */}
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        // controls={true} // 컨트롤 표시 후 autoplay를 끄면 poster 확인가능
        poster="/assets/poster.jpg" // 비디오가 로드되기 전에 보여줄 이미지
      >
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default Video
