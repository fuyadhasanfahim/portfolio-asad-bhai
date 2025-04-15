import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Contact from '../shared/Contact';

export default function HeroSection() {
    return (
        <section className="padding-x padding-y bg-gray-100" id="home">
            <div className="container">
                <div className="grid items-center gap-8 md:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-3 flex flex-col items-center text-center md:items-start md:text-left">
                        <Badge variant="outline">
                            The Best Photo Editor
                            <ArrowUpRight className="ml-2 size-4" />
                        </Badge>
                        <div className="my-6 text-3xl font-bold text-pretty lg:text-6xl font-amulya">
                            <h2 className="leading-18">
                                I’m Md Ashaduzzaman, Expertise in Photo Editing
                            </h2>
                        </div>
                        <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
                            I’m a professional photo editor and specialist with
                            photo editing services that focus on solving your
                            problems by making a product that will exceed your
                            expectations so far.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row md:justify-start">
                            <Link href={'#portfolio'}>
                                <Button
                                    variant={'outline'}
                                    size={'lg'}
                                    className="w-full sm:w-auto cursor-pointer"
                                >
                                    Portfolio
                                </Button>
                            </Link>
                            <Contact icon />
                        </div>
                    </div>
                    <figure className="w-full aspect-square relative lg:col-span-2">
                        <Image
                            src="https://res.cloudinary.com/dny7zfbg9/image/upload/v1744614859/f7iqbgxhai50imrrdrdl.jpg"
                            alt="hero section image"
                            fill
                            priority
                            className="rounded-md object-cover rotate-y-180"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}
