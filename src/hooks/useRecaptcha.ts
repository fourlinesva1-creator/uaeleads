import { useCallback } from 'react';

declare global {
    interface Window {
        grecaptcha: {
            ready: (cb: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        };
    }
}

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;

export function useRecaptcha() {
    const executeRecaptcha = useCallback(async (action: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            if (typeof window === 'undefined' || !window.grecaptcha) {
                reject(new Error('reCAPTCHA not loaded'));
                return;
            }
            window.grecaptcha.ready(async () => {
                try {
                    const token = await window.grecaptcha.execute(SITE_KEY, { action });
                    resolve(token);
                } catch (err) {
                    reject(err);
                }
            });
        });
    }, []);

    return { executeRecaptcha };
}
