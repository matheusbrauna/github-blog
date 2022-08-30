import { BeatLoader } from 'react-spinners'

export function Spinner() {
  return (
    <BeatLoader
      size={30}
      color="#3294F8"
      loading
      style={{
        position: 'fixed',
        zIndex: '100',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}
