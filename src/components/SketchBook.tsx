import styled from '@emotion/styled'

function SketchBook() {
  return <SketchBookContainer></SketchBookContainer>
}

export default SketchBook

const SketchBookContainer = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 90%;
  height: 90%;
  transform: translate(-50%, -50%);
  border: 5px solid #262C29;
  box-shadow: 3px 3px 10px #262C29;
  border-radius: 10px;
`
