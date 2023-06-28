import { ILink } from "@/components/common/navbar";

const links: ILink[] = [
    {
        label: "家",
        href: "/",
    },
    {
        label: "產品",
        hasDropdown: true,
        subLinks: [
            { label: "下載", href: "/product/download" },
            { label: "強調", href: "/product/highlights" },
            { label: "特徵", href: "/product/features" },
            { label: "服務器要求", href: "/product/server-requirements" },
            { label: "現場演示", href: "/product/live-demo" },
            { label: "定價和訂購", href: "/product/pricing-and-ordering" },
            { label: "模板", href: "/product/templates" },
            {
                label: "插件", href: "/product/plugins", hasDropdown: true, subLinks: [
                    { label: '視頻採集器', href: '/plugins/video-grabber' },
                    { label: '海量視頻嵌入器', href: '/plugins/mass-video-embedder' },
                    { label: '多服務器系統', href: '/plugins/multi-server-system' },
                    { label: "lighttpd 流式傳輸", href: '/plugins/lighttpd-streaming' },
                    { label: 'CSV 導入器', href: '/plugins/csv-importer' },
                    { label: "自動包埋機", href: '/plugins/automatic-video-embedder' }
                ]
            },
        ]
    },
    {
        label: "服務",
        hasDropdown: true,
        subLinks: [
            { label: "腳本安裝", href: "/services/script-installation", description: '我們為您提供專業的腳本安裝服務' },
            { label: "服務器設置", href: "/services/server-setup", description: '為您安裝並確保一切配置正確' },
            { label: "Lighttpd 設置", href: "/services/lighttpd-setup", description: '啟用 Lighttpd 流式傳輸' },
            { label: "免費品牌", href: "/services/branding-free", description: '只需 49 美元，您就可以刪除任何...' },
            { label: "託管", href: "/services/hosting", description: '提供價格實惠的託管服務器' },
            { label: "服務器", href: "/services/servers", description: '提供專用服務器供數據中心使用' },
            { label: "定制工作", href: "/services/custom-work", description: '提供各種模板設計' },
            { label: '標誌設計', href: '/support/contact', description: '獲得標誌設計服務' }
        ]
    },
    {
        label: "支持",
        hasDropdown: true,
        subLinks: [
            { label: "聯繫表格和信息", href: "/support/contact", description: '需要幫忙？ 聯繫我們' },
            { label: "服務台", href: "https://helpdesk.adultvideoscript.com/", description: '從我們的支持團隊獲得快速回复' },
            { label: "客戶區", href: "https://my.adultvideoscript.com/", description: '下載腳本分發' },
            { label: "社區論壇", href: "https://github.com/avscms/avscms/issues", description: '獲得建議' },
            { label: "錯誤跟踪器", href: "https://github.com/avscms/avscms/issues", description: '報告您發現的錯誤' },
            { label: "通過您的網站獲利", href: "/support/monetize-your-site", description: '盈利指南' },
            { label: "聯盟計劃", href: "/support/affiliate-program", description: '提供有競爭力的機會' },
            { label: "隱私政策", href: "/support/privacy-policy", description: '購買、下載和安裝...' },
        ]
    },
    {
        label: "命令",
        href: "/product/pricing-and-ordering",
    }
]

export default links;