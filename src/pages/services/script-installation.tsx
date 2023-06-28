import Caution from '@/components/common/caution'
import Head from 'next/head'
import React from 'react'

const ScriptInstallation = () => {
  return (
    <>
      <Head>
        <title>AVSCMS | 腳本安裝服務</title>
      </Head>
      <main className='w-full flex flex-col items-center gap-5 page'>
        <div className='space-y-2 text-center'>
          <h2 className='page-title'>腳本安裝服務</h2>
          <p className='lg:text-xl md:text-lg sm:text-base text-sm text-grayish-100 text-center font-normal max-w-4xl'>
            如果您在部署我們的腳本時遇到問題，我們可以專業地將其安裝在您的服務器上，固定費用為 29 美元。
          </p>
        </div>
        <Caution title='每 1、3、6、12、24 小時、每天或每周自動檢查和嵌入新視頻' >
          <ul className='list-disc lg:text-lg md:text-base sm:text-sm text-xs font-light text-grayish-100 space-y-2'>
            <li>
              請首先確保您的服務器或主機滿足我們腳本的服務器要求。
            </li>
            <li>
              我們不是如果您的服務器 1 託管不符合要求，則對與腳本功能相關的任何問題負責我們網站上提到的所有要求。
            </li>
            <li>我們需要 FTP/Cpanel 訪問您的網站。</li>
            <li>
              執行安裝服務後，我們總是進行測試並確保一切正常； 系統將要求您確認，一旦您確認，我們就可以宣布安裝服務已完成。
              如果由於您後來的修改或服務器配置更改而導致腳本停止工作，我們將不承擔任何責任，也不會提供免費支持。
            </li>
            <li>
              由於需求量很大，請允許最多 2（兩）個工作日來完成腳本安裝服務。
            </li>
            <li>腳本安裝服務不包括所需服務器模塊的安裝 </li>
        </ul>
      </Caution>
    </main >
    </>
  )
}

export default ScriptInstallation