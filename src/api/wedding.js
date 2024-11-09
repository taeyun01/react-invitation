const getWedding = async () => {
  return await fetch(
    `${import.meta.env.VITE_APP_SERVER_URL ?? 'http://localhost:8888'}/wedding`,
  )
}
export default getWedding
