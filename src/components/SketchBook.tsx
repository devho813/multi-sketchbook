import styled from '@emotion/styled'
import { memo, useEffect, useRef, useState } from 'react'
import useSketchBook from '../hooks/useSketchBook'

function SketchBook() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { startPaint, paint, exitPaint } = useSketchBook(canvasRef)
  const [[width, hegiht], setCanvasSize] = useState<[number, number]>([0, 0])

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }
    const canvas: HTMLCanvasElement = canvasRef.current

    canvas.addEventListener('mousedown', startPaint)
    canvas.addEventListener('mousemove', paint)
    canvas.addEventListener('mouseup', exitPaint)
    canvas.addEventListener('mouseleave', exitPaint)

    return () => {
      // Unmount시 이벤트 리스터 제거
      canvas.removeEventListener('mousedown', startPaint)
      canvas.removeEventListener('mousemove', paint)
      canvas.removeEventListener('mouseup', exitPaint)
      canvas.removeEventListener('mouseleave', exitPaint)
    }
  }, [startPaint, paint, exitPaint])

  useEffect(() => {
    const sizeRatio = 0.8
    setCanvasSize([window.innerWidth * sizeRatio, window.innerHeight * sizeRatio])
  }, [])

  return <Canvas ref={canvasRef} width={width} height={hegiht} />
}

export default memo(SketchBook)

const Canvas = styled.canvas`
  position: relative;
  top: 10%;
  display: block;
  margin: 0 auto;
  border: 5px solid #262c29;
  box-shadow: 3px 3px 10px #262c29;
  border-radius: 10px;
`
