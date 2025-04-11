import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="padding-x padding-y" id="home">
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <Badge variant="outline">
                            The Best Photo Editor
                            <ArrowUpRight className="ml-2 size-4" />
                        </Badge>
                        <div className="my-6 text-3xl font-bold text-pretty lg:text-6xl font-amulya">
                            <h2>
                                I’m Md Ashaduzzaman, Expertise in Photo Editing
                            </h2>
                        </div>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            I’m a professional photo editor and specialist with
                            photo editing services that focus on solving your
                            problems by making a product that will exceed your
                            expectations so far.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Link href={'#portfolio'}>
                                <Button className="w-full sm:w-auto">
                                    Portfolio
                                </Button>
                            </Link>
                            <Link href={'#contact-me'}>
                                <Button
                                    variant={'outline'}
                                    className="w-full sm:w-auto"
                                >
                                    Contact Me
                                    <ArrowUpRight className="size-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <figure className="max-h-96 w-full aspect-square relative">
                        <Image
                            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                            alt="hero section image"
                            fill
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
