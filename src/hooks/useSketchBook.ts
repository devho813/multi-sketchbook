import { RefObject, useCallback, useState } from 'react'

interface Coordinate {
  x: number
  y: number
}

function useSketchBook(canvasRef: RefObject<HTMLCanvasElement>) {
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(undefined)
  const [isPainting, setIsPainting] = useState(false)

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) {
      return
    }

    const canvas: HTMLCanvasElement = canvasRef.current

    return {
      x: event.pageX - canvas.offsetLeft,
      y: event.pageY - canvas.offsetTop,
    }
  }

  // canvas에 선을 긋는 함수
  const drawLine = (originalMousePosition: Coordinate, newMousePosition: Coordinate) => {
    if (!canvasRef.current) {
      return
    }

    const canvas: HTMLCanvasElement = canvasRef.current
    const context = canvas.getContext('2d')

    if (context) {
      context.strokeStyle = 'black' // 선 색깔
      context.lineJoin = 'bevel' // 선 가장자리
      context.lineWidth = 0.1 // 선 굵기

      context.beginPath()
      context.moveTo(originalMousePosition.x - 5, originalMousePosition.y - 5)
      context.lineTo(newMousePosition.x - 5, newMousePosition.y - 5)
      context.closePath()

      context.stroke()
    }
  }

  const startPaint = useCallback((event: MouseEvent) => {
    const coordinates = getCoordinates(event)

    if (coordinates) {
      setIsPainting(true)
      setMousePosition(coordinates)
    }
  }, [])

  const paint = useCallback(
    (event: MouseEvent) => {
      event.preventDefault() // drag 방지
      event.stopPropagation() // drag 방지

      if (isPainting) {
        const newMousePosition = getCoordinates(event)
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition)
          setMousePosition(newMousePosition)
        }
      }
    },
    [isPainting, mousePosition]
  )

  const exitPaint = useCallback(() => {
    setIsPainting(false)
  }, [])

  return { startPaint, paint, exitPaint }
}

export default useSketchBook
