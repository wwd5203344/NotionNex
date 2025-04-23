import { siteConfig } from '@/lib'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.class || ''}`}>
      <span class='mr-1'>Powered by</span>
      <a
        href='https://github.com'
        className='underline justify-start'>
        NotionNext {siteConfig('111')}
      </a>
      .
    </div>
  )
}
