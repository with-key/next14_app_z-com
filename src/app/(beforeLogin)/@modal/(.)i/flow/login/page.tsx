export default function Modal() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100dvw',
        height: '100dvh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50vw',
          height: '50vh',
          backgroundColor: 'white',
        }}
      >
        페러렐 모달
      </div>
    </div>
  );
}
