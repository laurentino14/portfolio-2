import {cva} from 'class-variance-authority'

const styles = cva(
  'my-10 xl:my-20 border-none h-[1px] bg-gradient-to-r from-slate-800 rounded-full to-transparent',
)
export function Divider() {
  return <hr className={`${styles({})}`} />
}
