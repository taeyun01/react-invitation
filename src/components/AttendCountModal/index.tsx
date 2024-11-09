import { useEffect, useRef } from 'react'
import { useModalContext } from '../../contexts/ModalContext'
import { Wedding } from '../../models/wedding'

// 단순히 모달을 띄어주는 역할만 해서 UI를 그리진 않음
const AttendCountModal = ({ wedding }: { wedding: Wedding }) => {
  const { open, close } = useModalContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const haveSeenModal = localStorage.getItem('@haveSeenModal')

  useEffect(() => {
    // console.log('무한 렌더링?')
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
          await fetch(
            `${
              import.meta.env.VITE_APP_SERVER_URL ?? 'http://localhost:8888'
            }/wedding`,
            {
              method: 'PUT',
              body: JSON.stringify({
                ...wedding,
                attendCount:
                  wedding.attendCount + Number(inputRef.current?.value),
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            },
          )
          localStorage.setItem('@haveSeenModal', 'true')
          close()
        } catch (error) {
          console.error(error)
        }
      },
    })
  }, [open, close, wedding, haveSeenModal])
  // open, close를 의존성 배열에 넣으면 무한 렌더링 발생 (그 이유는 모달 컴포넌트가 렌더링될 때마다 open, close가 호출되기 때문)
  // ModalContext가 새로 그려지면서 open, close 함수도 새롭게 만들어지고 useEffect는 open, close도 새로운 애라고 판단을 하면서 계속 리렌더링. 즉 무한루프가 발생
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
