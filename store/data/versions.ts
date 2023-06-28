// IFeat must be string or {title:string, subFeatures?:string[]}
type IFeat = string | { title: string, subFeatures: string[] };
interface IVersion {
    versionNumber: number;
    customTitle?: string;
    features: IFeat[] | string[];
    description?: string;
}
export const versions: IVersion[] = [
    {
        versionNumber: 8.2,
        features: [
            'AVS 更名為 AVSCMS',
            '播放器源已加密並受到保護，leecher 不再能夠直接從查看源查看視頻文件。',
            '在siteadmin上添加了更新功能，從8.2及以上版本開始，用戶可以直接從siteadmin更新腳本。',
            '修復了 8.1 版本中的小錯誤'
        ]
    },
    {
        versionNumber: 8.1,
        features: [
            'VAST / VPAID Video Ads in AVS HTML5 Player'
        ]
    },
    {
        versionNumber: 8.0,
        features: [
            '模板在 Bootstrap 4 上完全重新設計和重寫',
            '可配置的視頻轉換隊列，用於優化 CPU 資源',
            '視頻縮略圖',
            '分塊上傳（繞過 Cloudflare 100MB 上傳限制）',
            '標籤部分',
            '全新的嵌套評論系統，具有回复、點贊和排序選項',
            '搜索“鍵入時”建議',
            '視頻採集器“刪除簡介”選項',
            '重新設計的訂閱源',
            '可配置的縮略圖列數'
        ]
    },
    {
        versionNumber: 7.0,
        features: [
            '完全重新編碼以兼容 PHP 7',
            'smarty引擎升級至最新版本（3.0）',
            'mySQLi 擴展（MySQL 改進）已實現'
        ]
    },
    {
        versionNumber: 6.0,
        features: [
            {
                title: '全新的視頻轉碼（轉換）引擎:',
                subFeatures: [
                    '僅基於FFmpeg，消除了大量其他需求（mencoder、flvtool2、mp4box、mediainfo、neroacencoder 等）',
                    '與舊引擎相比，視頻轉碼速度更快，同時提供更高的視頻質量',
                    '創建無限數量的分辨率配置文件的選項，視頻將轉換為該配置文件，每個配置文件都可配置多個選項',
                    '預加載標準分辨率配置文件 240p、360p、480p、720p、1080p。 這些可以編輯、停用、刪除，同時可以添加其他幾個分辨率配置文件，包括 4K',
                    '每個分辨率配置文件的可配置質量和壓縮',
                    '該腳本可以在任何Linux共享主機上運行，包括不支持ffmpeg的主機（視頻網站腳本的突破性性能，只有AVS才能實現）'
                ]
            },
            'html5視頻播放器更新支持無限分辨率切換選項'
        ]
    },
    {
        versionNumber: 5.0,
        features: [
            {
                title: '全新的 HTML 5 視頻播放器，取代了過時的基於 Flash 的播放器，添加了新功能，例如：',
                subFeatures: [
                    '在任何設備上播放視頻，包括不支持 Flash 的設備（手機、平板電腦）',
                    '無需 Lighttpd 即可跳過整個視頻',
                    '時間線預覽',
                    '疊加橫幅廣告'
                ]
            },
            'csv導入器插件（付費插件）',
            '自動質量嵌入器（付費插件）',
            '幾個錯誤修正'
        ]
    },
    {
        versionNumber: 4.0,
        features: [
            {
                title: '完全重新設計的管理面板，包含許多新功能：',
                subFeatures: [
                    '響應式模板，在任何智能手機/平板電腦上完美呈現',
                    '基於ajax的改進的用戶界面',
                    '包含統計數據和圖表、服務器信息、新聞等的主儀表板',
                    '上傳網站和玩家標誌',
                    '插入谷歌分析',
                    '通過自動修復進行系統檢查（路徑、權限）。 路徑自動檢測。',
                    '先進的縮略圖系統（刪除黑條，保持寬高比）',
                    '通知系統可以更輕鬆地管理標記/新內容以供批准',
                    '內容的多選選項（批准、刪除等）',
                    '視頻採集器實時進度條',
                    '新的所見即所得靜態頁面編輯器'
                ]
            }
        ]
    },
    {
        versionNumber: 3.0,
        features: [
            "完全重新設計/重寫的模板，提供多種配色方案",
            "響應式模板，基於 Bootstrap，適用於任何設備屏幕",
            "高級會員體系，不同級別的用戶有限制和權限",
            "手機和平板電腦視頻/照片上傳，包括直接從相機上傳",
            "重新設計的視頻播放器",
            "html5視頻播放器後備",
            "響應式視頻播放器，在視頻頁面、博客頁面等（Flash 和 HTML5 播放器）",
            "新的投票系統，基於喜歡/不喜歡",
            "響應式廣告支持（Google AdSense 響應式廣告等）",
            "響應式嵌入視頻",
            "一些界面/功能的調整和改進"
        ]
    },
    {
        versionNumber: 2.2,
        description: "由於需求量很大，我們創建了 AVS 的並行版本，完全清除了與成人相關的腳本內容。 現在，您的非成人視頻網站可以充分受益於 AVS 的廣泛功能和可靠性。",
        features: [
            "完全清理了與成人相關的文本、標題、選項、用戶個人資料字段等",
            " 新的用戶個人資料字段",
            " 添加視頻描述字段",
            "新的視頻播放器皮膚",
            "可用的 Youtube (HD) 視頻採集器和質量嵌入器（單獨出售，包含在視頻採集器插件和質量嵌入器插件包中）",
            " 可用的 Vimeo (HD) 和 DailyMotion (HD) 視頻採集器（單獨出售，包含在視頻採集器插件包中）"
        ]
    },
    {
        versionNumber: 2.0,
        features: [
            "全新視頻轉換引擎，從頭開始重寫",
            "使用 H.264 編解碼器進行高清視頻轉換",
            "使用 H.264 編解碼器的移動視頻轉換",
            "能夠單獨轉換標清 (FLV) 和高清 (H.264 MP4) 兩個版本的視頻，並在視頻播放器的模式之間切換",
            "先進的視頻格式檢測，避免無用的重新轉換，以限制資源使用",
            "動態大小的視頻播放器",
            "多項界面設計改進",
            "新模板",
            "重新設計的管理面板界面",
            "多項管理面板改進和配置選項"
        ]
    },
    {
        versionNumber: 1.3,
        features: [
            "新的語言文件（捷克語、丹麥語、日語、土耳其語）",
            "新模板（綠色/黑色）",
            "視頻站點地圖生成器"
        ]
    },
    {
        versionNumber: 1.2,
        features: [
            "lighttpd 流媒體支持（即使視頻未完全（預）加載，您也可以跳到視頻中的任何位置）",
            "自動嵌入來自 7 個頂級成人視頻網站的視頻（付費插件）",
            "用戶可以刪除整個相冊",
            "多服務器支持，可通過管理面板輕鬆配置（付費插件）",
            "使用語言文件的多語言系統",
            "用戶可以編輯視頻詳細信息",
            "多模板支持",
            "新的 CSS 模板",
            "雲熱門標籤",
            "iPhone/手機版，帶mp4 h.264轉換，網絡應用程序模式，完全ajaxified（付費插件）",
        ]
    }
];

interface ISec {
    title: string;
    items: string[];
}

export interface ICoreFeat {
    title: string;
    sections?: ISec[];
    items?: string[];
}

export const coreFeatures: ICoreFeat[] = [
    {
        title: 'AVS 更名為 AVSCMS',
        sections: [
            {
                title: "Frontend",
                items: [
                    '用戶可以上傳視頻（超過20種格式可用）',
                    '視頻上傳的上傳進度條',
                    '用戶可以觀看視頻直播（直播）',
                    '用戶可以對視頻發表評論（垃圾郵件防護）（通過ajax）（評論ajax分頁）',
                    '用戶可以標記視頻（通過ajax）',
                    '用戶可以對視頻進行評分（通過ajax）',
                    '用戶可以嵌入視頻',
                    '用戶可以共享視頻（通過ajax）',
                    '用戶可以查看相關視頻（通過ajax）',
                    '視頻頁面按時間線、類別和類型（私人/公共）排序'
                ]
            },
            {
                title: 'Backend',
                items: [
                    '從 8 個主要色情網站抓取視頻',
                    '管理視頻（刪除/批准/暫停/功能/取消功能/編輯）',
                    '管理視頻評論',
                    '管理垃圾郵件和標記的視頻'
                ]
            }
        ]
    },
    {
        title: '照片畫廊',
        sections: [
            {
                title: 'Frontend',
                items: [
                    "用戶可以上傳照片並整理相冊中的照片（jpg、gif 和 png）",
                    "用戶可以對照片發表評論（垃圾郵件防護）（通過ajax）（評論ajax分頁）",
                    "用戶可以標記照片（通過ajax）",
                    "用戶可以對照片進行評分（通過ajax）",
                    "用戶可以共享照片（通過ajax）",
                    "用戶可以查看相冊幻燈片",
                ]
            },
            {
                title: "後端（管理面板）",
                items: [
                    "管理照片和相冊（刪除/批准/暫停）",
                    "管理照片評論",
                    "管理垃圾郵件和標記的照片",
                ]
            }
        ]
    },
    {
        title: 'Games',
        sections: [
            {
                title: "Frontend",
                items: [
                    "用戶可以上傳色情遊戲（swf擴展名）",
                    "用戶可以玩色情遊戲",
                    "用戶可以評論遊戲",
                    "用戶可以對遊戲進行評分",
                    "用戶可以分享遊戲",
                ]
            },
            {
                title: "Backend",
                items: [
                    "管理遊戲（刪除/批准/暫停/編輯）",
                    "管理遊戲評論",
                    "管理垃圾郵件和標記的遊戲",
                ]
            }
        ]
    },
    {
        title: 'Blogs',
        sections: [
            {
                title: "Frontend",
                items: [
                    "用戶可以創建博客",
                    "用戶可以在他們的博客上嵌入照片和視頻（通過 ajax）”",
                    "用戶可以評論博客（通過ajax）",
                ]
            },
            {
                title: "Backend (Administration Panel)",
                items: [
                    "管理博客（刪除/批准/暫停/編輯）",
                    "管理博客評論"
                ]
            }
        ]
    },
    {
        title: 'Users',
        sections: [
            {
                title: "Frontend",
                items: [
                    "社區頁面",
                    "用戶有自己的個人資料頁面",
                    "用戶可以配置在其個人資料頁面上列出的內容",
                    "用戶可以配置接收哪些電子郵件",
                    "用戶可以邀請朋友（通過ajax）",
                    "用戶可以對其他用戶的個人資料發表評論（通過ajax）",
                    "用戶可以向其他用戶發送消息",
                    "用戶可以舉報其他用戶（通過ajax）",
                    "用戶可以訂閱其他用戶",
                    "用戶可以編輯他們的個人資料",
                    "用戶可以上傳和裁剪頭像",
                    "用戶可以輕鬆批准/拒絕好友",
                    "用戶可以監視其他用戶的操作（當他們上傳視頻/照片/遊戲/博客時）",
                    "用戶牆",
                    "用戶按性別排序",
                ]
            },
            {
                title: "後台（管理面板）",
                items: [
                    "管理用戶（添加/刪除/暫停/編輯）",
                    "電子郵件用戶（或群發電子郵件）"
                ]
            }
        ]
    },
    {
        title: 'Search',
        items: [
            "管理用戶（添加/刪除/暫停/編輯）",
            "電子郵件用戶（或群發電子郵件）"
        ]
    },
    {
        title: 'Admin Blog / Announcements',
        items: [

            "管理員可以在網站上創建博客/新聞/公告部分",
            "用戶可以對管理員博客/新聞/公告發表評論",
            "管理員可以通過支持/反饋頁面接收訪客發送的電子郵件"
        ]
    },
    {
        title: 'Categories',
        sections: [
            {
                title: "Frontend",
                items: [
                    "類別頁",
                    "對於每個類別，可以顯示類別封面圖像或其最新視頻（ajax）"
                ]
            },
            {
                title: "Backend (Administration Panel)",
                items: [
                    "管理類別（添加/刪除/編輯）"
                ]
            }
        ]
    },
    {
        title: 'Ads',
        items: [
            "整個網站有 20 多個廣告位",
            "輪播廣告（廣告組）",
            "視頻播放器中的前置/後置視頻/圖片/Flash 廣告",
            "播放期間視頻播放器中的文字廣告（底部）"
        ]
    },
    {
        title: '管理面板',
        items: [
            "控製網站各個方面的能力",
            "配置郵件設置（php 郵件、sendmail 或 smtp 服務器）",
            "配置視頻轉換設置（標清、高清和移動）",
            "編輯靜態頁面（通過ajax預覽）",
            "編輯電子郵件模板",
            "配置視頻播放器",
            "限制來賓訪問者的帶寬/訪問",
            "系統檢查（檢查文件夾權限和所需的編解碼器）",
            "媒體設置（配置允許的最大上傳大小和允許的視頻格式）",
            "啟用/禁用照片庫、遊戲和博客模塊",
            "啟用/禁用電子郵件驗證",
            "啟用/禁用視頻、遊戲、照片、用戶評論",
            "按 ip 或按用戶選擇評級",
            "選擇會話驅動程序（數據庫/文件）",
        ]
    },
    {
        title: 'Under-the-Hood',
        items: [
            "優化的數據庫結構和超快網站的查詢",
            "乾淨的代碼（可以輕鬆定制）",
            "安全代碼（輸入過濾）",
            "搜索引擎友好的 URL (SEO)",
            "視頻轉換/編碼在後台進程中完成",
            "智能模板引擎，可從管理面板輕鬆切換模板",
            "帶有語言文件的多語言系統",
            "垃圾郵件防護（recaptcha / keycaptcha / areyou human 集成、評論防洪保護）"
        ]
    }


];
