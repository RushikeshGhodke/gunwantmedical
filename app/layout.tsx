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

// @ts-ignore
export const metadata: Metadata = {
    title: "Gunwant Medicals - Your Trusted Pharmacy in Nashik",
    description: "Gunwant Medicals is your one-stop medicine shop in Nashik, offering fast medicine delivery, expert healthcare advice, and digital prescriptions. Rated 4.8/5 on Google!",
    keywords: "Gunwant Medicals, pharmacy Nashik, online medicine delivery Nashik, healthcare, digital prescriptions, trusted pharmacy",
    author: "Gunwant Medicals",
    ogTitle: "Gunwant Medicals - Your Trusted Pharmacy in Nashik",
    ogDescription: "Get your medicines delivered in just 30 minutes! Gunwant Medicals in Nashik provides expert healthcare solutions, digital prescriptions, and quality service.",
    ogUrl: "https://gunwantmedicals.com",
    twitterTitle: "Gunwant Medicals - Fast & Reliable Pharmacy in Nashik",
    twitterDescription: "Order medicines easily with Gunwant Medicals in Nashik. Fast delivery, expert guidance, and a 4.8/5 Google rating!",
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${stolzl.className} ${instrumentSans.className} antialiased`}>
        {children}
        </body>
        </html>
    );
}
