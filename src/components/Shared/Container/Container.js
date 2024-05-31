import { Separator } from "../Separator"

const Container = ({children}) => {

  const styles = {
    height: '100%',
    width: '100%',
    margin: '0 auto',
    padding: '20px 0',
  }
  return (
    <>
        <Separator height={80} />
        <div style={styles}>
          {children}
        </div>
    </>
  )
}

export { Container }