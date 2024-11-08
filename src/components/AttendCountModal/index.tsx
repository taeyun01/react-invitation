import { useEffect, useRef } from 'react'
import { useModalContext } from '../../contexts/ModalContext'
import { Wedding } from '../../models/wedding'

// 단순히 모달을 띄어주는 역할만 해서 UI를 그리진 않음
const AttendCountModal = ({ wedding }: { wedding: Wedding }) => {
  const { open, close } = useModalContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const haveSeenModal = localStorage.getItem('@haveSeenModal')

  useEffect(() => {
    if (haveSeenModal) return
    open({
      title: `현재 참석자: ${wedding.attendCount} 명`,
      body: <AttendCountInput inputRef={inputRef} />,
      onLeftButtonClick: () => {
        localStorage.setItem('@haveSeenModal', 'true')
        close()
      },
      onRightButtonClick: async () => {
        // console.log(inputRef.current?.value)
        try {
          await fetch(`http://localhost:8888/wedding`, {
            method: 'PUT',
            body: JSON.stringify({
              ...wedding,
              attendCount:
                wedding.attendCount + Number(inputRef.current?.value),
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          localStorage.setItem('@haveSeenModal', 'true')
          close()
        } catch (error) {
          console.error(error)
        }
      },
    })
  }, []) // eslint-disable-line
  return null
}

const AttendCountInput = ({
  inputRef,
}: {
  inputRef: React.RefObject<HTMLInputElement>
}) => {
  return (
    <input
      ref={inputRef}
      type="number"
      placeholder="참석 가능 인원을 입력해주세요"
      style={{
        width: '100%',
        border: 'none',
        borderBottom: '1px solid #000',
        paddingBottom: '5px',
        paddingLeft: '4px',
      }}
    />
  )
}

export default AttendCountModal
