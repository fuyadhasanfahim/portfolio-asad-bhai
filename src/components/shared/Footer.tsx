import Link from 'next/link';

const menuItems = [
    {
        title: 'Services',
        links: [
            {
                text: 'eCommerce photo editing Service',
                url: '#e-commerce-photo-editing-service',
            },
            {
                text: 'Clipping Path Service',
                url: '#clipping-path-service',
            },
            {
                text: 'Background Editing Service',
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
        ],
    },
    {
        title: 'Shortcuts',
        links: [
            { text: 'Home', url: '#home' },
            {
                text: 'About Me',
                url: '#about-me',
            },
            {
                text: 'Portfolio',
                url: '#portfolio',
            },
            {
                text: 'Pricing',
                url: '#pricing',
            },
            {
                text: 'Contact Me',
                url: '#about-contact',
            },
        ],
    },
    {
        title: 'Resources',
        links: [
            { text: 'Help', url: '#' },
            { text: 'Sales', url: '#' },
            { text: 'Advertise', url: '#' },
        ],
    },
    {
        title: 'Social',
        links: [
            { text: 'Twitter', url: '#' },
            { text: 'Instagram', url: '#' },
            { text: 'LinkedIn', url: '#' },
        ],
    },
];

const bottomLinks = [
    { text: 'Terms and Conditions', url: '#' },
    { text: 'Privacy Policy', url: '#' },
];

export default function Footer() {
    return (
        <section className="padding-x padding-y bg-gray-100">
            <div className="container">
                <footer>
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <Link href={'/'}>
                                <span className="font-amulya text-xl xl:text-2xl">
                                    MD Ashaduzzaman
                                </span>
                            </Link>
                            <p className="mt-4 font-bold text-muted-foreground">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Facere nihil mollitia est
                                voluptates expedita, obcaecati illo, modi enim
                                eius eum architecto sapiente totam quam
                                laudantium ea ipsam esse commodi dolor.
                            </p>
                        </div>
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx} className="w-full">
                                <h3 className="mb-4 font-bold">
                                    {section.title}
                                </h3>
                                <ul className="space-y-4 text-muted-foreground">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="font-medium hover:text-primary"
                                        >
                                            <Link href={link.url}>
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
                        <p>
                            © {new Date().getFullYear()} ashaduzzaman.com. All
                            rights reserved.
                        </p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li
                                    key={linkIdx}
                                    className="underline hover:text-primary"
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
