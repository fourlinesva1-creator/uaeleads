'use client';

import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon,
} from 'react-share';

interface ShareButtonsProps {
    url: string;
    title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
    return (
        <div className="flex gap-4">
            <FacebookShareButton url={url} className="hover:opacity-80 transition-opacity">
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TwitterShareButton url={url} title={title} className="hover:opacity-80 transition-opacity">
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title={title} className="hover:opacity-80 transition-opacity">
                <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title={title} separator=":: " className="hover:opacity-80 transition-opacity">
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
        </div>
    );
}
