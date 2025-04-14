import {
    BadgePlus,
    Edit2Icon,
    Ghost,
    ImageIcon,
    Menu,
    Palette,
    PenTool,
    ShoppingCart,
    VenetianMask,
} from 'lucide-react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

const menu = [
    { title: 'Home', url: '#home' },
    {
        title: 'Services',
        url: '#services',
        items: [
            {
                title: 'eCommerce photo editing Service',
                icon: <ShoppingCart className="size-5 shrink-0" />,
                url: '#e-commerce-photo-editing-service',
            },
            {
                title: 'Clipping Path Service',
                icon: <PenTool className="size-5 shrink-0" />,
                url: '#clipping-path-service',
            },
            {
                title: 'Background Editing Service',
                icon: <Edit2Icon className="size-5 shrink-0" />,
                url: '#background-editing-service',
            },
            {
                title: 'Image Masking Service',
                icon: <VenetianMask className="size-5 shrink-0" />,
                url: '#image-masking-service',
            },
            {
                title: 'Shadow Creation Service',
                icon: <BadgePlus className="size-5 shrink-0" />,
                url: '#shadow-creation-service',
            },
            {
                title: 'Photo Retouching Service',
                icon: <ImageIcon className="size-5 shrink-0" />,
                url: '#photo-retouching-service',
            },
            {
                title: 'Ghost Mannequin Service',
                icon: <Ghost className="size-5 shrink-0" />,
                url: '#ghost-mannequin-service',
            },
            {
                title: 'Color Correction Service',
                icon: <Palette className="size-5 shrink-0" />,
                url: '#color-correction-service',
            },
        ],
    },
    {
        title: 'About Me',
        url: '#about-me',
    },
    {
        title: 'Portfolio',
        url: '#portfolio',
    },
    {
        title: 'Pricing',
        url: '#pricing',
    },
    {
        title: 'Contact Me',
        url: '#contact-me',
    },
];

export default function Navbar() {
    return (
        <section className="py-4 padding-x border-b sticky top-0 z-50 bg-background">
            <div className="container">
                <nav className="hidden lg:flex items-center justify-between">
                    <Link href={'/'}>
                        <span className="font-amulya text-xl xl:text-2xl">
                            MD Ashaduzzaman
                        </span>
                    </Link>

                    <div className="flex items-center">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menu.map((item) => renderMenuItem(item))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <Link href={'/get-quote'}>
                        <Button
                            size={'lg'}
                            className="rounded-full cursor-pointer"
                        >
                            Get Quote
                        </Button>
                    </Link>
                </nav>

                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        <Link href={'/'}>
                            <span className="font-amulya text-xl">
                                MD Ashaduzzaman
                            </span>
                        </Link>

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="size-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="overflow-y-auto">
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link href={'/'}>
                                            <span className="font-amulya text-xl">
                                                MD Ashaduzzaman
                                            </span>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="flex flex-col gap-6 p-4">
                                    <Accordion
                                        type="single"
                                        collapsible
                                        className="flex w-full flex-col gap-4"
                                    >
                                        {menu.map((item) =>
                                            renderMobileMenuItem(item)
                                        )}
                                    </Accordion>

                                    <Link href={'/get-quote'}>
                                        <Button className="rounded-full cursor-pointer w-full">
                                            Get Quote
                                        </Button>
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
}

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover text-popover-foreground">
                    {item.items.map((subItem) => (
                        <NavigationMenuLink
                            asChild
                            key={subItem.title}
                            className="w-80"
                        >
                            <SubMenuLink item={subItem} />
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem
                key={item.title}
                value={item.title}
                className="border-b-0"
            >
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem} />
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <Link
            key={item.title}
            href={item.url}
            className="text-md font-semibold"
        >
            {item.title}
        </Link>
    );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
        <Link
            className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
            href={item.url}
        >
            <div className="text-foreground">{item.icon}</div>
            <div>
                <div className="text-sm font-semibold">{item.title}</div>
            </div>
        </Link>
    );
};
