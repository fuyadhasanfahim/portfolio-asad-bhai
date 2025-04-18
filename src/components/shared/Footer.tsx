'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const menuItems = [
    {
        title: 'Services',
        links: [
            {
                text: 'eCommerce Photo Editing',
                url: '#e-commerce-photo-editing-service',
            },
            {
                text: 'Clipping Path Service',
                url: '#clipping-path-service',
            },
            {
                text: 'Background Editing',
                url: '#background-editing-service',
            },
            {
                text: 'Image Masking Service',
                url: '#image-masking-service',
            },
            {
                text: 'Shadow Creation Service',
                url: '#shadow-creation-service',
            },
            {
                text: 'Photo Retouching Service',
                url: '#photo-retouching-service',
            },
            {
                text: 'Ghost Mannequin Service',
                url: '#ghost-mannequin-service',
            },
            {
                text: 'Color Correction Service',
                url: '#color-correction-service',
            },
            {
                text: 'Raster To Vector',
                url: '#raster-to-vector',
            },
        ],
    },
    {
        title: 'Shortcuts',
        links: [
            { text: 'Home', url: '#home' },
            { text: 'About Me', url: '#about-me' },
            { text: 'Portfolio', url: '#portfolio' },
            { text: 'Pricing', url: '#pricing' },
            { text: 'Contact Me', url: '#contact-me' },
        ],
    },
];

const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/Asad4nur' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/asad4boss' },
    {
        name: 'Instagram',
        icon: Instagram,
        url: 'https://instagram.com/asad4nur',
    },
    {
        name: 'LinkedIn',
        icon: Linkedin,
        url: 'https://linkedin.com/in/asad4nur',
    },
    { name: 'Fiverr', url: 'https://www.fiverr.com/cutoutexpertbd' },
    { name: 'Upwork', url: 'https://www.upwork.com/freelancers/asad4nur' },
];

const bottomLinks = [
    { text: 'Terms and Conditions', url: '#' },
    { text: 'Privacy Policy', url: '#' },
];

export default function Footer() {
    const form = useForm({
        defaultValues: {
            email: '',
        },
    });

    const onSubmit = async (data: { email: string }) => {
        try {
            const response = await fetch(`/api/news-letter`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                toast.success(
                    'You have successfully subscribed to our newsletter!'
                );
                form.reset();
            } else {
                toast.error('Failed to subscribe. Please try again later.');
            }
        } catch (error) {
            toast.error((error as Error).message);
        }
    };

    return (
        <section className="bg-gray-100 padding-x padding-y">
            <div className="container mx-auto">
                <footer>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
                        <div className="col-span-1 xl:col-span-2">
                            <Link href={'/'}>
                                <span className="font-amulya text-2xl font-bold text-primary">
                                    MD Ashaduzzaman
                                </span>
                            </Link>
                            <p className="mt-4 text-muted-foreground">
                                Professional photo editor with over 10 years of
                                experience specializing in clipping paths,
                                background removal, retouching, and advanced
                                photo manipulation. Helping eCommerce brands,
                                photographers, and studios achieve perfection
                                with pixel-perfect results.
                            </p>

                            <div className="mt-6">
                                <p className="mb-3 font-semibold">
                                    Find me on:
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {socialLinks.map((social, idx) => (
                                        <Link
                                            key={idx}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener"
                                            className={`flex items-center gap-1 rounded-md ${
                                                social.icon
                                                    ? 'px-3 py-2'
                                                    : 'px-4 py-2'
                                            } transition-all hover:scale-105 ${
                                                idx % 6 === 0
                                                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                                    : idx % 6 === 1
                                                    ? 'bg-sky-100 text-sky-700 hover:bg-sky-200'
                                                    : idx % 6 === 2
                                                    ? 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                                                    : idx % 6 === 3
                                                    ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                                                    : idx % 6 === 4
                                                    ? 'bg-green-100 text-green-700 hover:bg-green-200'
                                                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                                            }`}
                                        >
                                            {social.icon && (
                                                <social.icon size={16} />
                                            )}
                                            <span className="font-medium">
                                                {social.name}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx} className="w-full">
                                <h3 className="mb-4 text-lg font-bold text-gray-800">
                                    {section.title}
                                </h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="font-medium transition-colors hover:text-primary"
                                        >
                                            <Link href={link.url}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <div className="w-full">
                            <h3 className="mb-4 text-lg font-bold text-gray-800">
                                Stay Updated
                            </h3>
                            <p className="mb-4 text-muted-foreground">
                                Subscribe to receive latest updates and special
                                offers
                            </p>
                            <form
                                className="space-y-2"
                                onSubmit={form.handleSubmit(onSubmit)}
                            >
                                <Input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full border-0 bg-white px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none"
                                    {...form.register('email')}
                                    required
                                />
                                <Button
                                    type="submit"
                                    disabled={form.formState.isSubmitting}
                                >
                                    {form.formState.isSubmitting
                                        ? 'Subscribing...'
                                        : 'Subscribe'}
                                </Button>
                                <p className="text-xs text-muted-foreground">
                                    We respect your privacy. Unsubscribe
                                    anytime.
                                </p>
                            </form>
                        </div>
                    </div>

                    <div className="my-8 h-px w-full bg-gray-200"></div>

                    <div className="flex flex-col justify-between gap-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
                        <p>
                            © {new Date().getFullYear()} ashaduzzaman.com. All
                            rights reserved.
                        </p>
                        <ul className="flex flex-wrap gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li
                                    key={linkIdx}
                                    className="hover:text-primary hover:underline"
                                >
                                    <Link href={link.url}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
}
