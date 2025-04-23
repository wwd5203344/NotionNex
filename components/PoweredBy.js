import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      {/* https://www.aze66.top/ */}
      <a
        href='https://yourwebsite.com' 
        className='underline justify-start'>
        {/* 阿泽 */}
        Your Name Or Website {siteConfig('VERSION')} 
      </a>
      .
    </div>
  )
}
