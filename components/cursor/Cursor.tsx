type Props = {
    color: string
    x: number
    y: number
    message: string
}

const Cursor = ({ color, x, y, message }: Props) => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 ">
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }}></div>
      <div className="text-xs">{message}</div>
    </div>
  )
}

export default Cursor
