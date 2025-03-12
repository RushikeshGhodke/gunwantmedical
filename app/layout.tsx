import type { Metadata } from "next";

import "./globals.css";
import localFont from "next/font/local";
import { Instrument_Sans } from 'next/font/google';

const instrumentSans = Instrument_Sans({
    subsets: ['latin'], // Specify the required subsets
    weight: ['400', '500', '600', '700'], // Specify the desired weights
    display: 'swap' // Ensure smooth font loading
});


const stolzl = localFont({
    src: [
        {
            path: '/fonts/stolzl_thin.otf',  // Thin weight
            weight: '100',
            style: 'normal',
        },
        {
            path: '/fonts/stolzl_light.otf', // Light weight
            weight: '300',
            style: 'normal',
        },
        {
            path: '/fonts/stolzl_regular.otf', // Regular weight
            weight: '400',
            style: 'normal',
        },
        {
            path: '/fonts/stolzl_medium.otf', // Medium weight
            weight: '500',
            style: 'normal',
        },
        {
            path: '/fonts/stolzl_book.otf', // Book weight
            weight: '600',
            style: 'normal',
        },
        {
            path: '/fonts/stolzl_bold.otf', // Bold weight
            weight: '700',
            style: 'normal',
        },
    ]
});

export const metadata: Metadata = {
    title: "Gunwant Medicals - Your Trusted Pharmacy in Nashik",
    description: "Gunwant Medicals is your one-stop medicine shop in Nashik, offering fast medicine delivery, expert healthcare advice, and digital prescriptions. Rated 4.8/5 on Google!",
    keywords: "Gunwant Medicals, pharmacy Nashik, online medicine delivery Nashik, healthcare, digital prescriptions, trusted pharmacy, Instagram",
    authors: [
        { name: "Gunwant Medicals", url: "https://gunwantmedicals.com" },
        { name: "Gunwant Medicals Instagram", url: "https://www.instagram.com/gunwantmedicals/" }
    ],

    openGraph: {
        type: "website",
        url: "https://gunwantmedicals.com",
        title: "Gunwant Medicals - Your Trusted Pharmacy in Nashik",
        description: "Fast medicine delivery, expert healthcare advice, and digital prescriptions in Nashik. Rated 4.8/5 on Google!",
        images: [{
            url: "https://gunwantmedicals.com/logo.png",
            width: 1200,
            height: 630,
            alt: "Gunwant Medicals - Your Trusted Pharmacy"
        }],
        siteName: "Gunwant Medicals",
    },

    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
        other: [
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '32x32',
                url: '/favicon.png',
            },
            {
                rel: 'icon',
                type: 'image/png',
                sizes: '16x16',
                url: '/favicon.png',
            }
        ],
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <meta name="google-site-verification" content="FoQT88B4tCW97ldyylIlcNBdO9flXx2ZbfkWCjEYHpA" />
            <body className={`${stolzl.className} ${instrumentSans.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
