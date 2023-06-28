import React from 'react'
import DesktopView from './desktopView';
import MobileView from './mobileView';

interface IUser {
    name: string;
    role: string;
    profileImage: string;
}

export const users: IUser[] = [
    {
        name: "Mike Felson",
        role: " 站長",
        profileImage: '1.png'
    },
    {
        name: "Jason Cook",
        role: ' 站長',
        profileImage: '2.png'
    },
    {
        name: "Antony Tailor",
        role: 'Adult 站長',
        profileImage: '3.png'
    },
    {
        name: "Manuel Pellegrini",
        role: '廣告專家',
        profileImage: '4.png'
    }
]

export interface IReview {
    content: string;
    user: IUser;
}

export const reviewsData: IReview[] = [
    {
        content: "成人行業最好的管劇本。 時期。 它具有您需要的所有功能，包括高清支持和移動/平板電腦界面。 支持快速有效。 他們說服我購買更多許可證以及他們的一些其他腳本。",
        user: users[0]
    },
    {
        content: "起初我對此表示懷疑，但這個管腳本超出了我的預期。 高清支持和移動/平板電腦界面使其非常用戶友好。 客戶支持團隊迅速並幫助解決我遇到的任何問題。 我強烈推薦這個腳本給成人行業的任何人",
        user: users[1]
    },
    {
        content: "客戶支持團隊迅速並幫起初我, 但這個管腳本超 對此表示懷疑，出了我的預期。 高清支持和移動/平板電腦界的任何問題。 我強烈推薦這個腳本給成人行業的任何人",
        user: users[2]
    },
    {
        content: "起初我對此表示懷疑，但這個管腳本超出了我的預期。 高清支持和移動/平板電腦界面使其非常用戶友好。 客戶支持團隊迅速並幫助解決我遇到的任何問題。 我強烈推薦這個腳本給成人行業的任何人",
        user: users[3]
    }
];

const Reviews = () => {
    const [activeReviewIndex, setActiveReviewIndex] = React.useState<number>(0);
    return (
        <DesktopView reviewsCount={reviewsData.length} activeReviewIndex={activeReviewIndex} setActiveReviewIndex={setActiveReviewIndex} />
    )
}

export default Reviews